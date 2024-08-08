import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Margins} from '../constants/Margins';
import {Category} from '../data/dummy-data';
import {Colors} from '../constants/Colors';

type CategoryGridTile = {
    item: Category,
    pressCb: (id: string) => void,
}

const CategoryGridTile = ({item, pressCb}: CategoryGridTile) => {
    const pressHandler = () => {
        pressCb(item.id)
    }

    return (
        <Pressable
            style={({pressed}) => [
                styles.outerItemWrapper,
                {backgroundColor: item.color},
                pressed && styles.btnPressed,
            ]}
            onPress={pressHandler}
            android_ripple={{color: Colors.primary200}}
        >
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </Pressable>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    outerItemWrapper: {
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        width: 150,
        height: 150,
        borderRadius: Margins.s,
        padding: Margins.m,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, // Add shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        margin: Margins.s,
    },
    btnPressed: {
        opacity: 0.35,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
});


