import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";

export default function Home({ navigation }) {
  const video = useRef(null); // Video için referans

  // Video hata kontrolü
  const onError = (error) => {
    console.error("Video error:", error);
  };

  return (
    <View style={styles.container}>
      {/* Video Arkaplan */}
      <Video
        ref={video}
        source={require("../../assets/Winter.mp4")}
        style={styles.backgroundVideo}
        resizeMode="cover"
        isLooping
        shouldPlay
        onError={onError}  // Hata yönetimi
      />
      {/* Opaklık Katmanı */}
      <View style={styles.overlay} />

      {/* Metin ve Buton */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bir Bağış, Bir Umut</Text>
        <Text style={styles.subtitle}>
          İhtiyaç sahiplerine yardım etmek için şimdi bağışta bulunun.
        </Text>
        <TouchableOpacity
          style={styles.buttonEvent}
          onPress={() => navigation.navigate("bağış yap")}
        >
          <Text style={styles.buttonEventText}>Bağışta Bulun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edede9",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  buttonEvent: {
    backgroundColor: "#38b000",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 50,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonEventText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
