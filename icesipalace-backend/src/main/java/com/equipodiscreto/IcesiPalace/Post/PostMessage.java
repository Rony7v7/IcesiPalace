package com.equipodiscreto.IcesiPalace.Post;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostMessage {

    private String message;
    private Boolean status;

}
