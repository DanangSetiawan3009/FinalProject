import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, } from "react-native"
import { Header } from "react-native-elements"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Images//bgImage.jpg")}>
                <Header
                    centerComponent={{ text: 'Home Page', style: { color: '#fff' } }}
                    />
                <View style={styles.container}>
                    <View style={styles.teks}>
                        <Text>Hai</Text>
                    </View>
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
    },
    teks: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
    }
})

export default Home;