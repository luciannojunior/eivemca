import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { List, ListItem, Icon } from 'react-native-elements';
import * as firebase from "firebase";
import Header from "../../components/Header";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputText: {
        height: 50,
        width: "71%",
        borderColor: 'gray',
        fontSize: 14,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: "2.5%",
        height: 45
    },
    font16: {
        fontSize: 20,
        marginRight: "2%",
        marginTop: 8
    },
    inputContainer: {
        margin: "3%",
        marginTop: 20,
        flexDirection: 'row'
    }
});


const sellers = [
    {
        name: 'Vendedor dee pamonha'
    },
    {
        name: 'Vendedor de cocada'
    },
    {
        name: 'Vendedor de milho'
    }
]

class SearchScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        sellers: [],
        searchText: ''
    }

    componentWillMount() {
        firebase.database().ref('vendedores').on('value', (snap) => {
            const sellers = snap.val();
            this.setState({ sellers });
        })
    }

    onClear() {
        this.state.searchText = '';
    }

    search() {
        console.log(this.state.searchText);
    }

    onTextChange(text) {
        this.state.searchText = text;
    }

    selectSeller(seller) {
        // Joga o vendedor atual no firebase
        this.props.navigation.navigate("Purchase", seller);
    }

    render() {
        const { sellers } = this.state;
        return (
            <View style={styles.mainContent}>
                <Header onPressBack={() => this.props.navigation.navigate("Home")} />
                <View style={styles.inputContainer}>
                    <Text style={styles.font16}>Buscar: </Text>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(text) => this.onTextChange(text)}
                    />
                    <Icon
                        name='search'
                        color='#000000'
                        size={30}
                        onPress={() => this.search()} />
                </View>
                <List>
                    {
                        sellers.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.nome}
                                onPress={() => { this.selectSeller(item) }}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

export default SearchScreen;