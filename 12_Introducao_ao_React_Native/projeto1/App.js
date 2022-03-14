import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'



const App = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    const novoNumero = Math.floor(Math.random() * 10);
    setCount(novoNumero);
  }

  return (
    <>
      <SafeAreaView style={style.container}>
        <Text style={style.numero}>{count}</Text>
        <TouchableOpacity style={style.botao} onPress={handleCount}>
          <Text>Gerar Número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numero: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})

export default App;
