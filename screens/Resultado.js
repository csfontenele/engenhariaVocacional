import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class Perguntas extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Resultado</Text>
                <Button
                    title="Refazer o teste"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}