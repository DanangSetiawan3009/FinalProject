import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Home, Login, Jual, List, Cart } from "./Screen"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"


const Tab = createMaterialBottomTabNavigator()
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (this.props.isLogin)
            return (
                <Tab.Navigator initialRouteName="Home"
                    activeColor="#e91e63"
                    labelStyle={{ fontSize: 12 }}
                    style={{ backgroundColor: 'red' }} >
                        <Tab.Screen name="Home">
                            {props => <Home {...props} />}
                        </Tab.Screen>
                        <Tab.Screen name="Jual" 
                            component={Jual}
                            options={{
                                tabBarLabel: "Jual"
                            }} />
                        <Tab.Screen name="List" 
                            component={List}
                            options={{
                                tabBarLabel: "List"
                            }} />
                        <Tab.Screen name="Cart" 
                            component={Cart}
                            options={{
                                tabBarLabel: "Cart"
                            }} />
                </Tab.Navigator>
            )

        return (
            <Tab.Navigator initialRouteName="Login"
                activeColor="#e91e63"
                labelStyle={{ fontSize: 12 }}
                style={{ backgroundColor: 'red' }} >
                <Tab.Screen name="Login">
                    {props => <Login {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.loginReducer.statLogin
})

export default connect(mapStateToProps) (Router);