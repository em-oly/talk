import React from 'react';
import {View, Text, FlatList, StatusBar, Touchable, Pressable} from 'react-native';
import styles from './styles';
import prompts from './prompts';
import Prompt from '../Prompt';

const PromptList = ({navigation}, props) => {
    return (
        <View style={styles.main}>
            <View style={styles.container}> 
                    <Text style={styles.title}>Talk</Text>
                <FlatList 
                data={prompts}
                renderItem={({item}) => 
                    <Pressable onPress={()=> navigation.navigate("Topic", item)}>
                    <Prompt prompt={item} /></Pressable>
                } 
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        <StatusBar style="auto" />
        </View>
    );
};

export default PromptList;