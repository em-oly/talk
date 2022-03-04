import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import { getAuth } from "firebase/auth";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const Comment = (props) => {

    let {username, upvotes, body} = props.comment;

    const auth = getAuth();
    const displayName = auth.currentUser.displayName;

    if (username == displayName) {
        username = username + " (you)";
    }


    const [counter, setCounter] = useState(upvotes)
    const [decremented, setDecremented] = useState(false);
    const [incremented, setIncremented] = useState(false);

    const increment = () => {
        if(incremented){
            return
        } else {
            if (decremented){
                setDecremented(false);
                setCounter(counter + 1);
            } else {
                setIncremented(true)
                setCounter(counter + 1);
            }
        }
    }

    const decrement = () => {
        if(decremented){
            return
        } else {
            if (incremented){
                setIncremented(false);
                setCounter(counter - 1);
            } else {
                setDecremented(true)
                setCounter(counter - 1);
            }
        }
    }
      
    return (
        <View style={styles.commentContainer}>
            <View style={styles.voteButtons}>
                <TouchableOpacity onPress={increment}>
                    <AntDesign name='arrowup' size={18}/>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={decrement}>
                    <AntDesign name='arrowdown' size={18}/>
                </TouchableOpacity>

            </View>

            <View style={styles.voteCount}> 
                <Text style={styles.voteStyle}>{counter}</Text>
            </View>

            <Text style={styles.commentText}>
            <Text style={styles.userText}>{username}</Text>
            {"\n"}
            {"\n"}
            <Text style={styles.bodyText}>{body}</Text>
            </Text>

            <View style={styles.flagButton}>
                <TouchableOpacity onPress={increment}>
                    <AntDesign name='flag' size={18}/>
                </TouchableOpacity>
                    

            </View>

            
            
        </View>
    );
};

export default Comment;