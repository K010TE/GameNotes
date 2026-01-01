import { StyleSheet, Text, View } from "react-native";
import type { Entry } from "../model/entry.types";

type Props = {
  entry: Entry;
};

export default function EntryCard({ entry }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {entry.nomeDoJogo} <Text style={styles.meta}>({entry.nota}/10)</Text> {entry.publico ? "🌍" : "🔒"}
      </Text>

      {entry.criticaCurta ? (
        <Text style={styles.body} numberOfLines={3}>
          {entry.criticaCurta}
        </Text>
      ) : (
        <Text style={styles.bodyEmpty}>Sem crítica curta.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: "#eee", borderRadius: 10, padding: 12, gap: 8 },
  title: { fontSize: 16, fontWeight: "700" },
  meta: { opacity: 0.7 },
  body: { fontSize: 14, opacity: 0.85 },
  bodyEmpty: { fontSize: 14, opacity: 0.55, fontStyle: "italic" },
});
