import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#009900',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: "30%",
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        padding: 20,
        marginTop: 10
    }
});

const ProfileHeader = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text
                onPress={() => props.onPressBack()}
                style={styles.textStyle}>
                    Back
            </Text>
        </View>
    );
}

export default ProfileHeader;