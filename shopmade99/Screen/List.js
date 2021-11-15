import React, { Component } from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { TAMBAH_SUKSES } from '../Redux/Constans/ProductConstans';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            produks: []
        };
    }

    fetchingData = async () => {
        try {
            const resp = await fetch("http://localhost:8080/api/products", {
              method: "GET",
              mode: "cors",
              headers: {
                  "Content-type": "application/json",
                  "Access-Control-Allow-Origin": "*"
              }
          })
          const datas = await resp.json()
          this.props.addProduk(datas)
          console.log("Produk:", datas)
          } catch (e) {
              console.log("Error: ", e)
          }
    }

    componentDidMount() {
        this.fetchingData()
    }

    rendering = items => {
        const { item } = items
        return (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.jenisProduct}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.prize}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.stock}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.user.name}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    render() {
        return (
            <FlatList
                keyExtractor={(data, idx) => idx.toString()}
                data={this.props.listProduk}
                renderItem={this.rendering}
            />
        );
    }
}

const mapStateToProps = state => ({
    listProduk: state.productReducer.produk
})

const mapDispatchToProps = dispatch => ({
    addProduct: produk => dispatch({
        type: TAMBAH_SUKSES,
        payload: produk
    })
})

export default connect(mapStateToProps, mapDispatchToProps) (List);