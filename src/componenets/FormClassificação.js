import { CalcularImc } from './FormIMC';
import { Text } from 'react';


const FormClassificação = () => {

    if (ImcCalculado < 18.5) {
        <Text>Abaixo do Peso.</Text>
    }

    if (ImcCalculado >= 18.5 && Imc <= 24.9) {
        <Text>Peso Normal.</Text>
    }

    if (ImcCalculado >= 25 && Imc <= 29.9) {
        <Text>Sobrepeso.</Text>
    }

    if (ImcCalculado >= 30 && Imc <= 34.9) {
        <Text>Obesidade Grau 1.</Text>
    }

    if (ImcCalculado >= 35 && Imc <= 39.9) {
        <Text>Obesidade Grau 2.</Text>
    }

    if (ImcCalculado >= 40) {
        <Text>Obesidade Grau 3 (Obesidade Mórbida).</Text>
    }

    return (
        <View style={styles.formContainer}>
            <FormClassificação />
        </View>
    );
};



export default FormClassificação;