import React, {useState} from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {COLORS, ZODIAC_SIGNS} from '../utils/constants';

export const SelectedZodiac = ({
    selectedSign,
    handleSignSelect,
}: {
    selectedSign: string;
    handleSignSelect: any;
}) => {
    const [pickerVisible, setPickerVisible] = useState(false);

    const selectedZodiac = ZODIAC_SIGNS.find(z => z.value === selectedSign.toLowerCase());

    return (
        <>
            <TouchableOpacity
                style={styles.zodiacSelector}
                onPress={() => setPickerVisible(true)}
                activeOpacity={0.8}>
                <View style={styles.zodiacInfo}>
                    <Text style={styles.zodiacEmoji}>
                        {selectedZodiac?.emoji}
                    </Text>
                    <View>
                        <Text style={styles.zodiacLabel}>
                            {selectedZodiac?.label}
                        </Text>
                        <Text style={styles.zodiacDates}>
                            {selectedZodiac?.dates}
                        </Text>
                    </View>
                </View>
                <Text style={styles.changeText}>Change ▼</Text>
            </TouchableOpacity>

            <ZodiacPicker
                visible={pickerVisible}
                selectedSign={selectedSign}
                onSelectSign={handleSignSelect}
                onClose={() => setPickerVisible(false)}
            />
        </>
    );
};

export const ZodiacPicker = ({
    selectedSign,
    onSelectSign,
    visible,
    onClose,
}: any) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Select Your Zodiac Sign
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeButton}>
                            <Text style={styles.closeText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.scrollView}>
                        {ZODIAC_SIGNS.map(sign => (
                            <TouchableOpacity
                                key={sign.value}
                                style={[
                                    styles.signItem,
                                    selectedSign === sign.value &&
                                        styles.selectedItem,
                                ]}
                                onPress={() => {
                                    onSelectSign(sign.value);
                                    onClose();
                                }}>
                                <Text style={styles.emoji}>{sign.emoji}</Text>
                                <View style={styles.signInfo}>
                                    <Text style={styles.signLabel}>
                                        {sign.label}
                                    </Text>
                                    <Text style={styles.signDates}>
                                        {sign.dates}
                                    </Text>
                                </View>
                                {selectedSign === sign.value && (
                                    <Text style={styles.checkmark}>✓</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    zodiacSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.cardBackground,
        padding: 16,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    zodiacInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    zodiacEmoji: {
        fontSize: 40,
        marginRight: 16,
    },
    zodiacLabel: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: 4,
    },
    changeText: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: '600',
    },
    zodiacDates: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: COLORS.cardBackground,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '80%',
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text,
    },
    closeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 20,
        color: COLORS.textSecondary,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    signItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginTop: 8,
        backgroundColor: COLORS.background,
    },
    selectedItem: {
        backgroundColor: COLORS.primary + '15',
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    emoji: {
        fontSize: 32,
        marginRight: 16,
    },
    signInfo: {
        flex: 1,
    },
    signLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    signDates: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    checkmark: {
        fontSize: 24,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
});
