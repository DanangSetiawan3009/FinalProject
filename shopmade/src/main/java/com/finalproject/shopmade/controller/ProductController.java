/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.controller;

import com.finalproject.shopmade.entity.Product;
import com.finalproject.shopmade.entity.User;
import com.finalproject.shopmade.repository.ProductRepository;
import com.finalproject.shopmade.repository.UsersRepository;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
public class ProductController {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private UsersRepository usersRepository;
    
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {
        Iterable<Product> products = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (Product product : products) {
            productList.add(product);
        }
        return ResponseEntity.ok(productList);
    }
    
    @PostMapping("/product")
    public ResponseEntity<String> saveProduct(
            @RequestBody Product product,
            Principal principal) { 
        String userName = principal.getName();
        User loggedInUser = usersRepository.getUserByName(userName);
        product.setUser(loggedInUser);
        productRepository.save(product);
        return ResponseEntity.ok("Product berhasil disimpan");
    }
    
    @PutMapping("/product/")
    public ResponseEntity<String> updateProduct(
            @RequestBody Product product,
            Principal principal) {
        String userName = principal.getName();
        User user = usersRepository.getUserByName(userName);
        if (user != null) {
            Product products = productRepository.findById(product.getId()).get();
            if (products != null
                    && products.getUser() != null
                    && user.getId().equals(products.getUser().getId())) {
                products.setJenisProduct(product.getJenisProduct());
                products.setName(product.getName());
                products.setPrize(product.getPrize());
                products.setStock(product.getStock());
                productRepository.save(products);
                return ResponseEntity.ok("Product berhasil diupdate");
            }
        }
        return ResponseEntity.badRequest()
                .body("Invalid parameter or product is not allowed to update");
    }
    
    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteUserById(
            @PathVariable(name = "id") Integer id,
            Principal principal) {
        String userName = principal.getName();
        User user = usersRepository.getUserByName(userName);
        if (user != null) {
            Product product = productRepository.findById(id).get();
            if (product != null
                    && product.getUser() != null
                    && product.getUser().getId().equals(user.getId())) {
                productRepository.deleteById(id);
                return ResponseEntity.ok("Product berhasil didelete");
            }
        }
        return ResponseEntity.badRequest()
                .body("Invalid parameter or product is not allowed to update");
    }
}
