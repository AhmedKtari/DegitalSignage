package io.github.ahmedktarii.degitalesingage.DTOS;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String usernameRequest;
    private String passwordRequest;
}
