import {FlatList, StyleSheet, View} from 'react-native';
import {useLayoutEffect} from 'react';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {CATEGORIES, MealType, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import {RootStackParamList} from '../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type MealsOverviewScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'MealsOverview'>;
    route: RouteProp<RootStackParamList, 'MealsOverview'>;
};

const MealsOverviewScreen = ({navigation, route}: MealsOverviewScreenProps) => {
    //const route = useRoute(); // or useHook
    const {categoryId} = route.params;

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title;

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation]);

    return (
        <View style={styles.container}>
            <FlatList<MealType>
                data={displayedMeals}
                renderItem={({item}) => (
                    <MealItem mealItem={item}/>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default MealsOverviewScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary200,
        padding: Margins.s,
    },
});
