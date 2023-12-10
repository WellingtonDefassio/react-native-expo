import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

interface GoalInputProps {
    onAddGoal: (text: string) => void
    visible: boolean
    endAddGoal: () => void
}

export default function GoalInput(props: GoalInputProps) {

    const [goalTextState, setGoalTextState] = useState("")

    function addGoalText() {
        if (goalTextState === "") return;
        props.onAddGoal(goalTextState);
        setGoalTextState("")
        props.endAddGoal()
    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Your course goal!!"}
                    onChangeText={setGoalTextState}
                    value={goalTextState}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"Add Goal"} onPress={addGoalText}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={"Cancel"} onPress={props.endAddGoal}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: "100%",
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
