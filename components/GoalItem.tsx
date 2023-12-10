import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface GoalItemProps {
    item: {
        id: string,
        text: string
    },
    onDeleteItem: (id: string) => void
}

export default function GoalItem(props: GoalItemProps) {

    function onDelete() {
        props.onDeleteItem(props.item.id)
    }

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: "#240249"}} onPress={onDelete}>
                <Text style={{color: "white", padding: 8}}>{props.item.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    }
})
