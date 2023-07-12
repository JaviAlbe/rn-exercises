import React, { useState } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Toast from 'react-native-root-toast';

const UseEffectHookExample = () => {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const subtract = () => {
        if (count === 0) {
            Toast.show('Cannot count below 0')
        } else {
            setCount(count - 1)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.p}>This is the Hooks exercise</Text>
            <Text style={styles.p}>Counter</Text>
            <Text style={styles.counter}>{count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => add()}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => subtract()}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        margin:32,
        fontSize:16
    },
    counter: {
        fontSize:32,
    },
    buttonContainer: {
        marginTop:32,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    touchableOpacity: {
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText: {
        fontSize:50,
    }
});

export default UseEffectHookExample
