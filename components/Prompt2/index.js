import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt2 = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>If you could have any super power, what would you choose?
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>#Fun #Daily #Superhero</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt2;