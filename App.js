import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [listGoalState, setListGoalState] = useState([
        {text: "1", id: Math.random().toString()},
        {text: "2", id: Math.random().toString()},
        {text: "3", id: Math.random().toString()},
        {text: "4", id: Math.random().toString()},
        {text: "5", id: Math.random().toString()},
    ])

    function addGoalHandler(goalText) {
        setListGoalState(currentCourseGoals => [...currentCourseGoals, {
            text: goalText,
            id: Math.random().toString()
        }])
    }

    function deleteGoalHandler(id) {
        setListGoalState(current => {
            return current.filter(goal => goal.id !== id);
        })
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
                            <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler}/>
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
