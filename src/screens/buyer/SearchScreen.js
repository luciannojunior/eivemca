import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { List, ListItem, Icon } from 'react-native-elements';
import Header from "../../components/Header";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1
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
        marginTop: 10,
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
    
    componentWillMount(){
        this.state = { searchText: '' };
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

    render() {
        return (
            <View style={styles.mainContent}>
              <Header />
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