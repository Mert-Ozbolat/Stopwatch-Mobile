import { SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import Counter from '../components/Counter';


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#6f6f6f' }}>
            <Counter />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
});
