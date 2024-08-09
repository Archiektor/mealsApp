import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import SingleMealOverviewScreen from './screens/SingleMealOverviewScreen';
import {Colors} from './constants/Colors';

export type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: { categoryId: string };
    SingleMealOverview: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <>
            <StatusBar style="light" backgroundColor={Colors.secondary600}/>
            <SafeAreaView style={styles.safeArea}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {backgroundColor: Colors.secondary600},
                            headerTintColor: 'white',
                            contentStyle: {backgroundColor: Colors.primary400},
                        }}
                    >
                        <Stack.Screen
                            name="MealsCategories"
                            component={CategoriesScreen}
                            options={{title: 'All Categories'}}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="SingleMealOverview"
                            component={SingleMealOverviewScreen}
                            options={{title: 'Meal Details'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
