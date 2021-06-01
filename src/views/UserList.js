import React from "react";
import {Alert, Text} from "react-native";
import { FlatList, View, StyleSheet } from "react-native";
import { ListItem, Avatar ,Badge} from 'react-native-elements'
import { Button, Icon } from "react-native-elements";


import users from "../data/users"
export default props =>{
    
    function getUserItem({item: user}){
        return (
            <View>
                <ListItem
                bottomDivider
                onPress={()=>props.navigation.navigate('UserForm')}
                // rightElement={<Icon name="edit" size={25}  color='#f00'  ></Icon>}
                key={user.id}>
                    <Avatar rounded size="large" source={{uri: user.avatarUrl}} />
                    <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Icon name={'edit'} color="orange" 
                    onPress={()=>Alert.alert("Edit clicado")}
                    />
                    <Icon name={'delete'} color="red" 
                    onPress={()=>Alert.alert("CONFIRMAR EXCLUSÃO","Deseja exclui "+`${user.name}`+" ?",[
                        {text: "Sim",
                         onPress(){
                             Alert.alert("Excluído");
                         }
                        },
                        {text: "Não"}
                    ])}
                    />
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

     icon:{
         backgroundColor: "#f00",
         flex: 1,
     }
    });
    