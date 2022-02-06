import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import styles from './styles';
import Comment from '../Comment/Comment'
import comments from './comments';



const Topic = ({ route }, props) => {
    console.log(route.params);
    const { prompt, hashtags, listId} = route.params;

    const listComments = comments[listId].commentsArr;
    console.log(listComments);

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

                <FlatList 
                data={listComments}
                renderItem={({item}) => 
                    <Comment comment={item} />
                } 
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

export default Topic;