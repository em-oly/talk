import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import prompts from './prompts';
import Prompt from '../Prompt';

const PromptList = (props) => {
    return (
        <View style={styles.container}> 
             <Text style={styles.title}>Talk</Text>
            <FlatList 
            data={prompts}
            renderItem={({item}) => <Prompt prompt={item} />}
            />
        </View>
    );
};

export default PromptList;