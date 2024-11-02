import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [time, setTime] = useState("00:00:00");
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);





    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        setTime(`${hours}:${minutes}:${secs}`);
    }, [seconds]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };







    return (
        <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleStart} style={styles.button}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStop} style={styles.button}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#3f8efc',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});