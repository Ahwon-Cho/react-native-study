import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return <View>
        <Image source={props.imageSource}/>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.myscore}>Image Score - {props.score}</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    myscore: {
        fontSize: 20
    }
});

export default ImageDetail;
