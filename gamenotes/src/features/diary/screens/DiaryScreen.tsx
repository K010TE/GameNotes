import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import EntryModal from "../components/EntryModal";
import type { Entry, EntryInput } from "../model/entry.types";

export default function DiaryScreen() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    function openNew() {
        setModalOpen(true);
    }

    function addEntry(data: EntryInput) {
        const entry: Entry = {
            id: String(Date.now()),
            createdAt: new Date().toISOString(),
            ...data,
        };

        setEntries((prev) => [entry, ...prev]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GameNotes</Text>
                <Text style={styles.subtitle}>Registre o que você jogou e suas críticas.</Text>
            </View>

            <ScrollView contentContainerStyle={styles.list}>
                {entries.length === 0 ? (
                    <View style={styles.emptyBox}>
                        <Text style={styles.empty}>Nenhum registro ainda.</Text>
                        <Text style={styles.tip}>Toque em “+ Novo” para adicionar o primeiro jogo.</Text>
                    </View>
                ) : (
                    entries.map((e) => (
                        <View key={e.id} style={styles.card}>
                            <Text style={styles.cardTitle}>
                                {e.nomeDoJogo} <Text style={{ opacity: 0.7 }}>({e.nota}/10)</Text> {e.publico ? "🌍" : "🔒"}
                            </Text>
                            {e.criticaCurta ? (
                                <Text style={styles.cardBody} numberOfLines={3}>
                                    {e.criticaCurta}
                                </Text>
                            ) : (
                                <Text style={styles.cardBodyEmpty}>Sem crítica curta.</Text>
                            )}
                        </View>
                    ))
                )}
            </ScrollView>

            <Pressable style={styles.fab} onPress={openNew}>
                <Text style={styles.fabText}>+ Novo</Text>
            </Pressable>

            <EntryModal visible={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addEntry} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    header: { padding: 20, gap: 6 },
    title: { fontSize: 26, fontWeight: "700" },
    subtitle: { fontSize: 14, opacity: 0.7 },

    list: { padding: 20, gap: 12 },
    emptyBox: { alignItems: "center", paddingTop: 60, gap: 8 },
    empty: { fontSize: 16, fontWeight: "600", opacity: 0.8 },
    tip: { fontSize: 13, opacity: 0.6, textAlign: "center" },

    card: { borderWidth: 1, borderColor: "#eee", borderRadius: 10, padding: 12, gap: 8 },
    cardTitle: { fontSize: 16, fontWeight: "700" },
    cardBody: { fontSize: 14, opacity: 0.85 },
    cardBodyEmpty: { fontSize: 14, opacity: 0.6, fontStyle: "italic" },

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
