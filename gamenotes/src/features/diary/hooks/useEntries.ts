import { useEffect, useState } from "react";
import type { Entry, EntryInput } from "../model/entry.types";
import { entriesRepo } from "../data/entriesRepo";

export function useEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const data = await entriesRepo.list();
    setEntries(data);
  }

  useEffect(() => {
    (async () => {
      try {
        await refresh();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function addEntry(input: EntryInput) {
    const created = await entriesRepo.create(input);
    // atualização otimista (rápida) sem precisar dar refresh
    setEntries((prev) => [created, ...prev]);
    return created;
  }

  async function removeEntry(id: string) {
    await entriesRepo.remove(id);
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  return {
    entries,
    loading,
    refresh,
    addEntry,
    removeEntry,
  };
}
