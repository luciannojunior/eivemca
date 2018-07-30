import React from "react";
import { Alert, View, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from "react-native";
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

const products = [
  {
    name: "Pamonha",
    description: "Bem quentinha",
    price: 1.5
  },
  {
    name: "Milho cozido",
    description: "Muito bom!",
    price: 2.0
  },
  {
    name: "Milho assado",
    description: "Na brasa",
    price: 2.5
  },
    {
        name: "Pamonha",
        description: "Bem quentinha",
        price: 1.5
    },
    {
        name: "Milho cozido",
        description: "Muito bom!",
        price: 2.0
    },
    {
        name: "Milho assado",
        description: "Na brasa",
        price: 2.5
    },
    {
        name: "Pamonha",
        description: "Bem quentinha",
        price: 1.5
    },
    {
        name: "Milho cozido",
        description: "Muito bom!",
        price: 2.0
    },
    {
        name: "Milho assado",
        description: "Na brasa",
        price: 2.5
    }
];

const seller = { name: "Seeuu chico" };

class PurchaseScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
      vendedor: null,
      compra: []
  };

  componentWillMount() {
    const nome = this.props.navigation.getParam("nome");
    firebase
      .database()
      .ref("vendedores")
      .on("value", snap => {
        const vendedor = Object.values(snap.val()).filter(
          o => o.nome == nome
        )[0];
        this.setState({ vendedor });
      });
  }

  onAmountChange(i, quantidade) {
    console.log('onquantidadeChange', quantidade);
    console.log(this.state.compra);
    if (!quantidade) return;
    if (!this.state.vendedor) return;
    const produtos = Object.values(this.state.vendedor.produtos);
    const subtotal = produtos[i].preco * Number(quantidade);
    const novoItem = {
        ...produtos[i],
        quantidade,
        subtotal
    };

    let copiaCompras = [...this.state.compra];
    if (copiaCompras.filter(e => e && e.nome == novoItem.nome).length){
        copiaCompras = copiaCompras.map((item) => {
            if (item.nome == novoItem.nome){
                item.quantidade = novoItem.quantidade;
                item.subtotal = novoItem.subtotal;
            }
            if (!quantidade || quantidade == 0){
                return null;
            }
            return item;
        });
    } else {
        copiaCompras.push(novoItem);
    }
    this.setState({...this.state, compra: copiaCompras});
  }

  async buy() {
    const a = new Date();
    const novoPedido = {
        produtos: this.state.compra,
        nome: 'João Coutinho',
        endereco: 'Avenida Juscelino Kubitscheck, 699',
        horario: a.getHours() + ':' + a.getMinutes(),
        entregue: false,
        avaliacao: null
    };
    const { key } = await firebase
      .database()
      .ref()
      .child('pedidos')
      .push(novoPedido);
    
      console.log('KEY', key);
      
    this.props.navigation.navigate("ReviewPurchase", {key});
  }

  render() {
    const produtos = this.state.vendedor ? Object.values(this.state.vendedor.produtos) || [] : [];

    const formataPreco = (preco) => {
        if (preco == 0){
            preco = "000";
        }
        const reverted = ("" + preco).split("").reverse().join("");
        return "R$ " + (reverted.substring(0,2) + "," + reverted.substring(2,reverted.length)).split("").reverse().join("");
    }

    return (
      <KeyboardAvoidingView style={styles.mainContent} behavior={'padding'}>
        <Header onPressBack={() => this.props.navigation.navigate("Home")} />
        <ProfileHeader seller={seller} />
        <ScrollView style={{ marginBottom: 60 }}>
          <List>
            {produtos.map((item, i) => (
              <ListItem
                leftIcon={{ name: "megaphone", color: "green", type: "entypo" }}
                textInput={true}
                textInputPlaceholder={"Quantidade"}
                textInputKeyboardType={"numeric"}
                textInputOnChangeText={amount => this.onAmountChange(i, amount)}
                key={i}
                title={item.nome + " ("+formataPreco(item.preco) + ")"}
                subtitle={item.descricao}
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
        <View style={styles.bottomView}>
          <Button
            textStyle={{ color: "black" }}
            transparent={true}
            title="Adicionar à cesta"
            leftIcon={{ name: "shopping-cart", color: "green" }}
            onPress={() => this.buy()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default PurchaseScreen;
