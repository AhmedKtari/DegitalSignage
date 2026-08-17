package io.github.ahmedktarii.degitalesingage.Controllers;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.github.ahmedktarii.degitalesingage.DTOS.MediaUploadRequest;
import io.github.ahmedktarii.degitalesingage.Entities.Media;
import io.github.ahmedktarii.degitalesingage.Services.MediaService;
import io.github.ahmedktarii.degitalesingage.Services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/media")
@CrossOrigin
public class MediaUploadController {

    private final Cloudinary cloudinary;
    private final UserService userService;
    private final MediaService mediaService;

    public MediaUploadController(Cloudinary cloudinary, UserService userService, MediaService mediaService) {
        this.cloudinary = cloudinary;
        this.userService = userService;
        this.mediaService = mediaService;
    }

    @PostMapping("/MediaUpload")
    public ResponseEntity<?> mediaUpload(@ModelAttribute MediaUploadRequest request) {

        if (request.getFile().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of(
                    "message", "file is empty"));
        }

        try {
            Map uploadResult = cloudinary.uploader().upload(
                    request.getFile().getBytes(),
                    ObjectUtils.emptyMap()
            );

            String url = (String) uploadResult.get("secure_url");
            String publicId = (String) uploadResult.get("public_id");
            String resourceType = (String) uploadResult.get("resource_type"); // "image" or "video"
            Long size = Long.valueOf(uploadResult.get("bytes").toString());

            Long ownerId = userService.grapIdByEmail(request.getEmailRequest());
            if (ownerId == null) {
                return ResponseEntity.badRequest().body(Map.of(
                        "message", "No user found for that email"));
            }
            String ownerCode = "U" + String.format("%02d", ownerId);

            Media newMedia = Media.builder()
                    .url(url)
                    .mediaPublicId(publicId)
                    .type(resourceType)
                    .uploadedBy(ownerId)
                    .createdAt(LocalDateTime.now())
                    .size(size)
                    .ownerCode(ownerCode)
                    .build();

            mediaService.save(newMedia);

            return ResponseEntity.ok(Map.of(
                    "message", "upload successful",
                    "url", url
            ));

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of(
                    "message", "Upload failed: " + e.getMessage()));
        }
    }
}