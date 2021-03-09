import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle01}>Box Screen1</Text>
        <Text style={styles.textStyle02}>Box Screen2</Text>
        <Text style={styles.textStyle03}>Box Screen3</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        alignItems: 'flex-start',
    },
    textStyle01 : {
        borderWidth: 3,
        borderColor: 'red',
        padding: 20
    },
    textStyle02 : {
        borderWidth: 3,
        borderColor: 'purple',
        padding: 20,
        alignSelf: 'center',
    },
    textStyle03 : {
        borderWidth: 3,
        borderColor: 'green',
        padding: 20
    }
});

export default BoxScreen;