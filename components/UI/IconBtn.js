import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconBtn({ icon, size, color, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.wrapper}>
                <Ionicons
                    name={icon}
                    size={size}
                    color={color}
                />
            </View>
        </Pressable>
    );
}

export default IconBtn;

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
    },
    pressed: {
        opacity: 0.5,
    },
});