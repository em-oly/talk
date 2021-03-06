import React from 'react';
import {View, Text, FlatList, StatusBar, Pressable} from 'react-native';
import styles from './styles';
import Prompt from '../Prompt';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import fb from '../../firebaseConfig.js';
import { getAuth} from "firebase/auth";

const db = getFirestore(fb);
const promptsRef = collection(db, "prompts");

let prompts = [];
onSnapshot(promptsRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            prompts.push({...doc.data()})
            })
        return prompts
    })

const PromptList = ({navigation}) => {
    const auth = getAuth();
    const username = auth.currentUser.displayName
    console.log(username)

    return (
            
            <View style={styles.container}> 
                    <Text style={styles.usernameStyle}>Username: {username}</Text>
                    <Text style={styles.title}>Talk</Text>
                <FlatList 
                data={prompts}
                renderItem={({item}) => 
                    <Pressable onPress={()=> navigation.navigate("Topic", item)}>
                    <Prompt prompt={item} /></Pressable>
                } 
                keyExtractor={(item, index) => index.toString()}
                />
            <StatusBar style="auto" />
            </View>         
    );
};

export default PromptList;