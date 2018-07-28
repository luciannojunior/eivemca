import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SearchBar, List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    textarea: {
        height: 100,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 14,
        borderRadius: 4
    },
    inputText: {
        height: 50,
        width: "80%",
        borderColor: 'gray',
        fontSize: 14,
        borderRadius: 4,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    },
    mainContent: {
        flex: 1,
        marginTop: 70,
        backgroundColor: '#fff'
    },
    font16: {
        fontSize: 18,
        marginRight: 5,
        marginTop: 10,
        marginLeft: 20
    },
    inputContainer: {
        width: "80%",
        marginBottom: 15,
        flexDirection: 'row'
    }
});


const sellers = [
  {
    name: 'Vendedor de pamonha'
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
    
    componentWillMount(){
        this.state = { searchText: '' };
    }

    onClear() {
        this.state.searchText = '';
    }

    onTextChanged(text) {
        this.state.searchText = text;
    }

    render() {
        return (
            <View style={styles.mainContent}>
                <SearchBar
                  lightTheme
                  showLoading
                  clearIcon
                  onChangeText={(text) => this.onTextChanged(text)}
                  onClear={this.onClear()}
                  placeholder='Procure por um ambulante...' />

                <List>
                  {
                    sellers.map((item, i) => (
                      <ListItem
                        key={i}
                        title={item.name}
                      />
                    ))
                  }
                </List>
            </View>
        );
    }
}

export default SearchScreen;