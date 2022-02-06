import React, { useState } from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import styles from './styles';


const Comment = (props) => {
    const {username, upvotes, body} = props.comment;
    //console.log(props.comment)
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
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