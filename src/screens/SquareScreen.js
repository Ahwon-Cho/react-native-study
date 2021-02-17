import React, { useReducer } from 'react';
import {View, Text, StyleSheet}  from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const recuder = (state, action) => {
    // state ==={red: Number, green: Number, blue: number};
    // action === { colorToChange: 'red' || 'green' || 'blue' , amount: 15 || -15}

    switch (action,colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, red: state.green + action.amount};
        case 'blue' :
            return { ...state, red: state.blue + action.amount};
        default:
            return state;
    })
};

const SquareScreen  =()=> {


    const [state, dispatch] = useReducer (reducer, {red:0, green:0 , blue:0});
    console.log(state) // 
    

    return <View>
            <Text>Square Screen</Text>
            
            <ColorCounter 
                onIncrease={() => } 
                onDecrease={() => } 
                color="Red"
            />
            <ColorCounter 
                onIncrease={() => } 
                onDecrease={() => } 
                color="Blue"
            />
            <ColorCounter 
                onIncrease={() => } 
                onDecrease={() => } 
                color="Green"
            />
            <View style={{ 
                height: 150, 
                width: 150, 
                                                                                                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }}
            />
        </View>
    console.log(red);
};

const styles = StyleSheet.create({
    
});

export default SquareScreen;