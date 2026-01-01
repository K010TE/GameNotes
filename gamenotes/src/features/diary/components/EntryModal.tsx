import { useEffect, useMemo, useState } from "react";
import {
    Alert,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
import type { EntryInput } from "../model/entry.types";

type Props = {
    visible: boolean;
    onClose: () => void;
    onSubmit: (data: EntryInput) => void;
};

export default function EntryModal({ visible, onClose, onSubmit }: Props) {
    const [nomeDoJogo, setNomeDoJogo] = useState("");
    const [nota, setNota] = useState("8"); // string para TextInput
    const [criticaCurta, setCriticaCurta] = useState("");
    const [publico, setPublico] = useState(false);

    // quando abrir, resetar o form
    useEffect(() => {
        if (!visible) return;
        setNomeDoJogo("");
        setNota("8");
        setCriticaCurta("");
        setPublico(false);
    }, [visible]);

    const criticaLen = criticaCurta.trim().length;

    const canSave = useMemo(() => {
        return nomeDoJogo.trim().length > 0;
    }, [nomeDoJogo]);

    function save() {
        const nome = nomeDoJogo.trim();
        const critica = criticaCurta.trim();
        const notaNum = Number(nota);

        if (!nome) {
            Alert.alert("Falta o nome", "Digite o nome do jogo.");
            return;
        };

        if (Number.isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
            Alert.alert("Nota inválida", "A nota precisa estar entre 0 e 10.");
            return;
        }

        onSubmit({
            nomeDoJogo: nome,
            nota: Math.round(notaNum),
            criticaCurta: critica ? critica : undefined,
            publico,
        });

        onClose();
    }

    return (
        <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Novo registro</Text>
                    <Pressable onPress={onClose}>
                        <Text style={styles.link}>Fechar</Text>
                    </Pressable>
                </View>

                <ScrollView contentContainerStyle={styles.body}>
                    <Text style={styles.label}>Nome do jogo *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Hades"
                        value={nomeDoJogo}
                        onChangeText={setNomeDoJogo}
                    />

                    <Text style={styles.label}>Nota (0–10)</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="8"
                        value={nota}
                        onChangeText={setNota}
                    />

                    <Text style={styles.label}>Crítica curta (opcional)</Text>
                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        multiline
                        placeholder="O que você sentiu/julgou do jogo…"
                        value={criticaCurta}
                        onChangeText={setCriticaCurta}
                    />

                    <Text style={styles.counter}>{criticaLen}</Text>

                    <View style={styles.row}>
                        <Text style={styles.label}>Tornar público</Text>
                        <Switch value={publico} onValueChange={setPublico} />
                    </View>

                    <Pressable
                        style={[styles.saveBtn, !canSave && { opacity: 0.5 }]}
                        onPress={save}
                        disabled={!canSave}
                    >
                        <Text style={styles.saveBtnText}>Salvar</Text>
                    </Pressable>

                    <Text style={styles.hint}>
                        Dica: crítica curta é sua “memória rápida”. A completa entra depois.
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: { fontSize: 18, fontWeight: "700" },
    link: { fontSize: 16 },

    body: { padding: 16, gap: 10 },
    label: { fontSize: 13, fontWeight: "600", opacity: 0.8 },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
    },

    counter: { opacity: 0.6, fontSize: 12, marginTop: -6 },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },

    saveBtn: {
        marginTop: 10,
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: "#111",
    },
    saveBtnText: { textAlign: "center", fontSize: 16, fontWeight: "700" },

    hint: { opacity: 0.7, marginTop: 6 },
});
