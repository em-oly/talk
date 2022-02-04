import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt4 = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>Tom Brady will retire at the age of 44.
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>#Sports #Football #NFL</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt4;