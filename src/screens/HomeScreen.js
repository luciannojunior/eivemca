import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009900'
    },
    textSize: {
        fontSize: 18
    },
    welcome: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row'
    },
    buttonStyle: {
        padding: 20,
        margin: 10,
        height: 64,
        width: 140,
        alignItems: 'center',
        backgroundColor: '#009900',
        borderRadius: 4, borderWidth: 2, borderColor: '#d6d7da'
        },
    textStyle: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center'
    }
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        return (
            <View style={styles.mainContent}>
                <Text style={{fontSize: 44}}>Ei! Vem Cá(Logo)</Text>
                <Text style={styles.welcome}>Bem Vindo!</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Search')}
                        style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                Comprador
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SellerMain')}
                        style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                Vendedor
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HomeScreen;