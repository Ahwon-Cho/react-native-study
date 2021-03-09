import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (<View style={styles.parentStyle}>
        <View style={styles.view01} />
        <View style={styles.viewParentStyle}>
            <View style={styles.view02} />
        </View>
        <View style={styles.view03} />
    </View>
    );
};

const styles = StyleSheet.create({
    parentStyle : {
        borderWidth: 10,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    viewParentStyle : {
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        height: 100
    },
    view01 : {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    view02 : {
        height: 50,
        width: 50,
        backgroundColor: 'green',

    },
    view03 : {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;