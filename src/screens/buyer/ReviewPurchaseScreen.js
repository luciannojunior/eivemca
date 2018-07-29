import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, ListItem, Button, Input } from 'react-native-elements';
import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";

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
        price: 1.50,
        amount: 2
    },
    {
        name: 'Milho cozido',
        description: 'Muito bom!',
        price: 2.00,
        amount: 3
    },
    {
        name: 'Milho assado',
        description: 'Na brasa',
        price: 2.50,
        amount: 1
    }
];

const seller = {name: 'Seu chico'};

class ReviewPurchaseScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

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
                                key={i}
                                title={item.name + ' (' + item.amount + ')'}
                                textInput={true}
                                textInputValue={'R$ ' + (item.amount*item.price)}
                                textInputEditable={false}
                                textInputStyle={{marginRight: 10}}
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
                        title='Realizar compra'
                        leftIcon={{name: 'megaphone', color: 'green', type: 'entypo'}}
                    />
                </View>
            </View>
        );
    }
}

export default ReviewPurchaseScreen;