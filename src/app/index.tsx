import { Text, View, StyleSheet, } from "react-native";
import Button from "../components/button/index";
import Input from "../components/input";

function Index() {

    function handleSubmit() {
        const name = "Thais!";
        alert(`Olá, ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, world!
            </Text>
            <Input/>
            <Button label={"Enviar"} onPress={handleSubmit}  activeOpacity={1}/>
            <Button label={"Continuar"} onPress={handleSubmit}  />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "blue",
        fontSize: 26,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
});

export default Index;