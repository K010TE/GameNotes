import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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