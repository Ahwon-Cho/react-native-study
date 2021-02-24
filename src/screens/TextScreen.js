import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const name = "";
    return (
    <View>
        <Text>Text Screen</Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize="none"
        value={name}
        autoCorrect={false}
        />
        <Text>Your name is {name}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1 
    }
});

export default TextScreen;

