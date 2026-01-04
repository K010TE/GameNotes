import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PrimaryButton from "@/features/diary/components/ui/primaryButton";
import { styles } from "./styles";

export default function TesteComponent() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Hello World</Text>

        <PrimaryButton title="Teste de Rota" onPress={handleButtonClick} />
      </View>
    </SafeAreaView>
  );
}

