import React from "react";
import {Text,SafeAreaView} from "react-native";
import UserForms from "./views/UserForm";
import UserList from "./views/UserList";

export default props =>{
    return(
        <>
        <SafeAreaView>
         <UserForms></UserForms>
         <UserList></UserList>
        </SafeAreaView>
        </>
    );
}