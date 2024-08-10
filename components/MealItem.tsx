import React from 'react';
import {Pressable, Text, View, Image, StyleSheet, Platform} from 'react-native';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {TextSizes} from '../constants/TextSizes';
import {MealType} from '../data/dummy-data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type MealItemProps = {
    mealItem: MealType;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'SingleMealOverview'>;

const MealItem = ({mealItem}: MealItemProps) => {
    const navigation = useNavigation<NavigationProp>();

    const mealPressHandler = (id: string) => {
        navigation.navigate('SingleMealOverview', {mealId: id});
    };

    return (
        <View style={styles.outerContainer}>
            <Pressable
                android_ripple={{color: Colors.primary700}}
                style={({pressed}) => [styles.pressable, pressed && styles.pressed]}
                onPress={() => mealPressHandler(mealItem.id)}
            >
                <View style={styles.upperMealContainer}>
                    <Image source={{uri: mealItem.imageUrl}} style={styles.img}/>
                    <Text style={styles.title}>{mealItem.title}</Text>
                </View>
                <View style={styles.bottomMealContainer}>
                    <Text style={styles.infoText}>{mealItem.duration} m.</Text>
                    <Text style={styles.infoText}>{mealItem.complexity.toUpperCase()}</Text>
                    <Text style={styles.infoText}>{mealItem.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    outerContainer: {
        marginBottom: Margins.m,
        borderRadius: Margins.m,
        backgroundColor: Colors.primary500,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    pressable: {
        flex: 1,
        borderRadius: Margins.m,
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.9,
    },
    upperMealContainer: {
        alignItems: 'center',
        marginBottom: Margins.s,
    },
    img: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: Margins.m,
        borderTopRightRadius: Margins.m,
    },
    title: {
        fontSize: TextSizes.l,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.textPrimary,
        marginVertical: Margins.s,
    },
    bottomMealContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: Margins.s,
    },
    infoText: {
        fontSize: TextSizes.m,
        color: Colors.textSecondary,
    },
});
