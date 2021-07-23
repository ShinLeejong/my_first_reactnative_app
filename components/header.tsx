import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default (): JSX.Element => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                사람이 부지런할 줄 알아야지
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 18,
        fontWeight: 'bold'
    },
});