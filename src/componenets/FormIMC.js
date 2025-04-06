import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import FormClassificação from './FormClassificação';
import CalculoPesoIDeal from './CalculoPesoIDeal';
import { useState } from 'react';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC}/>
            { imc && <Result imc={imc} />}
            <FormClassificação/>
            <CalculoPesoIDeal/>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40, 
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        },
});

export default FormIMC;