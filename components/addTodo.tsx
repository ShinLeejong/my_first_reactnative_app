import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

interface AddTodo {
    pressHandler(text: string): void
}

export default ({pressHandler}: AddTodo): JSX.Element => {

    const [text, setText] = useState('');

    const changeHandler = (inputText: string): void => {
        setText(inputText);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='할 일을 추가하세요!'
                onChangeText={changeHandler}
            />
            <View style={styles.btn}>
                <Button
                    onPress={() => pressHandler(text)}
                    title='할 일 추가'
                    color="coral"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    btn: {
        paddingHorizontal: 30,
    },
});