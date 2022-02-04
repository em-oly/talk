import React from 'react';
import {View, Text} from 'react-native';
import Prompt1 from '../Prompt1';
import Prompt2 from '../Prompt2';
import Prompt3 from '../Prompt3';
import Prompt4 from '../Prompt4';
import Prompt5 from '../Prompt5';
import styles from './styles';

const Title = (props) => {
    return (
        <View style={styles.promptContainer}>
            
            <View style={styles.titles}>
                <Text style={styles.title}>Talk</Text>
            </View>

            <Prompt1 />

            <Prompt2 />

            <Prompt3 />

            <Prompt4 />

            <Prompt5 />

        </View>
    );
};

export default Title;