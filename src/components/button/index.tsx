import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
    label: String;
};

function Button({label, ...rest}: Props){
    return(
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.label}> {label} </Text>
        </TouchableOpacity>
    );
}

export default Button;