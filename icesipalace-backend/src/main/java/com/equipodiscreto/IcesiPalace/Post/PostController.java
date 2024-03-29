package com.equipodiscreto.IcesiPalace.Post;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.equipodiscreto.IcesiPalace.Dto.PostDTO;
import com.equipodiscreto.IcesiPalace.Post.interfaces.PostServiceInterface;

import lombok.AllArgsConstructor;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("api/v1/post")
public class PostController {
    private PostServiceInterface postService;

    @GetMapping
    public PostMessage getPost(@RequestParam("name") String name) {
        PostMessage serverResponser = postService.getPostsByName(name);
        return serverResponser;
    }

    @PostMapping("/create")
    private ResponseEntity<?> createPost(@ModelAttribute PostDTO postDTO) {
        PostMessage serverResponser = postService.addPost(postDTO);
        return ResponseEntity.ok(serverResponser);
    }

    @GetMapping("list-all-post")
    public ResponseEntity<PostMessage> listAllPost() {
        PostMessage serverResponser = PostMessage.builder()
                .message("SUCCESS")
                .posts(postService.listAllPost())
                .status(true)
                .build();
        return ResponseEntity.ok(serverResponser);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") Long id, @ModelAttribute PostDTO postDTO) {
        PostMessage serverResponser = postService.updatePost(id, postDTO);
        return ResponseEntity.ok(serverResponser);
    }
}
