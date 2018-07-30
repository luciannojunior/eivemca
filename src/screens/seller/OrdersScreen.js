import React from "react";
import { View, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { List, ListItem, Button, Input } from "react-native-elements";
import * as firebase from "firebase";
import ProfileHeader from "../../components/ProfileHeader";
import Header from "../../components/Header";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        marginLeft: 15
    },
    inputContainer: {
        marginLeft: "3%",
        marginBottom: 7,
        flexDirection: "row"
    },
    bottomView: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    }
});

const orders = [
    {
        endereco: "Avenida Juscelino Kubitscheck, 699",
        entregue: false,
        horario: "23:36",
        nome: "João Coutinho",
        produtos: [
            {
                descricao: "Todos os sabores",
                nome: "Picolé Grande",
                preco: "700",
                quantidade: "3",
                subtotal: 2100
            },
            {
                descricao: "Todos os sabores",
                nome: "Picolé Pequeno",
                preco: "700",
                quantidade: "1",
                subtotal: 700
            }
        ]
    }
];

const seller = { name: "Pedidos" };

class OrdersScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    getTotalPrice(order) {
        let total = 0;
        order.produtos.forEach((prod) => {
            total += prod.subtotal;
        });
        return total;
    }

    getSubtitle(order){
        let content = 'Endereço: ' + order.endereco + '. \nPedido: ';
        for(let i = 0; i<order.produtos.length; i++) {
            if(i==0) content += order.produtos[i].nome + ' (' + order.produtos[i].quantidade + ')';
            else content += ', ' + order.produtos[i].nome + ' (' + order.produtos[i].quantidade + ')';
        }
        content += '.\nTotal: R$ ' + this.getTotalPrice(order) + '.';
        return content;
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContent} behavior={'padding'}>
                <Header onPressBack={() => this.props.navigation.navigate("Home")} />
                <ProfileHeader seller={seller} />
                <ScrollView>
                    <List>
                        {orders.map((item, i) => (
                            <ListItem
                                leftIcon={{ name: "megaphone", color: "green", type: "entypo" }}
                                key={i}
                                title={item.nome}
                                subtitle={this.getSubtitle(item)}
                                subtitleNumberOfLines={10}
                                hideChevron
                            />
                        ))}
                    </List>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default OrdersScreen;
