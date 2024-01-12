package com.equipodiscreto.IcesiPalace.Post;

import java.time.LocalDateTime;

import com.equipodiscreto.IcesiPalace.Post.enums.Category;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "post")
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 255, name = "title")
    private String title;

    @Column(length = 255, name = "body")
    private String description;

    @Column(length = 255, name = "user_id")
    private String userId;

    @Column(length = 255, name = "image")
    private String image;

    @Column(length = 255, name = "created_at")
    private LocalDateTime created_at;

    @Column(length = 255, name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;

    public Post(String title, String description, String user_id, String image, LocalDateTime created_at,
            Category category) {
        this.title = title;
        this.description = description;
        this.userId = user_id;
        this.image = image;
        this.created_at = created_at;
        this.category = category;
    }
}
