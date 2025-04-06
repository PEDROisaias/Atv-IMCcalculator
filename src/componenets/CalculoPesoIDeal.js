import FormIMC from './FormIMC';
import { Text } from 'react';
import { StyleSheet, View } from 'react-native';

const CalculoPesoIDeal = () => {
    
    const minimoIdeal = () => {
        minimoIdeal = 18.5 * (altura * altura);
        <View>
            <Text>O seu peso mínimo ideal é: {minimoIdeal}</Text>
        </View>
    }
    
    const maximoIdeal = () => {
        maximoIdeal = 24.9 * (altura * altura);
        <Text>O seu peso máximo ideal é: {maximoIdeal}</Text>
    }
    
    return(
        <View style={styles.formContainer}>
            <CalculoPesoIDeal/>
        </View>
    );
}

export default CalculoPesoIDeal;