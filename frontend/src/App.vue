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

<style>
/* General container styles */
.app-container {
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Header styles */
header {
  text-align: center;
  margin-bottom: 30px;
}
header h1 {
  font-size: 2.5rem;
  color: #4a4a4a;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

/* Section styles */
.operation-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.operation-section h2 {
  font-size: 1.8rem;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

/* Button group styles */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
button:active {
  background-color: #003f7f;
}

/* Response section */
.response-section {
  padding: 20px;
  background-color: #eef6ff;
  border-radius: 8px;
  border: 1px solid #b3d4fc;
  margin-top: 20px;
}
.response-section h2 {
  font-size: 1.8rem;
  color: #004085;
  border-bottom: 2px solid #b3d4fc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
pre {
  background: #f4f4f4;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
  max-height: 300px;
  overflow-y: auto;
  color: #333;
}

/* Footer styles */
footer {
  text-align: center;
  margin-top: 30px;
  font-size: 0.9rem;
  color: #666;
}
footer p {
  margin: 0;
  padding: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  button {
    width: 100%;
  }
  .button-group {
    gap: 10px;
    flex-direction: column;
  }
}
</style>
