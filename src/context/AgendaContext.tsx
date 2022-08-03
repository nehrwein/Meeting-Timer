import { createContext, useState, useEffect } from "react";
import { AgendaContextType, AgendaContextProviderProps, AgendaItem } from "../@types/agenda";


export const AgendaContext = createContext<AgendaContextType | null>(null);

const AgendaProvider = ({ children }: AgendaContextProviderProps) => {
  const [agenda, setAgenda] = useState<AgendaItem[]>([])

  useEffect(() => {
    const agendaStorage = JSON.parse(localStorage.getItem('agenda') || '');
    if (agendaStorage.length >= 1) {
      setAgenda(agendaStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('agenda', JSON.stringify(agenda));
  }, [agenda])

  const addItem = (item: AgendaItem) => {
    const newItem: AgendaItem = {
      id: Math.random(),
      duration: item.duration,
      subject: item.subject,
      idb: item.idb,
      responsible: item.responsible
    }

    setAgenda([...agenda, newItem])
  }

  const clearList = () => {
    setAgenda([])
  }

  const deleteItem = (id: number) => {
    const filteredAgenda = agenda.filter((item) => item.id !== id)
    setAgenda(filteredAgenda)
  }


  return (
    <AgendaContext.Provider value={{ agenda, addItem, clearList, deleteItem }}>
      {children}
    </AgendaContext.Provider>
  )
}

export default AgendaProvider