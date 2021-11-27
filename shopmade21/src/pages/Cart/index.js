import React, { Component } from 'react'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: []
        };
    }

    async componentDidMount() {
        await fetch("http://localhost:8080/api/cartitems", {
            method: "GET",
            mode: "cors",
            header: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((cartItems) => {
            console.log("cartItem: ", cartItems);
            this.setState({
                cartItem: cartItems
            })
        })
        .catch((e) => {
            console.log("Error: ", e)
            alert("Keranjang anda kosong, Silahkan melakukan pembelian dahulu")
        })
    }

    checkOut = () => {
        fetch("http://localhost:8080/api/checkout", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((msg) => {
            alert(msg)
        })
        .catch((e) => {
            console.log("Error: ", e);
            alert("Checkout gagal")
        })
    }

    renderList = () => {
        return this.state.cartItem.map((cartItem, idx) => {
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{cartItem.product}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.prize}</td>
                <td>{cartItem.user}</td>
                <td align="center"><button onClick={() => this.checkOut(idx)}>Checkout</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td width="25" align="center">No</td>
                                <td width="200" align="center">Nama Produk</td>
                                <td width="200" align="center">Quantity</td>
                                <td width="100" align="center">Prize</td>
                                <td width="50" align="center">Id Cart</td>
                                <td width="200" align="center">Action</td>
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