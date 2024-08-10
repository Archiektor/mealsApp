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
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
//import FavoritesContextProvider from './store/context/favorites-context';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

export type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: { categoryId: string };
    SingleMealOverview: { mealId: string };
};

export type RootDrawerParamList = {
    Categories: undefined;
    Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.secondary600},
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: Colors.primary400},
                drawerActiveTintColor: Colors.secondary500,
                drawerInactiveTintColor: Colors.primary200,
                drawerContentStyle: {backgroundColor: Colors.secondary400},
                drawerActiveBackgroundColor: Colors.secondary200,
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({color}) => {
                        return <Ionicons name="list" size={20} color={color}/>;
                    },
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({color}) => {
                        return <Ionicons name="star" size={20} color={color}/>;
                    },
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView style={styles.safeArea}>
                {/*<FavoritesContextProvider>*/}
                <Provider store={store}>
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
                                component={DrawerNavigator}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="MealsOverview"
                                component={MealsOverviewScreen}
                            />
                            <Stack.Screen
                                name="SingleMealOverview"
                                component={SingleMealOverviewScreen}
                                options={{
                                    title: 'Meal Details',
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
                {/*</FavoritesContextProvider>*/}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
