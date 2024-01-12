package com.equipodiscreto.IcesiPalace.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private String title;
    private String description;
    private String user_email;
    private String image;
    private String category;
}
