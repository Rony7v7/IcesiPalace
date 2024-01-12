package com.equipodiscreto.IcesiPalace.Post.interfaces;

import com.equipodiscreto.IcesiPalace.Dto.PostDTO;
import com.equipodiscreto.IcesiPalace.Post.Post;
import com.equipodiscreto.IcesiPalace.Post.PostMessage;

import java.util.List;

public interface PostServiceInterface {
    PostMessage addPost(PostDTO postDTO);

    PostMessage getPost();

    PostMessage deletePost();

    PostMessage updatePost();

    PostMessage getPosts();

    PostMessage getPostsByUser();

    PostMessage getPostsByCategory();

    List<Post> listAllPost();
}
