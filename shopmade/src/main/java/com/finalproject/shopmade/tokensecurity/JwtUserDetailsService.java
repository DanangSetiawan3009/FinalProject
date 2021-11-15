/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.tokensecurity;

import com.finalproject.shopmade.entity.User;
import com.finalproject.shopmade.repository.UsersRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 *
 * @author Alphalyra
 */
@Component 
public class JwtUserDetailsService implements UserDetailsService {  

    @Autowired
    private UsersRepository usersRepository ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.getUserByName(username);
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getName(), user.getPassword(), Collections.emptyList());
        } else {
            throw new UsernameNotFoundException("User not found with username : " + username);
        }
    }
}
