import * as React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import { Header } from "react-native-elements";

export default class MyProfileScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            contact: '',
            address: '',
            password: '',
        }
    }

    render(){
        return (
            <View style={{ backgroundColor: '#FFFF8A',flex: 1 }}>
                <Header 
                   centerComponent={{ 
                       text: "My Profile", 
                       style: { color: '#FBAA60', 
                        fontSize:26, 
                        fontWeight:"600", 
                        fontStyle: 'italic' } }}
                   backgroundColor="#A82810" />
                <View>
                    <TextInput
                        placeholder="Your Name" 
                        style={[styles.textInput,{marginTop: 70}]} 
                        keyboardAppearance="dark" 
                        maxLength={20} 
                        keyboardType="default" 
                        onChangeText={(text)=> {
                            this.setState({ name: text })
                        }} />
                    <TextInput 
                        placeholder="Contact number" 
                        style={styles.textInput} 
                        keyboardAppearance="dark"
                        keyboardType="numeric" 
                        maxLength={10} 
                        onChangeText={(text)=> {
                            this.setState({ contact: text })
                        }} />
                    <TextInput 
                        placeholder="address" 
                        style={styles.textInput} 
                        keyboardAppearance="dark" 
                        keyboardType="numeric" 
                        multiline={true}
                        onChangeText={(text)=> {
                            this.setState({ address: text })
                        }} />
                    <TextInput 
                        placeholder="password" 
                        style={styles.textInput} 
                        keyboardAppearance="dark" 
                        keyboardType="numeric" 
                        multiline={true}
                        onChangeText={(text)=> {
                            this.setState({ password: text })
                        }} />
                </View>
                <TouchableOpacity 
                    style={styles.button} >
                        <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        borderBottomWidth: 3,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 35,
        fontSize: 20,
        fontStyle: 'italic',
        borderColor: '#FF2400'
    },
    button:{
        width: '65%',
        height: '8%',
        backgroundColor: '#A82810',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
        paddingTop: '0.5%',
        borderRadius: 13
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 35,
        color: '#FBAA60',
        fontWeight: '600',
        fontStyle: 'italic'
    }
})