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

const seller = { nome: "Pedidos" };

class OrdersScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        firebase.database().ref('pedidos').on('value', (snap) => {
            const pedidos = Object.values(snap.val());
            this.setState({pedidos});
        });
    }

    getTotalPrice(order) {
        if (!order || !order.produtos) return 0;
        let total = 0;
        order.produtos.forEach((prod) => {
            console.log('PRODUTO', prod);
            total += prod.subtotal;
        });
        return total;
    }

    getSubtitle(order){
        const formataPreco = (preco) => {
            if (preco == 0){
                preco = "000";
            }
            const reverted = ("" + preco).split("").reverse().join("");
            return "R$ " + (reverted.substring(0,2) + "," + reverted.substring(2,reverted.length)).split("").reverse().join("");
        }
        if (!order || !order.produtos) return '--';
        let content = 'Endereço: ' + order.endereco + '. \nPedido: ';
        let arrayProdutos = Object.values(order.produtos);
        for(let i = 0; i< arrayProdutos.length; i++) {
            if(i==0) content += arrayProdutos[i].nome + ' (' + arrayProdutos[i].quantidade + ')';
            else content += ', ' + arrayProdutos[i].nome + ' (' + arrayProdutos[i].quantidade + ')';
        }
        content += '.\nTotal: ' + formataPreco(this.getTotalPrice(order)) + '.';
        return content;
    }

    render() {
        if (!this.state || !this.state.pedidos) return null;
        let { pedidos } = this.state;
        return (
            <KeyboardAvoidingView style={styles.mainContent} behavior={'padding'}>
                <Header onPressBack={() => this.props.navigation.navigate("Home")} />
                <ProfileHeader seller={seller} />
                <ScrollView>
                    <List>
                        {this.state.pedidos.map((item, i) => (
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
