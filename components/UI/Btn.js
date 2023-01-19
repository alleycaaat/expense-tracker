import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Btn({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.text, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Btn;

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.lighter,
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: GlobalStyles.colors.lightest,
        borderRadius: 4,
    },
});