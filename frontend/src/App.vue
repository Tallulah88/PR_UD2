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
          <button @click="postJson">POST /api/json</button>
        </div>
      </section>

      <!-- Operaciones con CSV -->
      <section class="operation-section">
        <h2>Operaciones /api/csv</h2>
        <div class="button-group">
          <button @click="getCsv">GET /api/csv</button>
          <button @click="postCsv">POST /api/csv</button>
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
    async postJson() {
      const res = await axios.post("http://localhost:3000/api/json", {
        nombre: "archivo.json",
        contenido: {},
      });
      this.response = res.data;
    },
    async getCsv() {
      const res = await axios.get("http://localhost:3000/api/csv");
      this.response = res.data;
    },
    async postCsv() {
      const res = await axios.post("http://localhost:3000/api/csv", {
        nombre: "archivo.csv",
        contenido: "dato1,dato2",
      });
      this.response = res.data;
    },
  },
};
</script>

<style>
/* General container styles */
.app-container {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Header styles */
header {
  text-align: center;
  margin-bottom: 20px;
}
header h1 {
  font-size: 2rem;
  color: #333;
}

/* Section styles */
.operation-section {
  margin-bottom: 20px;
}
.operation-section h2 {
  font-size: 1.5rem;
  color: #555;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

/* Button group styles */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}

/* Response section */
.response-section h2 {
  font-size: 1.5rem;
  color: #555;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
pre {
  background: #f4f4f4;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-x: auto;
  max-height: 200px;
}

/* Footer styles */
footer {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #777;
}
</style>