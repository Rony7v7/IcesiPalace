package com.equipodiscreto.IcesiPalace.Post;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.equipodiscreto.IcesiPalace.Dto.PostDTO;
import com.equipodiscreto.IcesiPalace.FileSaver.FileSaverUtil;
import com.equipodiscreto.IcesiPalace.Post.enums.Category;
import com.equipodiscreto.IcesiPalace.Post.interfaces.PostServiceInterface;
import com.equipodiscreto.IcesiPalace.User.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostServiceInterface {

    private PostRepository postRepository;
    private FileSaverUtil fileSaverUtil;

    @Override
    public PostMessage addPost(PostDTO postDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        Post post;
        try {
            post = new Post(
                    postDTO.getTitle(),
                    postDTO.getDescription(),
                    user.getEmail(),
                    fileSaverUtil.uploadFile(postDTO.getImage()),
                    LocalDateTime.now(),
                    postDTO.getPrice(),
                    Category.valueOf(postDTO.getCategory()));

            postRepository.save(post);
            return PostMessage.builder()
                    .posts(List.of(post))
                    .status(true)
                    .build();
        } catch (IOException e) {
            e.printStackTrace();
            return PostMessage.builder()
                    .status(false)
                    .posts(null)
                    .build();
        }

    }

    @Override
    public PostMessage getPost() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPost'");
    }

    @Override
    public PostMessage deletePost() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deletePost'");
    }

    @Override
    public PostMessage updatePost(Long id, PostDTO postDTO) {
        Post post = postRepository.findById(id).get();
        
        post.setTitle(postDTO.getTitle());
        post.setDescription(postDTO.getDescription());
        post.setPrice(postDTO.getPrice());
        post.setCategory(Category.valueOf(postDTO.getCategory()));
        postRepository.save(post);
        
        return PostMessage.builder()
                .posts(List.of(postRepository.findById(id).get()))
                .status(true)
                .build();
    }

    @Override
    public PostMessage getPosts() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPosts'");
    }

    @Override
    public PostMessage getPostsByUser() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPostsByUser'");
    }

    @Override
    public PostMessage getPostsByCategory() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPostsByCategory'");
    }

    @Override
    public List<Post> listAllPost() {
        return postRepository.findAll();
    }

}
