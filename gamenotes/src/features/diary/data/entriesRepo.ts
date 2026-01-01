import type { Entry, EntryInput } from "../model/entry.types";

export type EntriesRepo = {
  list: () => Promise<Entry[]>;
  create: (input: EntryInput) => Promise<Entry>;
  remove: (id: string) => Promise<void>;
  update: (id: string, patch: Partial<EntryInput>) => Promise<Entry>;
};

// Implementação inicial: memória (só pra desenvolver)
// Amanhã você troca por SQLite sem mexer na UI.
let store: Entry[] = [];

export const entriesRepo: EntriesRepo = {
  async list() {
    // retorna cópia para evitar mutação acidental
    return [...store];
  },

  async create(input) {
    const created: Entry = {
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      ...input,
    };

    store = [created, ...store];
    return created;
  },

  async remove(id) {
    store = store.filter((e) => e.id !== id);
  },

  async update(id, patch) {
    const idx = store.findIndex((e) => e.id === id);
    if (idx === -1) throw new Error("Entry não encontrado");

    const updated: Entry = { ...store[idx], ...patch };
    store = store.map((e) => (e.id === id ? updated : e));
    return updated;
  },
};
