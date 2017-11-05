import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    translate(word) {
        switch(word.length) {
            case 1:
                return '🍪';
            case 2:
                return '🍩';
            case 3:
                return '🍟'
            default:
                return '🍕';
        }
    }

    render() {
        return (
            <View style={{padding: 20}}>
              <TextInput
                  style={{height: 40}}
                  placholder='Napisz coś ziom'
                  onChangeText={(text) => this.setState({text})}
              />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map(word => word && this.translate(word)).join(' ')}
                </Text>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64cdff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
