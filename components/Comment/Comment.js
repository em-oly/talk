import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Modal, Pressable} from 'react-native';
import { getAuth } from "firebase/auth";
import styles from './styles';

import fb from '../../firebaseConfig.js';
import { getFirestore, doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const db = getFirestore(fb);



const Comment = (props) => {

    let {username, upvotes, body, commentId, listId} = props.comment;

    const auth = getAuth();
    const displayName = auth.currentUser.displayName;

    const [counter, setCounter] = useState(upvotes)
    const [decremented, setDecremented] = useState(false);
    const [incremented, setIncremented] = useState(false);
    const [shouldShow, setShouldShow] = useState(true);
    const [shouldShowbestbadge, setShouldShowbestbadge] = useState(false);
    const [shouldShowbadbadge, setShouldShowbadbadge] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    if (username == displayName) {
        username = username + " (you)";
    }
  
    const givebadge = () => {
        username = username + " (FUNNIEST)";
        setModalVisible(!modalVisible);
    }
    const checkComment = async () => {
        const checkHiddenComment = doc(db, "users/"+auth.currentUser.uid+"/hidden", commentId);
        let hiddenSnap = await getDoc(checkHiddenComment);
        if (hiddenSnap.exists()) {
            let hiddenData = hiddenSnap.data();
            if (hiddenData.hidden == true) {
                setShouldShow(false);
            }
        }
    }

    checkComment();

    const hideComment = async () => {
        const checkHiddenComment = doc(db, "users/"+auth.currentUser.uid+"/hidden", commentId);
        let hiddenSnap = await getDoc(checkHiddenComment);
        if (!hiddenSnap.exists()) {
            const hiddenCommentsPath = "users/"+auth.currentUser.uid+"/hidden";
            await setDoc(doc(db, hiddenCommentsPath, commentId), {
                hidden: true
            });
            setShouldShow(false);
        } else {
            let hiddenComments = hiddenSnap.data();
            if (hiddenComments.hidden == true) {
                await updateDoc(checkHiddenComment, {hidden: false});
                setShouldShow(true);
            } else {
                await updateDoc(checkHiddenComment, {hidden: true});
                setShouldShow(false);
            }
        }
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
            return
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

        if(decremented || voteData.downvoted == true){
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
            return
        }
    }
      
    return (
        <View style={styles.commentContainer}>
            
            {shouldShow ? (
            <View style={styles.voteButtons}>

                <TouchableOpacity onPress={incrementVote}>
                    <AntDesign name='arrowup' size={18}/>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={decrementVote}>
                    <AntDesign name='arrowdown' size={18}/>
                </TouchableOpacity>


            </View>
               ): null}

            {shouldShow ? (
            <View style={styles.voteCount}> 
                <Text style={styles.voteStyle}>{counter}</Text>
            </View>
             ): null}

            {shouldShow ? (
            <Text style={styles.commentText}>
                <Text style={styles.userText}>{username}</Text>
                {"\n"}
                {shouldShowbestbadge ? (
                <View style={styles.badge}>
                    <AntDesign name='Trophy' size={18} color="gold"/>
                </View>
            ): null}
             {shouldShowbadbadge ? (
                <View style={styles.badge}>
                    <Entypo name='medal' size={18} color="black"/>
                </View>
            ): null}
           
                {"\n"}
                {"\n"}
                <Text style={styles.bodyText}>{body}</Text>
            </Text>
            ): null}
            
    

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {setShouldShowbestbadge(!shouldShowbestbadge), setModalVisible(!modalVisible)} }
                    >
                    <Text style={styles.textStyle}>Give this comment a trophy for being awesome!</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {setShouldShowbadbadge(!shouldShowbadbadge), setModalVisible(!modalVisible)} }
                    >
                    <Text style={styles.textStyle}>Give this comment the medal of shame!</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() =>setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
                </View>
                </Modal>
            </View>
      
            {shouldShow ? (
            <View style={styles.badgeButton}>
                <TouchableOpacity  onPress={() => setModalVisible(true)}>
                    <AntDesign name='gift' size={18}/>
                </TouchableOpacity>
            </View>
            ): null}
               

            <View style={styles.flagButton}>
                <TouchableOpacity onPress={() => hideComment()}>
                    <Entypo name='eye-with-line' size={18}/>
                </TouchableOpacity>
                    

            </View>

            
            
        </View>
    );
};

export default Comment;