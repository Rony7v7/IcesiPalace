package com.equipodiscreto.IcesiPalace.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @Column(name = "username", length = 255)
    private String username;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "phone_number", length = 255)
    private String phone_numer;

    @Column(name = "created_at", length = 255)
    private LocalDateTime created_at;

    //Contructor without phone_numer
    public User(String username, String email, String password, LocalDateTime created_at) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
    }
}
