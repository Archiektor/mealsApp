import React, {useContext, useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {TextSizes} from '../constants/TextSizes';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {RouteProp} from '@react-navigation/native';

type SingleMealOverviewScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'SingleMealOverview'>;
    route: RouteProp<RootStackParamList, 'SingleMealOverview'>;
};

const SingleMealOverviewScreen = ({navigation, route}: SingleMealOverviewScreenProps) => {
    const mealId = route.params.mealId;
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    const iconPressHandler = () => {
        // alert("icon pressed");
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    pressCb={iconPressHandler}
                    nameOfIcon={mealIsFavorite ? 'star' : 'star-outline'}
                    color={'#fff'}
                />
            ),
        });
    }, [navigation, iconPressHandler, mealIsFavorite]);


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
