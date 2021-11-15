/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.controller;

import com.finalproject.shopmade.model.RegistrasiUser;
import com.finalproject.shopmade.entity.User;
import com.finalproject.shopmade.repository.UsersRepository;
import com.finalproject.shopmade.tokensecurity.JwtRequest;
import com.finalproject.shopmade.tokensecurity.JwtResponse;
import com.finalproject.shopmade.tokensecurity.JwtTokenUtil;
import com.finalproject.shopmade.tokensecurity.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alphalyra
 */

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class UsersController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtTokenUtil tokenUtil;
    
    @Autowired
    private JwtUserDetailsService userDetailsServices;
    
    @Autowired
    private UsersRepository usersRepository;
    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
    
    @PostMapping("/registrasi")
    public ResponseEntity<String> prosesRegistrasi(
        @RequestBody RegistrasiUser regis) {
        
        User user = new User();
        user.setName(regis.getUsername());
        user.setPassword(bcrypt.encode(regis.getPassword()));
        usersRepository.save(user);
        return ResponseEntity.ok("Registrasi Sukses");
    }
    
    private void authentication(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password)); 
        } catch (DisabledException e) {
            throw new Exception("User_Disabled", e);
        } 
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authentication(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        UserDetails userDetails = userDetailsServices.loadUserByUsername(authenticationRequest.getUsername());
        String token = tokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
