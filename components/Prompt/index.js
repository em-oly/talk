import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt = (props) => {
    const {prompt, hashtags} = props.prompt;
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>{prompt}
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>{hashtags}</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt;