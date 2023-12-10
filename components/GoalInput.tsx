import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

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
                <Image source={require("../assets/imgs/goal.png")} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Your course goal!!"}
                    onChangeText={setGoalTextState}
                    value={goalTextState}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={"Cancel"} onPress={props.endAddGoal} color={"#f31282"}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={"Add Goal"} onPress={addGoalText} color={"#5e0acc"}/>
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
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 12
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})
