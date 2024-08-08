import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES, Category} from '../data/dummy-data';
import {Margins} from '../constants/Margins';
import {Colors} from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}) => {
    const categoryPressHandler = (id: string) => {
        //console.log(id)
        navigation.navigate('MealsOverview', {categoryId: id}); // <- define params obj.
    }


    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList<Category>
                    data={CATEGORIES}
                    renderItem={({item}) => (
                        <CategoryGridTile item={item} pressCb={categoryPressHandler}/>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
        //alignItems: 'center',
    },
    header: {
        minHeight: 48,
        maxHeight: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary600,
    },
    hamburgerContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: Margins.xs,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hamburger: {
        width: Margins.l,
        height: Margins.l,
        borderRadius: Margins.xs,
        backgroundColor: '#fff',
    },
    headerTextContainer: {
        flex: 9,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    listContainer: {
        alignItems: 'center',
        paddingVertical: Margins.m,
    }
});

export default CategoriesScreen;
