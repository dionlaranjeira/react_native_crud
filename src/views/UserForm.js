import React, { useState } from "react";
import {Text} from "react-native";

export default ({route, nagivation}) =>{
    // console.warn(Object.keys())
    const [user, setUser] = useState(route.params ? route.params : {})
    return(
        <>
        <Text> id {user.id} </Text>
        <Text> name {user.name} </Text>
        </>
    );
}