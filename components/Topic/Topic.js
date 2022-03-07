import React, { useState, useEffect } from 'react';
import {Pressable, Alert, View, Text, FlatList, StatusBar, Modal, TextInput } from 'react-native';
import styles from './styles';
import Comment from '../Comment/Comment'
import { getFirestore, collection, addDoc, getDocs, getDoc, setDoc} from 'firebase/firestore';
import fb from '../../firebaseConfig.js';
import { getAuth} from "firebase/auth";

const db = getFirestore(fb);


const Topic = ({ route }) => {
    
    // Params passed from Promptlist
    const { prompt, hashtags, listId } = route.params;

    // Retrieve's username of current user
    const auth = getAuth();
    const username = auth.currentUser.displayName;

    // React hooks
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");
    const [firstLoad, setIsLoading] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [listState, setList] = useState([]);
    const [replyColor, setReplyColor] = useState("#2196F3");


    // Disables reply button for 5 seconds after user submit's a comment
    const disableReply = async (text, username) => {
        addComment(text, username);
        setReplyColor("#808080");
        setDisabled(true);
        setTimeout(() => {setDisabled(false); setReplyColor("#2196F3");}, 5000);
        setModalVisible(!modalVisible);
    };


    // Retrieves all comments for a prompt
    const getComments = async (listId) => {
        const commentsPath = "comments/prompt"+listId+"/userComments";

        setList([]);
        
        let comments = [];
        const snapshot = await getDocs(collection(db, commentsPath));
        snapshot.forEach((doc) => {
            let commentId = doc.id;
            comments.push({...doc.data(), commentId, listId})
        })
        if (comments == []) {
            const badgeLimitPath = "users/"+auth.currentUser.uid+"/badgeLimit";
            const badgeLimitRef = doc(db, badgeLimitPath, listId.toString());
            let badgeLimitSnap = await getDoc(badgeLimitRef);
            if (badgeLimitSnap.exists()) {
                await setDoc(doc(db, badgeLimitPath, listId.toString()), {
                    usedBestBadge: false,
                    usedWorstBadge: false
                });
            }
        }

        setIsLoading(false);
        setList(...listState, comments) 

    };


    //Handles textinput and adds new comment to database
    const addComment = async (text, name) => {
        let newCommentId = "";
        if (!text) {
            Alert.alert("You entered nothing");
        } else {
            const path = "comments/prompt"+listId+"/userComments/";
            const newComment = await addDoc(collection(db, path), {
                username: username,
                upvotes: 0,
                bestBadges: 0,
                worstBadges: 0,
                body: text,
                consecUpvotes: 0,
                consecDownvotes: 0
            });
            setModalVisible(!modalVisible)
            newCommentId = newComment.id;
            setList([...listState, {username: name, upvotes: 0, bestBadges: 0, 
            worstBadges: 0, body: text, commentId: newCommentId, listId: listId, consecUpvotes: 0, consecDownvotes: 0}]);
        }
        onChangeText("")
    };

    useEffect(() => {
        getComments(listId);
    }, [])
    
    if (firstLoad) {
        return <Text>Loading comments...</Text>
    }
    return (
            <View style={styles.container}> 
                <Text style={styles.usernameStyle}>Username: {username}</Text>
                <Text style={styles.title}>Talk</Text>
                <View style={styles.promptContainer}>
                    <Text style={styles.text}>{prompt}
                    {"\n"}
                    {"\n"}
                    <Text style={styles.hashtags}>{hashtags}</Text>
                    </Text>
                    <Pressable
                        disabled={disabled}
                        backgroundColor= {"#2196F3"}
                        style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            marginBottom: 20,
                            alignSelf: "flex-end",
                            right: 10,
                            backgroundColor: replyColor
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Reply</Text>
                    </Pressable>           
                </View>
                
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
                            <TextInput
                            style={styles.input}
                            placeholder={"Share your thoughts!"}
                            onChangeText={onChangeText}
                            value={text}
                            multiline = {true}
                            numberOfLines = {10}
                            maxLength={255}
                            />
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() =>disableReply(text, username)}
                            >
                            <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            
                        </View>
                        </View>
                    </Modal>
                </View>
                    <FlatList
                    style={styles.commentsContainer}
                    data={listState}
                    renderItem={({item}) =>
                        <Comment comment={item} />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                <StatusBar style="auto" />
            </View>
    );
};
export default Topic;
