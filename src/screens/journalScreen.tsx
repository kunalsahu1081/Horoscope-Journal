import React, {useCallback, useState} from 'react';
import {
    Alert,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import {useJournal} from '../hooks/useJournal';
import {JournalCard} from '../components/journalCard';
import {COLORS} from '../utils/constants';
import {formatDate, sortEntriesByDate} from '../utils/dateHelpers';
import moment from 'moment';
import store, {RootState} from '../store/store.ts';
import {deleteJournal} from '../store/storeJournal.ts';
import {useSelector} from 'react-redux';

export const JournalScreen = ({navigation}: any) => {
    const entries = useSelector(
        (state: RootState) => state.journal.JournalList,
    );

    const [currentJournalDate, setCurrentJournalDate] = useState(
        moment().format('YYYY-MM-DD'),
    );
    const {content, updateContent} = useJournal(currentJournalDate);
    const sortedEntries = sortEntriesByDate(entries);

    const handleTextChange = (text: string) => {
        updateContent(text);
    };

    const handleDeleteEntry = useCallback((date: string) => {
        Alert.alert(
            'Delete Entry',
            'Are you sure you want to delete this journal entry?',
            [
                {text: 'Cancel', style: 'cancel'},
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => store.dispatch(deleteJournal({date: date})),
                },
            ],
        );
    }, []);

    const handleEntryPress = useCallback((date: string) => {
        setCurrentJournalDate(date);
    }, []);

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={COLORS.background}
            />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Journal</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps="handled">
                {/* Today's Entry Section */}
                <View style={styles.todaySection}>
                    <View style={styles.todaySectionHeader}>
                        <Text style={styles.sectionTitle}>Today's Entry</Text>
                        <Text style={styles.todayDate}>
                            {formatDate(new Date())}
                        </Text>
                    </View>

                    <View style={styles.editorContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Write about your day, thoughts, feelings..."
                            placeholderTextColor={COLORS.textSecondary}
                            multiline
                            value={content}
                            onChangeText={handleTextChange}
                            textAlignVertical="top"
                        />

                        <View style={styles.savedIndicator}>
                            <Text style={styles.savedText}>✓ Saved</Text>
                        </View>
                    </View>

                    <View style={styles.statsRow}>
                        <Text style={styles.wordCount}>
                            {
                                content
                                    .split(/\s+/)
                                    .filter(
                                        (word: string | any[]) =>
                                            word.length > 0,
                                    ).length
                            }{' '}
                            words
                        </Text>
                        <Text style={styles.charCount}>
                            {content.length} characters
                        </Text>
                    </View>
                </View>

                {/* Past Entries Section */}
                {Object.keys(sortedEntries)?.length > 0 && (
                    <View style={styles.pastSection}>
                        <Text style={styles.sectionTitle}>Past Entries</Text>
                        {Object.keys(sortedEntries).map((date: string) => (
                            <JournalCard
                                key={date}
                                date={date}
                                entry={sortedEntries[date] || ''}
                                onPress={() => handleEntryPress(date)}
                                onDelete={() => handleDeleteEntry(date)}
                            />
                        ))}
                    </View>
                )}

                {Object.keys(sortedEntries)?.length === 0 && content.length === 0 && (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyEmoji}>📖</Text>
                        <Text style={styles.emptyTitle}>
                            Start Your Journey
                        </Text>
                        <Text style={styles.emptyText}>
                            Write your first journal entry above and create a
                            habit of daily reflection.
                        </Text>
                    </View>
                )}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: COLORS.cardBackground,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text,
    },
    placeholder: {
        width: 40,
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
    todaySection: {
        marginBottom: 32,
    },
    todaySectionHeader: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: 4,
    },
    todayDate: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    editorContainer: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 16,
        minHeight: 200,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    textInput: {
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.text,
        minHeight: 160,
    },
    savingIndicator: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: COLORS.primary + '20',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    savingText: {
        fontSize: 12,
        color: COLORS.primary,
        fontWeight: '600',
    },
    savedIndicator: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: COLORS.success + '20',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    savedText: {
        fontSize: 12,
        color: COLORS.success,
        fontWeight: '600',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        paddingHorizontal: 4,
    },
    wordCount: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    charCount: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    pastSection: {
        marginTop: 8,
    },
    emptyState: {
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyEmoji: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 16,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 40,
    },
});
