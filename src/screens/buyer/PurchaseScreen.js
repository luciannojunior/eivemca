import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, ListItem, Button, Input, Icon } from 'react-native-elements';
import ProfileHeader from "../../components/ProfileHeader";
import Header from "../../components/Header";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        marginLeft: 15
    },
    inputContainer: {
        marginLeft: "3%",
        marginBottom: 7,
        flexDirection: 'row'
    },
    bottomView:{
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});

const products = [
    {
        name: 'Pamonha',
        description: 'Bem quentinha',
        price: 1.50
    },
    {
        name: 'Milho cozido',
        description: 'Muito bom!',
        price: 2.00
    },
    {
        name: 'Milho assado',
        description: 'Na brasa',
        price: 2.50
    }
];

const seller = {name: 'Seu chico'};

class PurchaseScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    onAmountChange(productIndex, amount) {
        products[productIndex].amount = amount;
    }

    render() {
        return (
            <View style={styles.mainContent}>
                <Header onPressBack={() => this.props.navigation.navigate('Home')} />
                <ProfileHeader seller={seller} />
                <List>
                  {
                    products.map((item, i) => (
                      <ListItem
                        leftIcon={{name: 'megaphone', color: 'green', type: 'entypo'}}
                        textInput={true}
                        textInputPlaceholder={'Quantidade'}
                        textInputKeyboardType={'numeric'}
                        textInputOnChangeText={(amount) => this.onAmountChange(i, amount)}
                        key={i}
                        title={item.name + ' (R$ ' + item.price + ')'}
                        subtitle={item.description}
                        hideChevron
                      />
                    ))
                  }
                </List>
                <View style={ styles.bottomView}>
                    <Button
                        textStyle={{color: 'black'}}
                        transparent={true}
                        title='Adicionar à cesta'
                        leftIcon={{name: 'shopping-cart', color: 'green'}}
                    />
                </View>
            </View>
        );
    }
}

export default PurchaseScreen;