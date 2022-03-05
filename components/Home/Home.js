import React, { useState } from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import fb from '../../firebaseConfig.js';

const db = getFirestore(fb);
const auth = getAuth();



const Home = ({navigation}, props) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Let's Talk!</Text>
                    <TextInput
                                style={styles.input}
                                placeholder={"Enter Your Username... (optional)"}
                                onChangeText={onChangeText}
                                value={text}
                                />
                    <View style={styles.userbutton}>
                        <Button 
                            onPress={()=> 
                            {if (text == '') {
                                navigation.navigate("Prompts")
                            } else {
                                onAuthStateChanged(auth, (user) => {
                                if (user) {
                                    updateProfile(auth.currentUser, {
                                    displayName: text
                                }).then(() => {
                                // Profile updated!
                                // ...
                                setDoc(doc(db, "users", user.uid), {
                                    username: user.displayName,
                                });
                                }).catch((error) => {
                                // An error occurred
                                // ...
                                })
                                const user = auth.currentUser;
                                console.log(user)
                                } else {
                                    // ...
                                }
                            })
                            }
                            navigation.navigate("Prompts")
                        }}
                            title='Get Started'></Button>
                        </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default Home;