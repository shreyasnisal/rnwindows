import React, {Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../routes/Home'
import StackScreen from '../routes/StackScreen'

const Stack = createStackNavigator()

export default class StackNav extends Component {
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='StackScreen' component={StackScreen} />
            </Stack.Navigator>
        )
    }
}