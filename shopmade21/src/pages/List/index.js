import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./list.css"


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            quantity: 1,
            search: ""
        };
    }

    showText = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    async componentDidMount() {
        await fetch("http://localhost:8080/api/products", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((products) => {
            console.log("produk: ", products);
            this.setState({
                product: products
            })
        })
        .catch((e) => {
            console.log("Error: ", e)
            alert("Error")
        })
    }

    dellProduk = (e) => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:8080/api/product/${e.target.value}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + token,
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((msg) => {
            console.log("response:", msg)
            alert(msg)
        })
        .catch((e) => {
            alert("Error: ", e)
        })
    }

    beliProduk = async (e) => {
        console.log(e.target.value)
        const token = localStorage.getItem("token")
        const quantity = this.state.quantity
        const idProduk = e.target.value
        await fetch("http://localhost:8080/api/add-to-cart", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(quantity && idProduk) ,
            headers: {
                "Authorization": "Bearer" + token,
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((msg) => {
            console.log("resp: ", msg)
            alert(msg)
        })
        .catch((e) => {
            console.log("Error: ", e)
            alert("Gagal membeli produk")
        })
    }

    cariProduk = async () => {
        const query = this.state.search
        await fetch(`http://localhost:8080/api/search?query=${query}&page=0&size=20&sort=PRICE_ASC`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((products) => {
            this.setState({
                product: products
            })
        })
        .catch((e) => {
            alert("Error: ", e)
        })
    }

    renderList = () => {
        return this.state.product.map((product, idx) => {
            return <tr key={idx}>
                <td align="center">{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.jenisProduct}</td>
                <td align="center">{product.prize}</td>
                <td align="center">{product.stock}</td>
                <td>{product.user.name}</td>
                <td align="center"><button onClick={this.beliProduk} value={product.id}>Beli</button></td>
                <td align="center"><Link to={`/edit/${idx}`}>Edit</Link></td>
                <td align="center"><button onClick={this.dellProduk} value={idx}>Delete</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <input type="text"
                        id="input1"
                        name="search"
                        placeholder="Cari produk.."
                        onChange={this.showText}
                        value={this.state.search} />
                    <button onClick={this.cariProduk} className="btn3"> Cari </button>
                    <table>
                        <thead>
                            <tr>
                                <td width="25" align="center">No</td>
                                <td width="200" align="center">Nama</td>
                                <td width="200" align="center">Jenis Produk</td>
                                <td width="100" align="center">Prize</td>
                                <td width="50" align="center">Stock</td>
                                <td width="200" align="center">Nama Penjual</td>
                                <td width="175" colSpan="3" align="center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default index;