import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    textarea: {
        marginTop: 20,
        height: 100,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 4,
    },
    inputText: {
        marginTop: 20,
        height: 50,
        width: 300,
        borderColor: 'gray',
        fontSize: 20,
        borderRadius: 4,
    },
    mainContent: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    font16: {
        fontSize: 16
    }
});

class CreateProductScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    componentWillMount(){
        this.state = { name: '', price: '', description: '' };
    }

    render() {
        return (
            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.font16}>Nome do Produto</Text>
                    <TextInput
                    style={styles.inputText}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    />
                </View>
                <View>
                    <Text style={styles.font16}>Preço</Text>
                    <TextInput
                    style={styles.inputText}
                    onChangeText={(price) => this.setState({price})}
                    value={this.state.price}
                    />
                </View>
                <View>
                    <Text style={styles.font16}>Descrição</Text>
                    <TextInput
                    placeholder = "Escreva aqui a descrição do produto."
                    style = {styles.textarea}
                    multiline = {true}
                    autoGrow = {true}
                    editable = {true}
                    maxLength = {2000}
                    underlineColorAndroid= 'rgba(0,0,0,0)'
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                    />
                </View>
            </View>
        );
    }
}

export default CreateProductScreen;