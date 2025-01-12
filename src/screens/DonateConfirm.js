import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DonateConfirm({ navigation }) {
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasyonu başlat
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();
      
      
    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
      }, 2000);
  }, [navigation]);

  // Döndürme değerini dönüş açısına çevir
  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1], 
    outputRange: ["0deg", "360deg"], 
  });

  return (
    <View style={styles.container}>
      {/* Animasyonlu İkon */}
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Icon name="check-circle" size={300} color="green" />
      </Animated.View>
      <Text style={styles.text}>Bağış Onaylandı</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
});
