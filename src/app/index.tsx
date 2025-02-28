import { Text, View, StyleSheet, } from "react-native";
import {useState} from "react";

import Button from "@/components/button/index";
import Input from "@/components/input/index";

function Index(){

   const[name, setName] = useState("Usuário");
    
   function handleSubmit() {
        const name = "Thais!";
        alert(`Olá, ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}!</Text>
            <Input label="Nome" onChangeText={setName}/>
            <Input label="Idade"/>
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
        gap: 12,

    },
});

export default Index;