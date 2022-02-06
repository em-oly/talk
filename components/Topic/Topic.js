import React, { useState } from 'react';
import {Pressable, Alert, View, Text, FlatList, StatusBar, Modal, TextInput} from 'react-native';
import styles from './styles';
import Comment from '../Comment/Comment'
import comments from './comments';


const Topic = ({ route }, props) => {
    //console.log(route.params);
    const { prompt, hashtags, listId} = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState(null);
    // const listComments = comments[listId].commentsArr;
    const [listComments, updateList] = useState(comments[listId].commentsArr);

    const [listState, setListState] = useState(listComments)


    var addComment = (text) => {
        if (!text)
        {
        Alert.alert("You entered nothing");
        } else {
            var updatedComments = [...listComments, {username: "you", upvotes: 1, body: text}];
            setListState(updatedComments);
            updateList(updatedComments);
        }
        setModalVisible(!modalVisible)
        onChangeText(null)
    }

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