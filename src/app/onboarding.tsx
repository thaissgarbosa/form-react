import Button from "@/components/button";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";


function handleReturn(){
    router.navigate("/"); // ou router.back();
}

function Onboarding(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Onboarding</Text>
            <Button label={"Voltar"} onPress={handleReturn}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#121212",
        padding: 32,
        gap: 16,
    },

    title:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFF",
    },
});

export default Onboarding;