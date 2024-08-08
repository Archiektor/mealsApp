import React from 'react';
import {Pressable, Text, View, Image, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {TextSizes} from '../constants/TextSizes';
import {Meal} from '../data/dummy-data';

type MealItem = {
    mealItem: Meal;
};

const MealItem = ({mealItem}: MealItem) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color: Colors.primary600}} style={({pressed}) => [styles.pressable, pressed && styles.pressed]}>
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
    container: {
        flex: 1,
        backgroundColor: Colors.primary500,
        padding: Margins.s,
        marginBottom: Margins.m,
        borderRadius: Margins.m,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    pressable: {
        flex: 1
    },
    pressed: {
        opacity: 0.9
    },
    upperMealContainer: {
        alignItems: 'center',
        marginBottom: Margins.s
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: Margins.m
    },
    title: {
        fontSize: TextSizes.l,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.textPrimary,
        marginVertical: Margins.s
    },
    bottomMealContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoText: {
        fontSize: TextSizes.m,
        color: Colors.textSecondary
    }
});
