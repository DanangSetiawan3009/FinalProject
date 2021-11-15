/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.repository;

import com.finalproject.shopmade.entity.Cart;
import com.finalproject.shopmade.entity.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Alphalyra
 */
public interface CartRepository extends CrudRepository<Cart, Integer> {
    
    public Cart findCartByStatusAndUser(String status, User user);
    public Optional<Cart> findCartByUserAndStatus(User user, String status);
    
    @Override
    public Iterable<Cart> findAll();
    
}
