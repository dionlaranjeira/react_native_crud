import React from "react";
import {Alert, Text} from "react-native";
import { FlatList, View, StyleSheet } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'



import users from "../data/users"
export default props =>{
    
    function getUserItem({item: user}){
        return (
            <View>
                <ListItem
                bottomDivider
                onPress={()=>props.navigation.navigate('UserForm')}
                key={user.id}>
                    <Avatar rounded size="large" source={{uri: user.avatarUrl}} />
                    <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }
    
    return(
       <View>
           <FlatList
           data= {users}
           keyExtractor={user => user.id.toString()}
           renderItem={getUserItem}
           >

           </FlatList>
       </View>
    );
}

const styles = StyleSheet.create({

     avatar:{
         borderRadius: 10,
     }
    });
    