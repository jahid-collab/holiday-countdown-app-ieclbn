
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, ImageBackground } from "react-native";
import { colors } from "@/styles/commonStyles";

export default function HomeScreen() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      
      // Set Christmas date for 2025
      const christmas = new Date(2025, 11, 25, 0, 0, 0);

      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={[styles.container, Platform.OS === 'android' && styles.androidContainer]}>
          <Text style={styles.title}>🎄 Christmas Countdown 2025 🎄</Text>
          
          <View style={styles.countdownContainer}>
            <View style={styles.timeBlock}>
              <View style={styles.timeCard}>
                <Text style={styles.timeNumber}>{timeRemaining.days}</Text>
              </View>
              <Text style={styles.timeLabel}>Days</Text>
            </View>

            <View style={styles.timeBlock}>
              <View style={styles.timeCard}>
                <Text style={styles.timeNumber}>{timeRemaining.hours}</Text>
              </View>
              <Text style={styles.timeLabel}>Hours</Text>
            </View>

            <View style={styles.timeBlock}>
              <View style={styles.timeCard}>
                <Text style={styles.timeNumber}>{timeRemaining.minutes}</Text>
              </View>
              <Text style={styles.timeLabel}>Minutes</Text>
            </View>

            <View style={styles.timeBlock}>
              <View style={styles.timeCard}>
                <Text style={styles.timeNumber}>{timeRemaining.seconds}</Text>
              </View>
              <Text style={styles.timeLabel}>Seconds</Text>
            </View>
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              {timeRemaining.days > 0 
                ? `Only ${timeRemaining.days} days until Christmas 2025! 🎅`
                : timeRemaining.hours > 0
                ? `Christmas is today! Only ${timeRemaining.hours} hours left! 🎁`
                : 'Merry Christmas! 🎉'}
            </Text>
          </View>

          <View style={styles.decorationContainer}>
            <Text style={styles.decoration}>❄️ ⛄ 🎁 🔔 ⭐</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 255, 0.85)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  androidContainer: {
    paddingTop: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  countdownContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 40,
  },
  timeBlock: {
    alignItems: 'center',
    minWidth: 70,
  },
  timeCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    minWidth: 70,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(167, 114, 125, 0.3)',
    elevation: 6,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  timeNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  messageContainer: {
    backgroundColor: colors.highlight,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    boxShadow: '0px 2px 8px rgba(198, 180, 206, 0.4)',
    elevation: 4,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 26,
  },
  decorationContainer: {
    marginTop: 20,
  },
  decoration: {
    fontSize: 32,
    textAlign: 'center',
    letterSpacing: 8,
  },
});
