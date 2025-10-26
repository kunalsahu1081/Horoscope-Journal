import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/constants';
import {formatShortDate} from '../utils/dateHelpers';
import moment from 'moment';

export const JournalCard = ({date, entry, onPress, onDelete}: any) => {
    const formattedDate = formatShortDate(new Date(date));
    const preview =
        entry.substring(0, 100) +
        (entry.length > 100 ? '...' : '');

    if (date === moment().format('YYYY-MM-DD')) {
        return <></>
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}>
            <View style={styles.header}>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
                {onDelete && (
                    <TouchableOpacity
                        onPress={onDelete}
                        style={styles.deleteButton}>
                        <Text style={styles.deleteIcon}>🗑️</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={styles.preview} numberOfLines={3}>
                {preview}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.readMore}>Tap to read more →</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    backgroundColor: COLORS.primary + '15',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    fontSize: 18,
  },
  preview: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.text,
    marginBottom: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
  },
  readMore: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '500',
  },
});
