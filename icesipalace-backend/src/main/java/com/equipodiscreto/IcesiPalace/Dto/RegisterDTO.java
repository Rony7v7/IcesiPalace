package com.equipodiscreto.IcesiPalace.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class RegisterDTO {
    private String username;
    private String email;
    private String password;
    private String phone_numer;
}
