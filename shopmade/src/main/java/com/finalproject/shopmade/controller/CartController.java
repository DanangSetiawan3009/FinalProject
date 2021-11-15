/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.controller;

import com.finalproject.shopmade.entity.Cart;
import com.finalproject.shopmade.entity.CartItem;
import com.finalproject.shopmade.entity.Product;
import com.finalproject.shopmade.entity.User;
import com.finalproject.shopmade.repository.CartItemRepository;
import com.finalproject.shopmade.repository.CartRepository;
import com.finalproject.shopmade.repository.ProductRepository;
import com.finalproject.shopmade.repository.UsersRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("./api")
public class CartController {
    
    @Autowired
    private CartRepository cartRepository;
    
    @Autowired
    private CartItemRepository cartItemRepository;
    
    @Autowired
    private UsersRepository userRepository;
    
    @Autowired
    private ProductRepository productRepository;
    
    public static final String STATUS_ACTIVE = "ACTIVE";
    
    @PostMapping("/add-to-cart")
    public ResponseEntity<String> saveCart(@RequestBody CartItem cartItem,
            Principal principal) {
        String userName = principal.getName();
        User user = userRepository.getUserByName(userName);
        Optional<Cart> optionalCart = cartRepository.findCartByUserAndStatus(user, STATUS_ACTIVE);
        Optional<CartItem> optionalCartItem = cartItemRepository.findByProduct(cartItem.getProduct());
        if (optionalCart.isPresent() && optionalCartItem.isPresent()) { 
            Cart cart = new Cart();
            cart.setUser(user);
            cart.setStatus("ACTIVE");
            cartRepository.save(cart);
            Cart activeCart = cartRepository.findCartByStatusAndUser(STATUS_ACTIVE, cart.getUser());
            Product product = productRepository.findByid(cartItem.getProduct().getId()); 
            if (activeCart != null && product != null) {
                if (product.getStock() >= cartItem.getQuantity()) {
                    product.setStock(product.getStock() - cartItem.getQuantity());
                    productRepository.save(product);
                    cartItem.setProduct(product);
                    cartItem.setCart(cart);
                    cartItem.setPrize(product.getPrize() * cartItem.getQuantity());
                    cartItemRepository.save(cartItem);
                    return ResponseEntity.ok("Add to Cart sukses");
                } else {
                    return ResponseEntity.badRequest().body("Stock barang tidak cukup");
                }

            }
        } else {
          Cart c = optionalCart.get();
            Product product = productRepository.findByid(cartItem.getProduct().getId());
            if (c.getUser() != null && product != null && optionalCartItem !=null) {
                if (product.getStock() >= cartItem.getQuantity()) {
                    product.setStock(product.getStock() - cartItem.getQuantity());
                    productRepository.save(product);
                    cartItem.setProduct(product);
                    cartItem.setCart(c);
                    cartItem.setPrize(product.getPrize() * cartItem.getQuantity());
                    cartItemRepository.save(cartItem);
                    return ResponseEntity.ok("ok");
                } else {
                    return ResponseEntity.badRequest().body("Quantiti Melebihi dari Stock");
                }
            }
        }
        return ResponseEntity.badRequest().body("Invalid Parameter");
    }
    
    @GetMapping("/cartitems")
    public ResponseEntity<List<CartItem>> getCartItem() {
        Iterable<CartItem> cartitems = cartItemRepository.findAll();
        List<CartItem> cartItemList = new ArrayList<>();
        for (CartItem cartitem : cartitems) {
            cartItemList.add(cartitem);
        }
        return ResponseEntity.ok(cartItemList);
    }
    
    @GetMapping("/carts")
    public ResponseEntity<List<Cart>> getCart() {
        Iterable<Cart> carts = cartRepository.findAll();
        List<Cart> cartList = new ArrayList<>();
        for (Cart cart : carts) {
            cartList.add(cart);
        }
        return ResponseEntity.ok(cartList);
    }
    
}
