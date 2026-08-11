package io.github.ahmedktarii.degitalesingage.DTOS;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    private String usernameRequest;
    private String passwordRequest;
    private String emailRequest;
}