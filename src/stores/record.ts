import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export interface IRecord {
  id: number
  label?: string
  type: 'LDAP' | 'Локальная'
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

  // GETTERS
  const getRecords = computed(() => records.value)

  return { records, getRecords }
})
