import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Prompt1 = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                <Text style={styles.text}>In 2021, Spider-Man No Way Home became one of the highest grossing movies of all time during the COVID-19 pandemic. Did it save the movie industry?
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>#Film #Superhero #COVID</Text>
                </Text>
                
                
            </Pressable>
        </View>
    );
};

export default Prompt1;