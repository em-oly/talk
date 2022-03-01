import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import { getAuth } from "firebase/auth";
import styles from './styles';


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
                <Pressable onPress={increment}
                style={styles.upvote}>
                    <Text style={styles.voteText}>+</Text>
                </Pressable>
                    
                <Pressable onPress={decrement}
                style={styles.downvote}>
                    <Text style={styles.voteText}>-</Text>
                </Pressable>

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

            
            
        </View>
    );
};

export default Comment;