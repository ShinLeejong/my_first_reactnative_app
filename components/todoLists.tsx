import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Todo {
    item: {
        text: string,
        key: string
    },
    pressHandler(key: string): void,
}

export default ({item, pressHandler}: Todo): JSX.Element => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
});