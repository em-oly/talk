import React, { useState } from 'react';
import {Pressable, Alert, View, Text, FlatList, StatusBar, Modal, TextInput} from 'react-native';
import styles from './styles';
import Comment from '../Comment/Comment'
//import comments from './comments';
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';
import fb from '../../firebaseConfig.js';


const Topic = ({ route }) => {
    const { prompt, hashtags, listId } = route.params;
    const db = getFirestore(fb);


    // Retrieves all comments for a prompt
    const getComments = (listId) => {
        const commentsRef = collection(db, "comments/prompt"+listId+"/userComments");
        console.log(commentsRef);
    
        let comments = [];
        onSnapshot(commentsRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                comments.push({...doc.data()})
                })
        })
        return comments   
    };

    // Handles textinput and adds new comment to database
    var addComment = (text) => {
        if (!text)
        {
        Alert.alert("You entered nothing");
        } else {
            var updatedComments = [...listComments, {username: "you", upvotes: 1, body: text}];
            setListState(updatedComments);
            updateList(updatedComments);
            const path = "comments/prompt"+listId+"/userComments/";
            addDoc(collection(db, path), {
                username: "you",
                upvotes: 1,
                body: text
            });
        }
        setModalVisible(!modalVisible)
        onChangeText("")
    };

    let comments = getComments(listId);

    //console.log(comments);

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");

    const [listComments, updateList] = useState(comments);

    const [listState, setListState] = useState(listComments)

    // console.log(listState);

    //console.log(listComments);

    return (
            <View style={styles.container}> 
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
                            />
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => addComment(text)}
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