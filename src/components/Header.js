import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Icon } from 'react-native-elements';

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
    iconStyle: {
        paddingLeft: 25
    }
});

const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Icon name='keyboard-arrow-left'
                  size={45}
                  onPress={() => props.onPressBack()}
                  style={styles.iconStyle}/>
        </View>
    );
}

export default Header;