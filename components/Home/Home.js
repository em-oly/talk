import React from 'react';
import {View, Button, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const Home = ({navigation}, props) => {
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Let's Talk!</Text>
            <Button onPress={()=> navigation.navigate("Prompts")} title='Get Started'></Button>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;