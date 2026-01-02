import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 20, gap: 6 },
  title: { fontSize: 26, fontWeight: "700" },
  subtitle: { fontSize: 14, opacity: 0.7 },

  list: { padding: 20, gap: 12 },
  emptyBox: { alignItems: "center", paddingTop: 60, gap: 8 },
  empty: { fontSize: 16, fontWeight: "600", opacity: 0.8 },
  tip: { fontSize: 13, opacity: 0.6, textAlign: "center" },

  fab: {
    position: "absolute",
    right: 16,
    bottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  fabText: { fontSize: 16, fontWeight: "600" },
});