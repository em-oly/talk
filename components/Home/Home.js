import React, { useState } from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { getAuth, updateProfile} from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import fb from '../../firebaseConfig.js';

const db = getFirestore(fb);
const auth = getAuth();


const Home = ({navigation}, props) => {

    //React hook
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Let's Talk!</Text>
                <View style={{flexDirection:"row"}}>
                        <TextInput
                                    style={styles.input}

                                    placeholder={"Enter A Username... (optional)"}

                                    onChangeText={onChangeText}
                                    value={text}
                                    />
                    <View style={styles.userbutton}>
                        <Button 
                            onPress={()=> 
                            {if (text == '') {
                                onChangeText('')
                            } else {
                                updateProfile(auth.currentUser, {
                                    displayName: text
                                })
                                setDoc(doc(db, "users", auth.currentUser.uid), {
                                    username: text
                                }
                            )
                            } 
                            onChangeText('')

                        }}
                            title='Enter'></Button>
                    </View>
                </View>
                <View style={styles.userbutton}>
                    <Button onPress={()=> navigation.navigate("Prompts")} title='Start Talking!'></Button>
                </View>
        <StatusBar style="auto" />
        </View>
    );
}
export default Home;