import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Margins} from '../constants/Margins';
import {Colors} from '../constants/Colors';
import {TextSizes} from '../constants/TextSizes';

type SubtitleProps = {
    children?: React.ReactNode;
};

const Subtitle = ({children}: SubtitleProps) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitleContainer: {
        borderBottomWidth: 2,
        borderColor: Colors.secondary700,
        maxWidth: '80%',
        marginBottom: Margins.s,
    },
    subTitle: {
        fontSize: TextSizes.l,
        fontWeight: '600',
        color: Colors.secondary700,
        textAlign: 'left',
    },
});
