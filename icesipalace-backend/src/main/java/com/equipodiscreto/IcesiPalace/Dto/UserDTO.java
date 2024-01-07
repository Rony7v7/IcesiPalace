package com.equipodiscreto.IcesiPalace.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private int userID;
    private String username;
    private String email;
    private String password;
}
