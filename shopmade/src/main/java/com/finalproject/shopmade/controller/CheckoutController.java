/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.controller;

import com.finalproject.shopmade.entity.Cart;
import com.finalproject.shopmade.entity.User;
import com.finalproject.shopmade.repository.CartRepository;
import com.finalproject.shopmade.repository.UsersRepository;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alphalyra
 */
@RestController
@CrossOrigin("*")
@RequestMapping("./api")
public class CheckoutController {

    public static final String STATUS_ACTIVE = "ACTIVE";
    public static final String STATUS_PROCESSED = "PROCESSED";

    @Autowired
    public CartRepository cartRepository;

    @Autowired
    public UsersRepository usersRepository;

    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(
            Principal principal) {

        String userName = principal.getName();
        User user = usersRepository.getUserByName(userName);
        // mengambil Cart yg ACTIVE
        Cart activeCart = cartRepository.findCartByStatusAndUser(STATUS_ACTIVE, user);
        if (activeCart != null) {
            activeCart.setStatus(STATUS_PROCESSED);
            cartRepository.save(activeCart);
            return ResponseEntity.ok("Checkout Sukses");
        }
        return ResponseEntity.badRequest().body("No active cart for this user");

    }
}
