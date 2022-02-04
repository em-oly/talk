import React from 'react';
import {View, Text} from 'react-native';
import Prompt from '../Prompt';
import styles from './styles';

const Title = (props) => {
    return (
        <View style={styles.promptContainer}>
            
            <View style={styles.titles}>
                <Text style={styles.title}>Talk</Text>
            </View>

            <Prompt 
            prompt={"In 2021, Spider-Man No Way Home became one of the highest grossing movies of all time during the COVID-19 pandemic. Did it save the movie industry?"} 
            hashtags={"#Film #Superhero #COVID"}
            />

            <Prompt 
            prompt={"If you could have any super power, what would you choose?"} 
            hashtags={"#Fun #Daily #Superhero"}
            />

            <Prompt 
            prompt={"Despite growing tensions, Russia will NOT invade Ukraine."} 
            hashtags={"#War #Politics #Government"}
            />

            <Prompt 
            prompt={"Tom brady will retire at the age of 44."} 
            hashtags={"#Sports #NFL #Football #GOAT"}
            />
            
            <Prompt 
            prompt={"The project midpoint is due on February 7th."} 
            hashtags={"#TALK #Capstone #CS467"}
            />

        </View>
    );
};

export default Title;