import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export interface IRecord {
  id: number
  label?: string
  type: string
  login: string
  password: string
}
export const useRecordStore = defineStore('record', () => {
  // STATE
  const records = ref<IRecord[]>([
    {
      id: 1,
      label: 'XXXX',
      type: 'LDAP',
      login: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      type: 'Локальная',
      login: 'admin',
      password: 'admin',
    },
    {
      id: 3,
      type: 'Локальная',
      login: 'admin',
      password: 'admin',
    },
  ])

  // ACTIONS

  const deleteRecord = (id: number) => {
    records.value = records.value.filter((r) => r.id !== id)
  }

  const addRecord = (record: IRecord) => {
    records.value.push(record)
  }

  const getLenght = computed(() => {
    return records.value.length
  })

  // GETTERS
  const getRecords = computed(() => records.value)

  return { records, getRecords, deleteRecord, addRecord, getLenght }
})
