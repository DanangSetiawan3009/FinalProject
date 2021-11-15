import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';


class Jual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            jenisProduct: "",
            prize: 0,
            stock: 0
        };
    }

    addProduct = () => {
        const {name, jenisProduct, harga, stock} = this.state
        return this.props.addProduk({name, jenisProduct, harga, stock})
    }

    render() {
        return (
            <ImageBackground style={styles.img} source={require("..//Assets//Images//bgImage.jpg")}>
                <View style={styles.container}>
                    <Text> Masukan produk yang akan anda jual </Text>
                    <Input style={styles.input}
                        placeholder="Masukan nama produk..."
                        onChangeText={name => this.setState({ name }) } />
                    <Input style={styles.input}
                        placeholder="Masukan jenis produk..."
                        onChangeText={jenisProduct => this.setState({ jenisProduct }) } />
                    <Input style={styles.input}
                        placeholder="Masukan harga produk..."
                        onChangeText={harga => this.setState({ harga }) } />
                    <Input style={styles.input}
                        placeholder="Masukan stock produk..."
                        onChangeText={stock => this.setState({ stock }) } />
                    <Button buttonStyle={styles.btn1}
                        value="Tambahkan produk"
                        onPress={this.addProduct} />
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
    input: {
        borderWidth: 1,
        padding: 10,
        color: "black",
    },
    btn1: {
        backgroundColor: "black"
    }
})

const mapDispatchToProps = dispatch => ({
    addProduk: dataProduk => addHandler(dataProduk, dispatch)
})

export default connect(null, mapDispatchToProps) (Jual);