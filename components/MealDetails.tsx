import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Margins} from '../constants/Margins';
import {Colors} from '../constants/Colors';
import {TextSizes} from '../constants/TextSizes';
import {Meal} from '../data/dummy-data';
import Subtitle from './Subtitle';

type MealDetails = {
    selectedMeal: Meal | undefined;
}

const MealDetails = ({selectedMeal}: MealDetails) => {
    if (!selectedMeal) {
        return <View>
            <Text>Unfortunately no info about this meal</Text>
        </View>;
    }

    return (
        <>
            <Subtitle>Ingredients</Subtitle>
            <Text style={styles.detailText}>{selectedMeal?.ingredients.join(', ')}</Text>
            <Subtitle>Steps</Subtitle>
            {selectedMeal?.steps.map((step, index) => (
                <Text key={index} style={styles.detailText}>
                    {`${index + 1}. ${step}`}
                </Text>
            ))}
            <Subtitle>Dietary Information</Subtitle>
            <Text style={styles.detailText}>Gluten Free: {selectedMeal?.isGlutenFree ? 'Yes' : 'No'}</Text>
            <Text style={styles.detailText}>Vegan: {selectedMeal?.isVegan ? 'Yes' : 'No'}</Text>
            <Text style={styles.detailText}>Lactose Free: {selectedMeal?.isLactoseFree ? 'Yes' : 'No'}</Text>
        </>
    );
}

export default MealDetails


const styles = StyleSheet.create({
    detailText: {
        fontSize: TextSizes.l,
        color: Colors.primary800,
        marginBottom: Margins.xs,
        lineHeight: TextSizes.l,
    },
});

