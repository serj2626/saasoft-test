<script setup lang="ts">
import { useRecordStore } from './stores/record'
import { storeToRefs } from 'pinia'
const store = useRecordStore()

const { records } = storeToRefs(store)
</script>

<template>
  <div class="app">
    <div class="container">
      <div class="app min-vh-100 d-flex flex-column justify-content-center">
        <div class="d-flex flex-row align-items-center gap-3">
          <div class="fw-bold">Учетные записи</div>
          <button type="button" class="btn btn-outline-secondary">+</button>
        </div>

        <table class="table table-striped mt-5">
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
                <select class="form-select form-select-sm" aria-label="Small select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td>{{ record.login }}</td>
              <td>{{ record.password }}</td>
              <td>
                <button class="btn fs-5">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
            <tr class="align-middle">
              <th scope="row">2</th>
              <td>
                <select class="form-select form-select-sm" aria-label="Small select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button class="btn fs-5">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
            <tr class="align-middle">
              <th scope="row">3</th>
              <td>
                <select class="form-select form-select-sm" aria-label="Small select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td>Doe</td>
              <td>@social</td>
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
