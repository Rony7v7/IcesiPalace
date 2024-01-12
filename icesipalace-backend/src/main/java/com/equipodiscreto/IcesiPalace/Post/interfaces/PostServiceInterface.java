package com.equipodiscreto.IcesiPalace.Post.interfaces;

import com.equipodiscreto.IcesiPalace.Dto.PostDTO;
import com.equipodiscreto.IcesiPalace.PayloadResponse.PostMessage;

public interface PostServiceInterface {
    PostMessage addPost(PostDTO postDTO);

    PostMessage getPost();

    PostMessage deletePost();

    PostMessage updatePost();

    PostMessage getPosts();

    PostMessage getPostsByUser();

    PostMessage getPostsByCategory();

}
