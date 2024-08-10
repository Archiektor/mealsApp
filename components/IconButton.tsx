import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from '../constants/Colors';

type IoniconNames = keyof typeof Ionicons.glyphMap;

type IconButton = {
    pressCb: () => void,
    nameOfIcon: IoniconNames,
    color: string,
}

const IconButton = ({pressCb, nameOfIcon, color}: IconButton) => {
    return (
        <Pressable onPress={pressCb} style={({pressed}) => [
            styles.button,
            pressed && styles.pressed,
        ]}>
            <Ionicons name={nameOfIcon} size={20} color={color}/>
        </Pressable>
    );
}

export default IconButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: Colors.primary200,
    },
});
