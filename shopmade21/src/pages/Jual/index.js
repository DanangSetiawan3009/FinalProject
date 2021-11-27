import React, { Component } from 'react'
import "./jual.css"


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            jenisProduct: "",
            prize: 0,
            stock: 0,
        };
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showTextJ = (e) => {
        this.setState({
            jenisProduct: e.target.value
        })
    }

    addProduct = () => {
        const { name, jenisProduct, prize, stock } = this.state
        const produk = { name, jenisProduct, prize, stock }
        const token = localStorage.getItem("token")
        console.log("produk: ", produk);
        if(name==="" && jenisProduct==="" && prize===0 && stock===0)
            return alert("Silahkan isi produk yang akan dijual")

        return fetch("http://localhost:8080/api/product", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(produk),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + token
            }
        })
        .then((resp) => resp.json())
        .then((sukses) => {
            console.log("sukses: ", sukses);
            alert(sukses)
        })
        .catch((e) => {
            console.log("Error: ", e);
            alert("Silahkan login dahulu untuk menjual produk")
        })
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <form>
                        <label for="name"> Nama: </label>
                        <input type="text" 
                            id="name" 
                            name="name"
                            placeholder="Masukan nama produk..." 
                            onChange={this.showText}
                            value={this.state.name} />
                        <label for="jenis"> Jenis Produk: </label>
                        <select id="jenis" 
                            name="jenis"
                            value={this.state.jenisProduct}
                            onChange={this.showTextJ} >
                            <option value="Makanan">Makanan</option>
                            <option value="Minuman">Minuman</option>
                            <option value="Barang">Barang</option>
                        </select>
                        <label for="prize"> Harga: </label>
                        <input type="number" 
                            id="prize" 
                            name="prize"
                            placeholder="Masukan harga produk..."
                            onChange={this.showText} />
                        <label for="stock"> Stock: </label>
                        <input type="number" 
                            id="stock" 
                            name="stock"
                            placeholder="Masukan jumlah stock..."
                            onChange={this.showText} />
                    </form>
                    <button onClick={this.addProduct}>Tambahkan</button>
                </div>
            </div>
        );
    }
}

export default index;