package com.equipodiscreto.IcesiPalace.PayloadResponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginMessage {
    String message;
    Boolean status;
}
