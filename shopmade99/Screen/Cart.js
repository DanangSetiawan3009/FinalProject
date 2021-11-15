import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Images//bgImage.jpg")}>
                <View style={styles.container}>
                    <Text>
                        Ini halaman Cart
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "50%"
    },
    img: {
        flex: 1,
    }
})

export default Cart;