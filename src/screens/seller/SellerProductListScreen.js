import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Header from '../../components/Header';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20
    },
    secondaryTitle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    padding10: {
        padding: 10
    },
    row: {
        flexDirection: 'row'
    },
    productList: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18
    },
    productPrice: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

class SellerProductListScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const products = [{nome: 'Pamonha', preco: 2.62},{nome: 'Canjica', preco: 2.62},{nome: 'Milho', preco: 2.62},{nome: 'Mangunza', preco: 2.62},{nome: 'Xerem', preco: 2.62}];

        return (
            <View style={styles.mainContent}>
                <Header onPressBack={() => this.props.navigation.navigate('SellerMain')} />
                <Text style={styles.mainTitle}>Produtos</Text>
                <Text style={styles.secondaryTitle}>Cadastrados</Text>
                <View style={{ width: "80%"}}>
                    <ScrollView>
                        <View style={styles.padding10}>
                            {products.map(product => {
                                return (
                                    <View style={styles.row}>
                                        <Text style={styles.productList}>{product.nome}</Text>
                                        <Text style={styles.productPrice}> - R$ {product.preco}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default SellerProductListScreen;