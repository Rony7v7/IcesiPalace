package com.equipodiscreto.IcesiPalace.Service.interfaces;

import com.equipodiscreto.IcesiPalace.Dto.LoginDTO;
import com.equipodiscreto.IcesiPalace.Dto.UserDTO;
import com.equipodiscreto.IcesiPalace.PayloadResponse.LoginMessage;

public interface UserServiceInterface {
    String addUser(UserDTO userDTO);

    LoginMessage loginUser(LoginDTO loginDTO);
}
