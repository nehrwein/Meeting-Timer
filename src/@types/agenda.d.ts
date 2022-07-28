import React from "react";

export interface AgendaItem {
  id: number;
  duration: number;
  subject: string;
  idb: string;
  responsible: string;
}

export type AgendaContextType = {
  agenda: AgendaItem[];
  addItem: (item: AgendaItem) => void;
}

export type AgendaContextProviderProps = {
  children: React.ReactNode
}