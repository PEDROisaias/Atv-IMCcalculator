import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.title}> Calculador de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;