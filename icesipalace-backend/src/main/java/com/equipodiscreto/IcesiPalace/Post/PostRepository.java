package com.equipodiscreto.IcesiPalace.Post;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

    Post findByUserId(String user_id);

    List<Post> findByTitleContaining(String name);

}
