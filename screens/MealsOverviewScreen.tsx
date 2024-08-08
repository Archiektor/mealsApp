import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../constants/Colors';
import {Margins} from '../constants/Margins';
import {Meal, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';


const MealsOverviewScreen = ({navigation, route}) => {
    //const route = useRoute(); // or useHook
    const {categoryId} = route.params;

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.container}>
            <FlatList<Meal>
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
