import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SearchBar, List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginTop: 70    
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