/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Alphalyra
 */
@Entity
@Table(name= "t_product")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name="name", length = 255, nullable = false)
    private String name;
    
    @Column(name= "jenis_product", length = 255, nullable = false)
    private String jenisProduct;
    
    @Column(name="prize", nullable = false)
    private Integer prize;
    
    @Column(name="stock", nullable = false)
    private Integer stock;
    
    @ManyToOne
    @JoinColumn(name="id_user", nullable = false)
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJenisProduct() {
        return jenisProduct;
    }

    public void setJenisProduct(String jenisProduct) {
        this.jenisProduct = jenisProduct;
    }

    public Integer getPrize() {
        return prize;
    }

    public void setPrize(Integer prize) {
        this.prize = prize;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
    
    

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    
}
