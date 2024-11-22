<template>
  <div class="app-container">
    <header>
      <h1>Cliente API REST</h1>
    </header>

    <main>
      <!-- Operaciones de Clase Storage -->
      <section class="operation-section">
        <h2>Operaciones /api/hello</h2>
        <div class="button-group">
          <button @click="getHello">GET /api/hello</button>
          <button @click="getHelloFile">GET /api/hello/{filename}</button>
          <button @click="postHello">POST /api/hello</button>
          <button @click="putHello">PUT /api/hello/{filename}</button>
          <button @click="deleteHello">DELETE /api/hello/{filename}</button>
        </div>
      </section>

      <!-- Operaciones con JSON -->
      <section class="operation-section">
        <h2>Operaciones /api/json</h2>
        <div class="button-group">
          <button @click="getJson">GET /api/json</button>
          <button @click="getJsonFile">GET /api/json/{filename}</button>
          <button @click="postJson">POST /api/json</button>
          <button @click="putJsonFile">PUT /api/json/{filename}</button>
          <button @click="deleteJsonFile">DELETE /api/json/{filename}</button>
        </div>
      </section>

      <!-- Operaciones con CSV -->
      <section class="operation-section">
        <h2>Operaciones /api/csv</h2>
        <div class="button-group">
          <button @click="getCsv">GET /api/csv</button>
          <button @click="getCsvFile">GET /api/csv/{filename}</button>
          <button @click="postCsv">POST /api/csv</button>
          <button @click="putCsvFile">PUT /api/csv/{filename}</button>
          <button @click="deleteCsvFile">DELETE /api/csv/{filename}</button>
        </div>
      </section>

      <!-- Mostrar respuesta -->
      <section class="response-section">
        <h2>Respuesta</h2>
        <pre>{{ response }}</pre>
      </section>
    </main>

    <footer>
      <p>Cliente API REST desarrollado con Vue.js</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      response: "", // Para mostrar la respuesta de la API
    };
  },
  methods: {
    async getHello() {
      const res = await axios.get("http://localhost:3000/api/hello");
      this.response = res.data;
    },
    async getHelloFile() {
      const res = await axios.get("http://localhost:3000/api/hello/archivo1");
      this.response = res.data;
    },
    async postHello() {
      const res = await axios.post("http://localhost:3000/api/hello", {
        nombre: "archivo1",
      });
      this.response = res.data;
    },
    async putHello() {
      const res = await axios.put("http://localhost:3000/api/hello/archivo1", {
        contenido: "nuevo contenido",
      });
      this.response = res.data;
    },
    async deleteHello() {
      const res = await axios.delete("http://localhost:3000/api/hello/archivo1");
      this.response = res.data;
    },
    async getJson() {
      const res = await axios.get("http://localhost:3000/api/json");
      this.response = res.data;
    },
    async getJsonFile() {
      const res = await axios.get("http://localhost:3000/api/json/archivo.json");
      this.response = res.data;
    },
    async postJson() {
      const res = await axios.post("http://localhost:3000/api/json", {
        nombre: "archivo.json",
        contenido: {},
      });
      this.response = res.data;
    },
    async putJsonFile() {
      const res = await axios.put("http://localhost:3000/api/json/archivo.json", {
        contenido: { clave: "nuevo valor" },
      });
      this.response = res.data;
    },
    async deleteJsonFile() {
      const res = await axios.delete("http://localhost:3000/api/json/archivo.json");
      this.response = res.data;
    },
    async getCsv() {
      const res = await axios.get("http://localhost:3000/api/csv");
      this.response = res.data;
    },
    async getCsvFile() {
      const res = await axios.get("http://localhost:3000/api/csv/archivo.csv");
      this.response = res.data;
    },
    async postCsv() {
      const res = await axios.post("http://localhost:3000/api/csv", {
        nombre: "archivo.csv",
        contenido: "dato1,dato2",
      });
      this.response = res.data;
    },
    async putCsvFile() {
      const res = await axios.put("http://localhost:3000/api/csv/archivo.csv", {
        contenido: "dato1 actualizado,dato2 actualizado",
      });
      this.response = res.data;
    },
    async deleteCsvFile() {
      const res = await axios.delete("http://localhost:3000/api/csv/archivo.csv");
      this.response = res.data;
    },
  },
};
</script>
