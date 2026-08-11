package io.github.ahmedktarii.degitalesingage.Controllers;

import io.github.ahmedktarii.degitalesingage.DTOS.RegisterRequest;
import io.github.ahmedktarii.degitalesingage.Entities.Roles;
import io.github.ahmedktarii.degitalesingage.Entities.User; // adjust path to match your project
import io.github.ahmedktarii.degitalesingage.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class RegisterController {   

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        User newUser = User.builder()
                        .username(request.getUsernameRequest().toString())
                        .email(request.getEmailRequest())
                        .password(request.getPasswordRequest())
                        .role(Roles.client)
                        .created_at(LocalDateTime.now())
                        .build();
        userService.save(newUser);
        return ResponseEntity.ok("User registered successfully");
    }
}