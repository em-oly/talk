import React, { useState, useEffect } from 'react';
import {Pressable, Alert, View, Text, FlatList, StatusBar, Modal, TextInput } from 'react-native';
import styles from './styles';
import Comment from '../Comment/Comment'
import { getFirestore, collection, onSnapshot, addDoc, getDocs} from 'firebase/firestore';
import fb from '../../firebaseConfig.js';
import { getAuth} from "firebase/auth";

const db = getFirestore(fb);


const Topic = ({ route }) => {
    const { prompt, hashtags, listId } = route.params;
    const auth = getAuth();
    const username = auth.currentUser.displayName;

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");
    const [firstLoad, setIsLoading] = useState(true);
    const [listState, setList] = useState([]);




    // Retrieves all comments for a prompt
    const getComments = async (listId) => {
        const commentsPath = "comments/prompt"+listId+"/userComments";

        setList([]);
        
        let comments = [];
        const snapshot = await getDocs(collection(db, commentsPath));
        snapshot.forEach((doc) => {
            // console.log("Comment ID: ",doc.id);
            let commentId = doc.id;
            comments.push({...doc.data(), commentId, listId})
        })
        setIsLoading(false);

        setList(...listState, comments) 

    };

    //delays comment function
    function delayer(ms){
        return new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve();
          }, ms)
        })
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
            await delayer(10000); // delay comment by 10 seconds
            newCommentId = newComment.id;
            setList([...listState, {username: name, upvotes: 0, bestBadges: 0, worstBadges: 0, body: text, commentId: newCommentId, listId: listId, consecUpvotes: 0, consecDownvotes: 0}]);
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
                        style={[styles.button, styles.buttonOpen]}
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
                            onPress={() => addComment(text, username)}
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
