
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/styles/commonStyles";
import { IconSymbol } from "@/components/IconSymbol";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SettingsScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date(new Date().getFullYear(), 11, 25));

  const handleDateChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      console.log('Date changed to:', date);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleResetToChristmas = () => {
    const christmas = new Date(new Date().getFullYear(), 11, 25);
    setSelectedDate(christmas);
    console.log('Reset to Christmas');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Settings",
          headerLargeTitle: true,
        }}
      />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.header}>
            <IconSymbol 
              ios_icon_name="gear" 
              android_material_icon_name="settings" 
              size={48} 
              color={colors.primary} 
            />
            <Text style={styles.headerSubtitle}>Customize your holiday countdown</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Holiday Date</Text>
            
            <View style={styles.dateCard}>
              <View style={styles.dateHeader}>
                <IconSymbol 
                  ios_icon_name="calendar" 
                  android_material_icon_name="calendar-today" 
                  size={24} 
                  color={colors.primary} 
                />
                <View style={styles.dateTextContainer}>
                  <Text style={styles.dateLabel}>Selected Date</Text>
                  <Text style={styles.dateValue}>{formatDate(selectedDate)}</Text>
                </View>
              </View>

              <View style={styles.datePickerContainer}>
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                  minimumDate={new Date()}
                  textColor={colors.text}
                />
              </View>
            </View>

            <TouchableOpacity 
              style={styles.resetButton}
              onPress={handleResetToChristmas}
            >
              <IconSymbol 
                ios_icon_name="arrow.counterclockwise" 
                android_material_icon_name="refresh" 
                size={20} 
                color={colors.card} 
              />
              <Text style={styles.resetButtonText}>Reset to Christmas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>
                This app helps you count down to your favorite holiday! 
                Set a custom date or use the default Christmas countdown.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>🎄 Holiday Countdown v1.0 🎄</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 20,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  dateCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(167, 114, 125, 0.2)',
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  dateTextContainer: {
    gap: 4,
  },
  dateLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  dateValue: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  datePickerContainer: {
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    boxShadow: '0px 2px 8px rgba(167, 114, 125, 0.3)',
    elevation: 4,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.card,
  },
  infoCard: {
    backgroundColor: colors.highlight,
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(198, 180, 206, 0.2)',
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
});
