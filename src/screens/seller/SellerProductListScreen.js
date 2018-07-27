import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mainTitle: {
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
        padding: 10,
        fontSize: 18
    }
});

class SellerProductListScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const products = ['Pamonha','Canjica','Milho','Mangunza','Xerem'];

        return (
            <View style={styles.mainContent}>
                <Text style={styles.mainTitle}>Produtos</Text>
                <Text style={styles.mainTitle}>Cadastrados</Text>
                <ScrollView style={{ alignItems: 'flex-start' }}>
                    <View style={styles.padding10}>
                        {products.map(product => {
                            return (
                                <View style={styles.row}>
                                    <Text style={styles.productList}>{product}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SellerProductListScreen;