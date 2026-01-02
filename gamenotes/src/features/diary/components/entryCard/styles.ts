import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: "#eee", borderRadius: 10, padding: 12, gap: 8 },
  title: { fontSize: 16, fontWeight: "700" },
  meta: { opacity: 0.7 },
  body: { fontSize: 14, opacity: 0.85 },
  bodyEmpty: { fontSize: 14, opacity: 0.55, fontStyle: "italic" },
});
