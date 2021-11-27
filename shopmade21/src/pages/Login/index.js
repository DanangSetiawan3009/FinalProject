import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./login.css"


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    showText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginBtn = () => {
        const { username, password } = this.state
        const user = { username, password }

        if(username === "" && password === "") 
            return alert("Silahkan isi Username/Password Anda")
        
        return fetch("http://localhost:8080/api/login", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(async (resp) => await resp.json())
        .then((token) => {
            console.log("resp token:", token)
            localStorage.setItem("token", token.jwttoken)
            this.props.loginHandler(token.jwttoken)
            this.props.history.push("/")
            alert("Login Sukses")
        })
        .catch((e) => {
            console.log("Error: ", e);
            alert("Username/Password salah, silahkan login ulang")
        })
    }

    regisBtn = () => {
        const { username, password } = this.state
        const user = { username, password }

        if(username === "" && password === "") 
            return alert("Username/Password tidak boleh Kosong")

        this.resetForm()
        return fetch("http://localhost:8080/api/registrasi", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then((resp) => resp.json())
        .then((msg) => {
            console.log("Sukses:", msg);
        })
        .catch((e) => {
            console.log("Error: ", e);
            alert("Registrasi gagal")
        })
    }

    render() {
        return (
            <div className="container">
                ShopMade
                <div className="login-container">
                    <form>
                        <label> Username : </label>
                        <input type="text"
                            name="username"
                            placeholder="Masukan Username Anda..."
                            onChange={this.showText}
                            value={this.state.username} />
                        <label> Password : </label>
                        <input type="password"
                            name="password"
                            placeholder="Masukan Password Anda..."
                            onChange={this.showText}
                            value={this.state.password} />
                    </form>
                    <div className="text">
                        <button onClick={this.loginBtn} className="btn1" > Login </button>
                        Belum punya akun?
                        <button onClick={this.regisBtn} className="btn2" > Daftar </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginHandler: token => dispatch({
        type: "LOGIN_SUKSES",
        payload: token
    })
})

export default connect(null, mapDispatchToProps)(index);