import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import {COLORS} from '../utils/constants';
import {useHoroscope} from '../hooks/useHoroscope.ts';

export const HoroscopeCard = ({sign}: {sign: string}) => {
    const {horoscope, loading, refresh} = useHoroscope(sign);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={styles.loadingText}>
                    Loading your horoscope...
                </Text>
            </View>
        );
    }

    if (!horoscope) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Unable to load horoscope</Text>
                <TouchableOpacity
                    style={styles.retryButton}
                    onPress={refresh}
                >
                    <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <Text style={styles.description}>{horoscope.horoscope}</Text>
            </View>

            {/*<View style={styles.detailsGrid}>*/}
            {/*    <View style={styles.detailItem}>*/}
            {/*        <Text style={styles.detailLabel}>Mood</Text>*/}
            {/*        <Text style={styles.detailValue}>{horoscope.mood}</Text>*/}
            {/*    </View>*/}

            {/*    <View style={styles.detailItem}>*/}
            {/*        <Text style={styles.detailLabel}>Lucky Color</Text>*/}
            {/*        <Text style={styles.detailValue}>{horoscope.color}</Text>*/}
            {/*    </View>*/}

            {/*    <View style={styles.detailItem}>*/}
            {/*        <Text style={styles.detailLabel}>Lucky Number</Text>*/}
            {/*        <Text style={styles.detailValue}>*/}
            {/*            {horoscope.luckyNumber}*/}
            {/*        </Text>*/}
            {/*    </View>*/}

            {/*    <View style={styles.detailItem}>*/}
            {/*        <Text style={styles.detailLabel}>Lucky Time</Text>*/}
            {/*        <Text style={styles.detailValue}>*/}
            {/*            {horoscope.luckyTime}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*{horoscope.compatibility && (*/}
            {/*    <View style={styles.compatibility}>*/}
            {/*        <Text style={styles.compatibilityLabel}>*/}
            {/*            Compatible with:{' '}*/}
            {/*        </Text>*/}
            {/*        <Text style={styles.compatibilityValue}>*/}
            {/*            {horoscope.compatibility}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*)}*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    mainContent: {
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.text,
        textAlign: 'center',
    },
    detailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        gap: 12,
    },
    detailItem: {
        flex: 1,
        minWidth: '45%',
        backgroundColor: COLORS.background,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginBottom: 4,
        fontWeight: '500',
    },
    detailValue: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: '600',
    },
    compatibility: {
        marginTop: 16,
        padding: 12,
        backgroundColor: COLORS.primary + '10',
        borderRadius: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    compatibilityLabel: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    compatibilityValue: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: '600',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 14,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 14,
        color: COLORS.error,
        textAlign: 'center',
        marginBottom: 12,
    },
    retryButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
    },
    retryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});
