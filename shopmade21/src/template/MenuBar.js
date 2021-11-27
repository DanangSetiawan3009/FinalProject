import React, { Component } from 'react'
import { connect } from 'react-redux';
import Menu from "../component/menu"
import "./menubar.css"


class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logOut = () => {
        alert("Log Out Sukses")
        localStorage.removeItem("token")
        this.props.klikLogout()
    }
    
    render() {
        if (this.props.statLogin) {
            return (
                <div className="listmenu">
                    <div className="menu-container">
                        <div className="menu"> <Menu target="/"> Home </Menu> </div>
                        <div className="menu"> <Menu target="/jual"> Jual Produk </Menu> </div>
                        <div className="menu"> <Menu target="/edit"> Edit Produk </Menu> </div>
                        <div className="menu"> <Menu target="/list"> List Produk </Menu> </div>
                        <div className="menu"> <Menu target="/cart"> Keranjang </Menu> </div>
                    </div>
                    <div className="login">
                        <div className="login-btn"> <button onClick={this.logOut}>Logout</button> </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="listmenu">
                <div className="menu-container">
                    <div className="menu"> <Menu target="/"> Home </Menu> </div>
                    <div className="menu"> <Menu target="/list"> List Produk </Menu> </div>
                </div>
                <div className="login">
                    <div className="login-btn"><Menu target="/login"> Login </Menu></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statLogin: state.loginReducer.statusLogin
})

const mapDispatchToProps = dispatch => ({
    klikLogout: () => dispatch ({
        type: "LOGOUT_SUKSES"
    })
})

export default connect(mapStateToProps, mapDispatchToProps) (MenuBar);