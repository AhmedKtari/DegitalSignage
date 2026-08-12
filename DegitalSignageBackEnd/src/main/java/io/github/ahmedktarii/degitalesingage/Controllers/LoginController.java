package io.github.ahmedktarii.degitalesingage.Controllers;

import io.github.ahmedktarii.degitalesingage.DTOS.LoginRequest;
import io.github.ahmedktarii.degitalesingage.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class LoginController {

    @Autowired
    private UserService userService;;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request ) {
        if (!userService.existsByUsername(request.getUsernameRequest()) )
        {
            return ResponseEntity.badRequest().body(Map.of("message", "user doesn't exist"));
        }
        if(!((Objects.equals(userService.grapPasswordByUsername(request.getUsernameRequest()), request.getPasswordRequest())))){
            return ResponseEntity.badRequest().body(Map.of("message", "wrong credentials"));
        }
        else {
            return ResponseEntity.ok(Map.of(
                    "message", "login successful",
                    "username", request.getUsernameRequest().toString()
            ));
        }

    }
}
