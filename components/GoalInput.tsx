import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface GoalInputProps {
    onAddGoal: (text: string) => void
}

export default function GoalInput(props: GoalInputProps) {

    const [goalTextState, setGoalTextState] = useState("")

    function addGoalText() {
        if (goalTextState === "") return;
        props.onAddGoal(goalTextState);
        setGoalTextState("")
    }

    return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Your course goal!!"}
                    onChangeText={setGoalTextState}
                    value={goalTextState}
                />
                <Button title={"Add Goal"} onPress={addGoalText}/>
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
