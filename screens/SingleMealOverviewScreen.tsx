import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {TextSizes} from '../constants/TextSizes';
import MealDetails from '../components/MealDetails';

const SingleMealOverviewScreen = ({navigation, route}) => {
    const {mealId} = route.params;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{selectedMeal?.title}</Text>
                <MealDetails selectedMeal={selectedMeal}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Margins.l,
        overflow: 'hidden',
        shadowColor: Colors.primary900,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: Colors.primary200,
        borderRadius: Margins.m,
    },
    image: {
        width: '100%',
        minHeight: 260,
        maxHeight: 320,
        borderRadius: Margins.m,
    },
    detailsContainer: {
        padding: Margins.l,
    },
    title: {
        fontSize: TextSizes.xl,
        fontWeight: 'bold',
        color: Colors.primary900,
        marginBottom: Margins.m,
        textAlign: 'center',
    },
});

export default SingleMealOverviewScreen;
