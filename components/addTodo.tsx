import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

interface AddTodo {
    pressHandler(text: string): void
}

export default ({pressHandler}: AddTodo): JSX.Element => {

    const [text, setText] = useState('');

    const changeHandler = (inputText: string): void => {
        setText(inputText);
    }

    const onPressed = (): void => {
        if(text.length < 3) {
            Alert.alert("너무 조금 썼다.", "3자 이상. 24자 이하.", [{
                text: 'ㅠㅠ ㅇㅋ',
                onPress: () => setText(''),
            }])
            return;
        } else if(text.length > 24) {
            Alert.alert("너무 많이 썼다.", "3자 이상. 24자 이하.", [{
                text: 'ㅠㅠ ㅇㅋ;;',
                onPress: () => setText(text.slice(0, 24)),
            }])
            return;
        }
        pressHandler(text);
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
                    onPress={() => onPressed()}
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