package io.github.ahmedktarii.degitalesingage.Controllers;

import io.github.ahmedktarii.degitalesingage.DTOS.RegisterRequest;
import io.github.ahmedktarii.degitalesingage.Entities.Roles;
import io.github.ahmedktarii.degitalesingage.Entities.User; // adjust path to match your project
import io.github.ahmedktarii.degitalesingage.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class RegisterController {   

    @Autowired
    public UserService userService;

    @PostMapping("/register")

    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        if (!userService.doesEmailExist(request.getEmailRequest()) ) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already in use"));
        }


        User newUser = User.builder()
                        .username(request.getUsernameRequest())
                        .email(request.getEmailRequest())
                        .password(request.getPasswordRequest())
                        .role(Roles.client)
                        .createdAt(LocalDateTime.now())
                        .build();
        userService.save(newUser);
        return ResponseEntity.ok("User registered successfully");
    }


}