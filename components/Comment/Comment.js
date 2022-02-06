import React from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import styles from './styles';

const Comment = (props) => {
    const {username, upvotes, body} = props.comment;
    //console.log(props.comment)
    return (
        <View style={styles.commentContainer}>
            <View style={styles.voteButtons}>
                <Pressable style={styles.upvote}>
                    <Text style={styles.voteText}>+</Text>
                </Pressable>
                    
                <Pressable style={styles.downvote}>
                    <Text style={styles.voteText}>-</Text>
                </Pressable>

            </View>

            <View style={styles.voteCount}> 
                <Text>{upvotes}</Text>
            </View>

            <View styles={styles.usernameAndBody}>
                <Text style={styles.username, styles.text}>{username}</Text>
                <Text style={styles.body, styles.text}>{body}</Text>
            </View>

            
            
        </View>
    );
};

export default Comment;