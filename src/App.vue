<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRecordStore, type IRecord } from './stores/record'
import { storeToRefs } from 'pinia'
const store = useRecordStore()

const { records, getLenght } = storeToRefs(store)

const newRecord = reactive<IRecord>({
  id: getLenght.value + 1,
  label: '',
  type: '',
  login: '',
  password: '',
})

// const addRecord = () => {
//   records.value.push({
//     id: Date.now(),
//     type: '',
//     login: '',
//     password: '',
//   })
// }
</script>

<template>
  <div class="app bg-body-secondary">
    {{ newRecord }}
    <div class="container">
      <div class="app min-vh-100 d-flex flex-column justify-content-center">
        <div class="d-flex flex-row align-items-center gap-3">
          <div class="fw-bold">Учетные записи</div>
          <button type="button" class="btn btn-outline-secondary">+</button>
        </div>

        <table class="table shadow-sm p-3 mt-5 rounded-5">
          <thead>
            <tr>
              <th scope="col">Метки</th>
              <th scope="col">Тип записи</th>
              <th scope="col">Логин</th>
              <th scope="col">Пароль</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.id" class="align-middle">
              <th scope="row">1</th>
              <td>
                <select
                  v-model="newRecord.type"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="LDAP">LDAP</option>
                  <option value="Локальная">Локальная</option>
                </select>
              </td>
              <td>
                <input v-model="newRecord.login" type="text" class="form-control form-control-md" />
              </td>
              <td>
                <input
                  v-model="newRecord.password"
                  type="password"
                  class="form-control form-control-md"
                />
              </td>
              <td>
                <button class="btn fs-5">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
