import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import { getAuth } from "firebase/auth";
import styles from './styles';
import fb from '../../firebaseConfig.js';
import { getFirestore, doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore';


const db = getFirestore(fb);


const Comment = (props) => {

    let {username, upvotes, body, commentId, listId} = props.comment;

    const [counter, setCounter] = useState(upvotes)
    const [decremented, setDecremented] = useState(false);
    const [incremented, setIncremented] = useState(false);

    const auth = getAuth();
    const displayName = auth.currentUser.displayName;

    if (username == displayName) {
        username = username + " (you)";
    }

    const incrementVote = async () => {
        const commentPath = "comments/prompt"+listId+"/userComments";
        const commentRef = doc(db, commentPath, commentId);
        const votesPath = "users/"+auth.currentUser.uid+"/votes";
        const voteRef = doc(db, votesPath, commentId);
        let voteSnap = await getDoc(voteRef);

        if (!voteSnap.exists()) {
            await setDoc(doc(db, votesPath, commentId), {
                upvoted: false,
                downvoted: false
            });
        }
        voteSnap = await getDoc(voteRef);
        let voteData = voteSnap.data();
        if(incremented || voteData.upvoted == true){
            return
        } else {
            if (decremented || voteData.downvoted == true){
                setDecremented(false);
                await updateDoc(voteRef, {downvoted: false});
                await updateDoc(commentRef, {upvotes: increment(1)});
                setCounter(counter + 1);
            } else {
                setIncremented(true)
                await updateDoc(voteRef, {upvoted: true});
                await updateDoc(commentRef, {upvotes: increment(1)});
                setCounter(counter + 1);
            }
        }
    }

    const decrementVote = async () => {
        const commentPath = "comments/prompt"+listId+"/userComments";
        const commentRef = doc(db, commentPath, commentId);
        const votesPath = "users/"+auth.currentUser.uid+"/votes";
        const voteRef = doc(db, votesPath, commentId);
        let voteSnap = await getDoc(voteRef);

        if (!voteSnap.exists()) {
            await setDoc(doc(db, votesPath, commentId), {
                upvoted: false,
                downvoted: false
            });
        }
        voteSnap = await getDoc(voteRef);
        let voteData = voteSnap.data();

        if(decremented){
            return
        } else {
            if (incremented || voteData.upvoted == true){
                setIncremented(false);
                await updateDoc(voteRef, {upvoted: false});
                await updateDoc(commentRef, {upvotes: increment(-1)});
                setCounter(counter - 1);
            } else {
                setDecremented(true)
                await updateDoc(voteRef, {downvoted: true});
                await updateDoc(commentRef, {upvotes: increment(-1)});
                setCounter(counter - 1);
            }
        }
    }
      
    return (
        <View style={styles.commentContainer}>
            <View style={styles.voteButtons}>
                <Pressable onPress={incrementVote}
                style={styles.upvote}>
                    <Text style={styles.voteText}>+</Text>
                </Pressable>
                    
                <Pressable onPress={decrementVote}
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