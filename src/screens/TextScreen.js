import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return (
    <View>
        <Text>Enter Password: </Text>
        <TextInput 
        style = {styles.input} 
        autoCapitalize="none"
        value={password}
        autoCorrect={false}
        onChangeText={ (newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? <Text>Password must be 4 charactors</Text> : null}
        
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

