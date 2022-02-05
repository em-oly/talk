import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import styles from './styles';


const Topic = ({ route }, props) => {
    console.log(route.params);
    var prompt = route.params.prompt;
    var hashtags = route.params.hashtags;
    return (
        <View style={styles.main}>
            <View style={styles.container}> 
                <Text style={styles.title}>Talk</Text>
                <View style={styles.button}>
                <Text style={styles.text}>{prompt}
                {"\n"}
                {"\n"}
                <Text style={styles.hashtags}>{hashtags}</Text>
                </Text>
                
                
            </View>
            </View>
        <StatusBar style="auto" />
        </View>
    );
};

export default Topic;