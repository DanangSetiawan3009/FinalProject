import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native"
import { Input, Button, Header } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect } from 'react-redux';
import { loginHandler, regisHandler } from "../Redux/Actions/loginAction"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: ""
        };
    }

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    loginBtn = () => {
        const { username, password } = this.state
            return this.props.loginPress({username, password})
    }

    regisBtn = () => {
        const { username, password } = this.state
        this.resetForm()
            return this.props.regisPress({username, password})
    }

    static getDerivedStateFromProps(props, state) {
        return state = {
            errorMsg: props.loginMessage
        }
    }

    render() {
        return (
            <SafeAreaProvider>
                <ImageBackground style={styles.img} source={require("..//Assets//Images//bgImage.jpg")}>
                    <Header
                        centerComponent={{ text: 'Login Page', style: { color: '#fff' } }} />
                    <View style={styles.container} >
                        <Text style={styles.text1}>Login</Text>
                        <Input style={styles.input}
                            placeholder="Input Username"
                            onChangeText={username => this.setState({ username })} />
                        <Input style={styles.input}
                            placeholder="Input Password"
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true} />
                        <Button buttonStyle={styles.submit}
                            title={"Login"}
                            onPress={this.loginBtn} />
                        <Text style={styles.text}>Belum punya Akun?</Text>
                        <Button buttonStyle={styles.submit}
                            title={"Daftar"}
                            onPress={this.regisBtn} />
                    </View>
                </ImageBackground>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        flex: 1,
    },
    text1: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
        color: "black"
    },
    text2: {
        fontSize: 15,
        color: "black"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        color: "black"
    },
    submit: {
        backgroundColor: "black"
    }
})

const mapStateToProps = state => ({
    loginMessage: state.loginReducer.msg
})


const mapDispatchToProps = dispatch => ({
    loginPress: data => loginHandler(data, dispatch),
    regisPress: data1 => regisHandler(data1, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);