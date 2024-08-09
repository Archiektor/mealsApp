import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import SingleMealOverviewScreen from './screens/SingleMealOverviewScreen';
import {Colors} from './constants/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';


export type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: { categoryId: string };
    SingleMealOverview: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.secondary600},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: Colors.primary400},
    }}>
        <Drawer.Screen name={"Categories"} component={CategoriesScreen}/>
        <Drawer.Screen name={"Favorites"} component={FavoritesScreen}/>
    </Drawer.Navigator>
}

export default function App() {
    return (
        <>
            <StatusBar style="light" backgroundColor={Colors.secondary600}/>
            <SafeAreaView style={styles.safeArea}>
                <NavigationContainer>
                    <Stack.Navigator // <Drawer.Navigator>
                        screenOptions={{
                            headerStyle: {backgroundColor: Colors.secondary600},
                            headerTintColor: 'white',
                            contentStyle: {backgroundColor: Colors.primary400},
                        }}
                    >
                        <Stack.Screen
                            name="MealsCategories"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                            //options={{title: 'All Categories'}}
                        />
                        {/*<Stack.Screen*/}
                        {/*    name="MealsCategories"*/}
                        {/*    component={CategoriesScreen}*/}
                        {/*    options={{title: 'All Categories'}}*/}
                        {/*/>*/}
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="SingleMealOverview"
                            component={SingleMealOverviewScreen}
                            options={
                                {
                                    title: 'Meal Details',
                                }
                            }
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
