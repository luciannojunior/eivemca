import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#009900',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: "10%",
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: 20,
        marginTop: 20
    }
});

const Header = (props) => {
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

export default Header;