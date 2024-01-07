package com.equipodiscreto.IcesiPalace.Entity;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Entity
// @Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    // @Id
    // @Column(name = "user_id", length = 45)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userID;

    // @Column(name = "user_name", length = 255)
    private String username;

    // @Column(name = "email", length = 255)
    private String email;

    // @Column(name = "password", length = 255)
    private String password;

}
