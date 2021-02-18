
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import TextInputMask from 'react-native-text-input-mask';
import LinearGradient from 'react-native-linear-gradient';
import api from './src/services/api';


export default function App() {

const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  
  function alertaSucesso() {
    Alert.alert(
      '',
      'Logado com sucesso',
      [{}, {text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
  
  function alertaErro() {   Alert.alert(
    '',
    'Email ou senha inválidos.',
    [{}, {text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  ); }
  

  function enviarDados() {
    if (email == null || email == '' || senha == '' ||senha == null ) {
      console.log('Preencha os campos corretamente.');
      alertaErro();
    }else{
      axios
        .post('https://602dd7ee96eaad00176dcd86.mockapi.io/login', {
          email: email,
          senha: senha,
        })
        .then(function (response) {
          // handle success
          alertaSucesso();
          console.log(response.data.token);
        })
        .catch(function (error) {
          alertaErro();
          console.log(error);
        });
    }
}
  
  const image = {
    uri:
      'https://academiadouniversitario.com.br/wp-content/uploads/2020/06/Universit%C3%A1rios.jpg',
  };

  return (
    <View style={styles.body}>
      <View style={styles.esquerda}>
        <ImageBackground
          source={image}
          imageStyle={{
            opacity: 0.9,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
          style={styles.image}
        />
        <Text>image</Text>
      </View>

      <View style={styles.direita}>
        <View style={styles.titulo}>
          <Text style={{color: '#311b92ff', fontSize: 50, marginLeft: 35}}>
            Olá, seja {'\n'}bem-vindo!
          </Text>
          <Text
            style={{
              color: '#8c9effff',
              fontSize: 22,
              marginLeft: 35,
            }}>
            Para acessar a plataforma,{'\n'}faça seu login.
          </Text>
        </View>
        <View style={styles.login}>
          <Text
            style={{
              marginLeft: -180,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 15,
              marginBottom: -20,
            }}>
            E-MAIL
          </Text>
          <TextInput
            style={styles.inputCount}
            placeholder="username@mail.com"
            render={(props) => (
              <TextInputMask
                {...props}
                mask="[--------------------]@[-----------------------].[---------]"
              />
            )}
            value={email}
            mode="outlined"
            onChangeText={(email) => setEmail(email)}
          />
          <Text
            style={{
              marginLeft: -180,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 15,
              marginBottom: -20,
            }}>
            SENHA
          </Text>
          <TextInput
            style={styles.inputCount}
            placeholder="******"
            mode="outlined"
            secureTextEntry={true}
            value={senha}
            
            onChangeText={(senha) => setSenha(senha)}
          />
          <TouchableOpacity onPress={() => enviarDados()}>
            <LinearGradient
              colors={['#9c27b0ff', '#8e24aaff', '#7b1fa2ff']}
              style={styles.linearGradient}>
              <Text style={styles.fonteBotao}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={{color: 'rgba(183, 196, 207, 1)', fontSize: 25}}>
            Esqueceu seu login ou senha?{'\n'}Clique{' '}
            <Text
              style={{
                color: 'rgba(123, 31, 162, 1)',
                fontSize: 25,
                textDecorationLine: 'underline',
              }}>
              aqui
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8FFFF',
  },
  esquerda: {
    flex: 2,
    backgroundColor: '#F8F8FFFF',
  },
  direita: {
    flex: 3,
    flexDirection: 'column',

    backgroundColor: '#F8F8FFFF',
  },
  titulo: {
    flex: 2,
    justifyContent: 'flex-end',
    alignSelf: 'center',

    backgroundColor: '#F8F8FFFF',
  },
  login: {
    paddingTop: 40,
    alignItems: 'center',

    flex: 3,
    backgroundColor: '#F8F8FFFF',
  },

  linearGradient: {
    width: 200,
    marginBottom: 30,
    borderRadius: 5,
  },
  fonteBotao: {
    fontSize: 23,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 10,
    opacity: 1,
  },
  inputCount: {
    backgroundColor: '#F7F4F4FF',
    height: 40,
    width: 30,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    color: '#F7F4F4FF',
    width: '55%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

