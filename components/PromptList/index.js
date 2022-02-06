import React from 'react';
import {View, Text, FlatList, StatusBar, Touchable, Pressable} from 'react-native';
import styles from './styles';
import prompts from './prompts';
import Prompt from '../Prompt';

const PromptList = ({navigation}, props) => {
    //console.log(prompts);
    return (
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
            <StatusBar style="auto" />
            </View>
    );
};

export default PromptList;