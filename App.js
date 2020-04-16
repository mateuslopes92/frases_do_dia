/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';

import logo from './assets/images/logo.png';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [escolhida, setEscolhida] = useState('');

  const novaFrase = () => {
    setVisible(true);

    var numeroAleatorio = Math.random();

    numeroAleatorio = Math.floor(numeroAleatorio * 11);

    var frases = Array();
    frases[0] = 'Não tenha medo da mudança.';
    frases[1] =
      'Vencedor não é aquele que sempre vence, mas sim aquele que nunca para de lutar.';
    frases[2] = 'Às vezes você tem que levantar sozinho e seguir em frente.';
    frases[3] = 'Nunca diga eu não consigo.';
    frases[4] =
      'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.';
    frases[5] = 'Até o maior dos prédios começa no chão.';
    frases[6] =
      'Se você não lutar por alguma coisa, será vencido por qualquer coisa.';
    frases[7] =
      'Que a minha coragem seja sempre mais forte do que a tentação de parar e desistir.';
    frases[8] = 'Não sabendo que era impossível, foi lá e fez.';
    frases[9] = 'Seu maior medo também pode ser sua maior motivação.';
    frases[10] = 'Não desista nunca!';

    var fraseEscolhida = frases[numeroAleatorio];

    setEscolhida(fraseEscolhida);

    // Alert.alert(fraseEscolhida);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#538530" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{escolhida}</Text>

                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#538530'}}
                  onPress={() => {
                    setVisible(!visible);
                  }}>
                  <Text style={styles.textStyle}>Fechar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <Image source={logo} />
          <TouchableOpacity style={styles.botao} onPress={novaFrase}>
            <Text style={styles.textButton}>Nova Frase</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 30,
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#538530',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
    marginBottom: 0,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
