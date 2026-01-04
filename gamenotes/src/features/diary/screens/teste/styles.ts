import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { color: "#fff", fontSize: 32, fontWeight: "700", marginBottom: 20, textAlign: "center" },
  button: { backgroundColor: "#2563eb", paddingHorizontal: 24, paddingVertical: 10, borderRadius: 8 },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: "#fff", fontWeight: "600" },
});