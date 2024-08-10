import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import React, {useContext} from 'react';
import {FavoritesContext} from '../store/context/favorites-context';
import {useSelector} from 'react-redux';

const FavoritesScreen = () => {
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state: any) => state.favoriteMeals.ids);
    const displayedMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {displayedMeals.map(meal => (
                <View style={styles.mealContainer} key={meal.id}>
                    <Image source={{uri: meal.imageUrl}} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{meal.title}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 12,
    },
    mealContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
