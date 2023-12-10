import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface GoalInputProps {
    onTextChange: (text: string) => void
    onAddGoal: () => void
}

export default function GoalInput(props: GoalInputProps) {




    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={"Your course goal!!"}
                onChangeText={tex => props.onTextChange(tex)}
            />
            <Button title={"Add Goal"} onPress={props.onAddGoal}/>
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "70%",
        marginRight: 8,
        padding: 8
    },
})
