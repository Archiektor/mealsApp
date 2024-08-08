import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data'; // Import your meals data
import {Colors} from '../constants/Colors'; // Import your colors constants
import {Margins} from '../constants/Margins'; // Import your margins constants
import {TextSizes} from '../constants/TextSizes'; // Import your text sizes constants

const SingleMealOverviewScreen = ({navigation, route}) => {
    const {mealId} = route.params;

    const mealData = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: mealData?.imageUrl}} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{mealData?.title}</Text>
                <Text style={styles.subTitle}>Ingredients</Text>
                <Text style={styles.detailText}>{mealData?.ingredients.join(', ')}</Text>
                <Text style={styles.subTitle}>Dietary Information</Text>
                <Text style={styles.detailText}>Gluten Free: {mealData?.isGlutenFree ? 'Yes' : 'No'}</Text>
                <Text style={styles.detailText}>Vegan: {mealData?.isVegan ? 'Yes' : 'No'}</Text>
                <Text style={styles.detailText}>Lactose Free: {mealData?.isLactoseFree ? 'Yes' : 'No'}</Text>
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
    subTitle: {
        fontSize: TextSizes.l,
        fontWeight: '600',
        color: Colors.secondary700,
        marginTop: Margins.m,
        marginBottom: Margins.s,
        textAlign: 'left',
    },
    detailText: {
        fontSize: TextSizes.m,
        color: Colors.primary800,
        marginBottom: Margins.s,
        lineHeight: TextSizes.l,
    },
});

export default SingleMealOverviewScreen;
