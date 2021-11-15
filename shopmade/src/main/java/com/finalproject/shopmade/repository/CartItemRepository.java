/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.repository;

import com.finalproject.shopmade.entity.Cart;
import com.finalproject.shopmade.entity.CartItem;
import com.finalproject.shopmade.entity.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Alphalyra
 */
public interface CartItemRepository extends CrudRepository<CartItem, Integer>{
    public Optional<CartItem> findByProduct(Product product);
    public List<CartItem> findCartItemByCart(Cart cart);
    
    @Override
    public Iterable<CartItem> findAll();
    
}
