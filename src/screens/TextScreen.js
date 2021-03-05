import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
    <View>
        <Text>What is your name?/Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize="none"
        value={name}
        autoCorrect={false}
        onChangeText={ (newValue) => setName(newValue)}
        />
        <Text>Your name is {name}</Text>
        {true ? <Text>that was true </Text> : null}
    </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2 
    }
});

export default TextScreen;

