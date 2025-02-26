import {Text, View, StyleSheet, Button} from "react-native";


function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, world!
            </Text>
            <Button title="Enviar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: "blue",
        fontSize: 26,
        fontWeight: "bold",
    },
    container:{
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
});

export default Index;