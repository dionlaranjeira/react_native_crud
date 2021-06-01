import React from "react";
import {Text} from "react-native";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="UserList"
            >
            <Stack.Screen
            name="UserList"
            component={UserList}
            />
            <Stack.Screen
            name="UserForm"
            component={UserForm}
            />   
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}