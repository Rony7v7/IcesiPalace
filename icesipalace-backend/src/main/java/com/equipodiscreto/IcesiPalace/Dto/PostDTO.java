package com.equipodiscreto.IcesiPalace.Dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private String title;
    private String description;
    private MultipartFile image;
    private Double price;
    private String category;
}
