import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EntryModal from "../../components/entryModal";
import EntryCard from "../../components/entryCard";
import { useEntries } from "../../hooks/useEntries";
import type { EntryInput } from "../../model/entry.types";
import { styles } from "./styles";
import PrimaryButton from "@/shared/components/ui/primaryButton";
import { useRouter } from "expo-router";

export default function DiaryScreen() {
  const { entries, loading, addEntry } = useEntries();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  function openNew() {
    setModalOpen(true);
  }

  async function handleSubmit(data: EntryInput) {
    await addEntry(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GameNotes</Text>
        <Text style={styles.subtitle}>Registre o que você jogou e suas críticas.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {loading ? <Text style={{ opacity: 0.7 }}>Carregando…</Text> : null}

        {!loading && entries.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.empty}>Nenhum registro ainda.</Text>
            <Text style={styles.tip}>Toque em “+ Novo” para adicionar o primeiro jogo.</Text>
            <PrimaryButton title="Página Teste" onPress={() => router.push("/teste")} />
          </View>
        ) : (
          entries.map((e) => <EntryCard key={e.id} entry={e} />)
        )}
      </ScrollView>

      <Pressable style={styles.fab} onPress={openNew}>
        <Text style={styles.fabText}>+ Novo</Text>
      </Pressable>

      <EntryModal visible={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} />
    </SafeAreaView>
  );
}


