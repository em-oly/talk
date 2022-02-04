import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt5 = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>On February 7th, the project midpoint is due.
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>#OSU #Capstone #CS467</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt5;