package com.equipodiscreto.IcesiPalace.Post;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostMessage {

    private String message;
    private List<Post> posts;
    private Boolean status;

}
