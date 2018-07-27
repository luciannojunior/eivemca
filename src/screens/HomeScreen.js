import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSize: {
        fontSize: 18
    }
});

class HomeScreen extends React.Component {
    render() {
        console.log("Abriu");
        return (
            <View style={styles.mainContent}>
                <Text style={styles.textSize}>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;