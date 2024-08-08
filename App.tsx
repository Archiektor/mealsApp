import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoriesScreen from './screens/CategoriesScreen';
import {StatusBar} from 'expo-status-bar';
import {Colors} from './constants/Colors';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" backgroundColor={Colors.secondary600}/>
            <SafeAreaView style={styles.safeArea}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Categories"
                            component={CategoriesScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                            options={{headerShown: false}}
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
        backgroundColor: Colors.secondary600
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
