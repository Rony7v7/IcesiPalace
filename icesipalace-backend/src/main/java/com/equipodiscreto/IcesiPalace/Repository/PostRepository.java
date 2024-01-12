package com.equipodiscreto.IcesiPalace.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.equipodiscreto.IcesiPalace.Entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

    Post findByUserId(String user_id);

}
