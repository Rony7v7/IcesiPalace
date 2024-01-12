package com.equipodiscreto.IcesiPalace.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class LoginDTO {
    private String email;
    private String password;

}
