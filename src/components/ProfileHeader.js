import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#009900',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: "40%",
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});

const ProfileHeader = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.seller.name}</Text>
        </View>
    );
}

export default ProfileHeader;