/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.repository;

import com.finalproject.shopmade.entity.Product;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Alphalyra
 */
public interface ProductRepository extends CrudRepository<Product, Integer> {
    @Override
    public Iterable<Product> findAll();
    
    @Override
    public Optional<Product> findById(Integer id);
    
    public Product findByid(Integer id);
}
