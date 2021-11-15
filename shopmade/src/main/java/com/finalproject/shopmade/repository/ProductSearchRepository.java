/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.repository;

import com.finalproject.shopmade.entity.Product;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author Alphalyra
 */
public interface ProductSearchRepository extends PagingAndSortingRepository<Product, Integer>{
    
    public List<Product> findByNameContains (
            String jenisProduct, Pageable pageable);
}