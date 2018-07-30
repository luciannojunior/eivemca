import React from "react";
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { Rating, Button } from 'react-native-elements';
import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    bottomView:{
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    textarea: {
        height: 100,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        fontSize: 14,
        borderRadius: 4
    }
});

const seller = {name: 'Seu chico', date: 'Compra realizada em 30/07/2018'};

class ConfirmPurchaseScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    ratingCompleted(rating) {
        this.setState({rating});
    }

    componentWillMount() {
        
        this.setState({
            rating: 0,
            observation: ""
        });
    }

    confirmPurchase() {
        // Mostrar um alert
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContent} behavior={'padding'}>
                <Header onPressBack={() => this.props.navigation.navigate('ReviewPurchase')} />
                <ProfileHeader seller={seller} />
                <Rating
                    showRating
                    imageSize={40}
                    onFinishRating={this.ratingCompleted.bind(this)}
                    style={{ paddingVertical: 10 }}/>

                <Text>Observação</Text>
                <TextInput
                    placeholder="Escreva aqui uma observação pro pedido."
                    style={styles.textarea}
                    multiline={true}
                    autoGrow={true}
                    editable={true}
                    maxLength={2000}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={observation => this.setState({ observation })}
                    value={this.state.observation}
                />

                <View style={ styles.bottomView}>
                    <Button
                        textStyle={{color: 'black'}}
                        transparent={true}
                        title='Confirmar'
                        leftIcon={{name: 'megaphone', color: 'green', type: 'entypo'}}
                        onPress={() => this.confirmPurchase()}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default ConfirmPurchaseScreen;