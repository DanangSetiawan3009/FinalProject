/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.repository;

import com.finalproject.shopmade.entity.User;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Alphalyra
 */
public interface UsersRepository extends CrudRepository<User, Integer> {
    
    public User getUserByName(String userName);
    
}
