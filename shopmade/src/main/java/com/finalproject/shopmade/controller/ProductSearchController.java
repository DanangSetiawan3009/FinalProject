/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.controller;

import com.finalproject.shopmade.entity.Product;
import com.finalproject.shopmade.repository.ProductSearchRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alphalyra
 */
@RestController
@CrossOrigin("*")
@RequestMapping("./api")
public class ProductSearchController {
    
    @Autowired 
    private ProductSearchRepository productSearchRepository;
    
    @GetMapping("/search")
    public ResponseEntity<List<Product>> search(
            @RequestParam String query,
            @RequestParam Integer size,
            @RequestParam Integer page,
            @RequestParam String sort) {
        
        Pageable pageable;
        if (null == sort) {
            pageable = PageRequest.of(page, size);
        } else switch (sort) {
            case "PRICE_ASC":
                pageable = PageRequest.of(page, size, Sort.by("prize"));
                break;
            case "PRICE_DESC":
                pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "prize"));
                break;
            case "TITLE":
                pageable = PageRequest.of(page, size, Sort.by("name"));
                break;
            default:
                pageable = PageRequest.of(page, size);
                break;
        }
        
        List<Product> products = productSearchRepository.findByNameContains(query, pageable);
        products.forEach((product) -> {
            product.setUser(null);
        });
        return ResponseEntity.ok(products);
    }
}
