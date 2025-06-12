import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export interface IRecord {
  label?: string
  type: 'LDAP' | 'Локальная'
  login: string
  password: string
}

export const useRecordStore = defineStore('record', () => {
  // STATE
  const records = ref<IRecord[]>([
    {
      label: 'XXXX',
      type: 'LDAP',
      login: 'admin',
      password: 'admin',
    },
    {
      type: 'Локальная',
      login: 'admin',
      password: 'admin',
    },
    {
      type: 'Локальная',
      login: 'admin',
      password: 'admin',
    },
  ])

  // GETTERS
  const getRecords = computed(() => records.value)

  return { records, getRecords }
})
