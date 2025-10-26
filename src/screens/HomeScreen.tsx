import React, {useCallback, useState} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {HoroscopeCard} from '../components/horoscopeCard';
import {COLORS} from '../utils/constants';
import {formatDate} from '../utils/dateHelpers';
import {SelectedZodiac} from '../components/zodiacPicker.tsx';

export const HomeScreen = ({navigation}: any) => {

    const [selectedSign, setSelectedSign] = useState('Aries');

    const todayDate = formatDate(new Date());

    const handleSignSelect = useCallback((sign: string) => {
        setSelectedSign(sign);
    }, []);

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.background}
            />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Today's Horoscope</Text>
                        <Text style={styles.date}>{todayDate}</Text>
                    </View>
                </View>

                {/*Selected zodiac*/}
                <SelectedZodiac selectedSign={selectedSign} handleSignSelect={handleSignSelect} />

                {/* Horoscope Card */}
                <HoroscopeCard sign={selectedSign} />

                {/* Journal Button */}
                <TouchableOpacity
                    style={styles.journalButton}
                    onPress={() => navigation.navigate('Journal')}
                    activeOpacity={0.8}>
                    <Text style={styles.journalButtonText}>
                        📝 Write Journal Entry
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
    header: {
        marginBottom: 24,
    },
    greeting: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: 4,
    },
    date: {
        fontSize: 16,
        color: COLORS.textSecondary,
    },
    journalButton: {
        backgroundColor: COLORS.primary,
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    journalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },
    statCard: {
        flex: 1,
        backgroundColor: COLORS.cardBackground,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    statNumber: {
        fontSize: 32,
        fontWeight: '700',
        color: COLORS.primary,
        marginBottom: 8,
    },
    statLabel: {
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
});
