import { Text, View } from "react-native";
import type { Entry } from "../../model/entry.types";
import { styles } from "./styles";

type Props = { entry: Entry };

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
