/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.shopmade.tokensecurity;

import java.io.Serializable;

/**
 *
 * @author Alphalyra
 */ 
public class JwtResponse implements Serializable {
    
    private final String jwttoken;

    public JwtResponse (String jwttoken) {
        this.jwttoken = jwttoken;
    }
    
    public String getJwttoken() {
        return jwttoken;
    }
    
    
    
}
