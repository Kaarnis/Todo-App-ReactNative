import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const Task = (props) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={[styles.item, { backgroundColor: isDarkMode ? '#1E1E1E' : '#FFF' }]}>
            <View style={styles.itemLeft}>
                <View style={[styles.square, { backgroundColor: isDarkMode ? '#55BCF6' : '#1E1E1E' }]}></View>
                <Text style={[styles.itemText, { color: isDarkMode ? '#FFF' : '#000' }]}>{props.text}</Text>
            </View>
            <View style={[styles.circular, { borderColor: isDarkMode ? '#FFF' : '#55BCF6' }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
