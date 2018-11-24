import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {

    render() {
        return (
            <View >
                <ImageBackground source={require('../assets/logoPrincipal.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Sabia que a partir do ano de 2020, o Brasil pode precisar de 600 mil a 1,15 milhão
                            de profissionais da engenharia? Quer fazer parte dessa parcela de profissionais, mas
                            ainda não sabe qual Engenharia escolher? Clica aqui embaixo e se encontre no universo
                        da Engenharia!
                    </Text>
                        <Button
                            title="Iniciar teste"
                            onPress={() => this.props.navigation.navigate('TelaPerguntas')}
                            style={styles.botao}
                        />
                    </View>
                </ImageBackground>

            </View>
        );  
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "#fff",
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        color: "#fff",
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 25,
        textAlign: 'center',
        fontSize: 18
    },
    botao:{
    },
    image: {
        height: 150,
        width: 200
    }
})