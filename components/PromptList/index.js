import React from 'react';
import {View, Text, FlatList, StatusBar, Touchable, Pressable} from 'react-native';
import styles from './styles';
//import prompts from './prompts';
import Prompt from '../Prompt';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import fb from '../../firebaseConfig.js';

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

    return (
            <View style={styles.container}> 
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