import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Prompt = (props) => {
    const {prompt, hashtags} = props.prompt;
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>{prompt}
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>{hashtags}</Text>
                </Text>
                
                
            </View>
        </View>
    );
};

export default Prompt;