import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Modal, Pressable} from 'react-native';
import { getAuth } from "firebase/auth";
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


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
    const [shouldShow, setShouldShow] = useState(true);
    const [shouldShowbestbadge, setShouldShowbestbadge] = useState(false);
    const [shouldShowbadbadge, setShouldShowbadbadge] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const givebadge = () => {
        username = username + " (FUNNIEST)";
        setModalVisible(!modalVisible);
    }

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
            
            {shouldShow ? (
            <View style={styles.voteButtons}>
                <TouchableOpacity onPress={increment}>
                    <AntDesign name='arrowup' size={18}/>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={decrement}>
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
                <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                    <Entypo name='eye-with-line' size={18}/>
                </TouchableOpacity>
                    

            </View>

            
            
        </View>
    );
};

export default Comment;