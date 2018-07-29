import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, ListItem, Button, Input, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        marginLeft: 15
    },
    addToCartButton: {
        position: 'absolute',
        bottom:0,
        left:0    
    }
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
]

class PurchaseScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainContent}>
                <Text style={styles.title}>Seu chico</Text>
                <List>
                  {
                    products.map((item, i) => (
                      <ListItem
                        key={i}
                        title={item.name + ' (R$ ' + item.price + ')'}
                        subtitle={item.description}
                        hideChevron
                      />
                    ))
                  }
                </List>
                <Button
                  style={styles.addToCartButton}
                  title='Adicionar à cesta'
                />
            </View>
        );
    }
}

export default PurchaseScreen;