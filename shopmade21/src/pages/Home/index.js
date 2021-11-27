import React, { Component } from 'react'
import {Mkn1, Mkn2, Mkn3, Mkn4, Mkn5, Mkn6} from '../../images/makanan'
import {Mnm1, Mnm2, Mnm3, Mnm4, Mnm5, Mnm6} from '../../images/minuman'
import {Brng1, Brng2, Brng3, Brng4, Brng5, Brng6} from '../../images/barang'
import "./home.css"


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="containerr">
                <label align="center"> Makanan </label>
                <div className="list-gambar1">
                    <img src={Mkn1} alt="brownis" />
                    <img src={Mkn2} alt="donut" />
                    <img src={Mkn3} alt="egg" />
                    <img src={Mkn4} alt="rolls" />
                    <img src={Mkn5} alt="sushi" />
                    <img src={Mkn6} alt="onde" />
                </div>
                <label align="center"> Minuman </label>
                <div className="list-gambar2">
                    <img src={Mnm1} alt="boba" />
                    <img src={Mnm2} alt="cendol" />
                    <img src={Mnm3} alt="choki" />
                    <img src={Mnm4} alt="esbuah" />
                    <img src={Mnm5} alt="estimun" />
                    <img src={Mnm6} alt="asinan" />
                </div>
                <label align="center"> Barang </label>
                <div className="list-gambar3">
                    <img src={Brng1} alt="kerajinan" />
                    <img src={Brng2} alt="pot" />
                    <img src={Brng3} alt="rak" />
                    <img src={Brng4} alt="sepatu" />
                    <img src={Brng5} alt="tas" />
                    <img src={Brng6} alt="kotak" />
                </div>
            </div>
        );
    }
}

export default index;