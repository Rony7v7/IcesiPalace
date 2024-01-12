package com.equipodiscreto.IcesiPalace.Post;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equipodiscreto.IcesiPalace.Dto.PostDTO;
import com.equipodiscreto.IcesiPalace.Post.interfaces.PostServiceInterface;

import lombok.AllArgsConstructor;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("api/v1/post")
public class PostController {
    private PostServiceInterface postService;

    @PostMapping("/create")
    private ResponseEntity<?> createPost(@RequestBody PostDTO postDTO) {
        PostMessage serverResponser = postService.addPost(postDTO);
        return ResponseEntity.ok(serverResponser);
    }
}
