export type EntryInput = {
    nomeDoJogo: string;
    nota: number; // 0..10
    criticaCurta?: string;
    publico: boolean;
};

export type Entry = EntryInput & {
    id: string;
    createdAt: string; // ISO
};
