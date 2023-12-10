import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [listGoalState, setListGoalState] = useState([])

    function addGoalHandler(goalText) {
        setListGoalState(currentCourseGoals => [...currentCourseGoals, {
            text: goalText,
            id: Math.random().toString()
        }])
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={listGoalState}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemData => {
                        return (
                            <GoalItem item={itemData.item}/>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1
    },
    goalsContainer: {
        flex: 5
    }
});
