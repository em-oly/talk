import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt3 = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>Despite growing tensions, Russia will NOT invade Ukraine.
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>#Politics #War #Government</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt3;