package com.equipodiscreto.IcesiPalace.UserController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equipodiscreto.IcesiPalace.Dto.LoginDTO;
import com.equipodiscreto.IcesiPalace.Dto.UserDTO;
import com.equipodiscreto.IcesiPalace.PayloadResponse.LoginMessage;
import com.equipodiscreto.IcesiPalace.Service.interfaces.UserServiceInterface;

import lombok.AllArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
@AllArgsConstructor
public class UserController {

    private UserServiceInterface userService;

    @PostMapping("/save")
    public String saveUser(@RequestBody UserDTO userDTO) {
        System.out.println(userDTO);
        String id = userService.addUser(userDTO);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginMessage loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
