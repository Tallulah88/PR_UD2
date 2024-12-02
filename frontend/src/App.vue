<template>
  <div class="app-container">
    <header>
      <h1>Cliente API REST</h1>
    </header>

    <main>
      <!-- HELLO Section -->
      <section class="operation-section">
        <h2>Operaciones /api/hello</h2>
        <div class="button-group">
          <button @click="fetchHelloAll">GET /api/hello</button>
          <button @click="fetchHelloOne">GET /api/hello/{filename}</button>
          <button @click="createHello">POST /api/hello</button>
          <button @click="updateHello">PUT /api/hello/{filename}</button>
          <button @click="deleteHello">DELETE /api/hello/{filename}</button>
        </div>
      </section>

      <!-- JSON Section -->
      <section class="operation-section">
        <h2>Operaciones /api/json</h2>
        <div class="button-group">
          <button @click="fetchJsonAll">GET /api/json</button>
          <button @click="fetchJsonOne">GET /api/json/{filename}</button>
          <button @click="createJson">POST /api/json</button>
          <button @click="updateJson">PUT /api/json/{filename}</button>
          <button @click="deleteJson">DELETE /api/json/{filename}</button>
        </div>
      </section>

      <!-- CSV Section -->
      <section class="operation-section">
        <h2>Operaciones /api/csv</h2>
        <div class="button-group">
          <button @click="fetchCsvAll">GET /api/csv</button>
          <button @click="fetchCsvOne">GET /api/csv/{filename}</button>
          <button @click="createCsv">POST /api/csv</button>
          <button @click="updateCsv">PUT /api/csv/{filename}</button>
          <button @click="deleteCsv">DELETE /api/csv/{filename}</button>
        </div>
      </section>

      <!-- Inputs -->
      <section class="input-section">
        <h3>Parámetros</h3>
        <input v-model="filename" placeholder="Nombre del archivo (filename)" />
        <textarea v-model="content" placeholder="Contenido (content)"></textarea>
      </section>

      <!-- Response -->
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
      filename: "",
      content: "",
      response: null,
    };
  },
  methods: {
    async makeRequest(method, url, data = {}) {
      try {
        const res = await axios({
          method,
          url: `http://localhost:8000${url}`,
          data,
          headers: { "Content-Type": "application/json" },
        });
        this.response = res.data;
      } catch (error) {
        this.response = error.response?.data || error.message;
      }
    },

    // HELLO Methods
    fetchHelloAll() {
      this.makeRequest("get", "/api/hello");
    },
    fetchHelloOne() {
      this.makeRequest("get", `/api/hello/${this.filename}`);
    },
    createHello() {
      this.makeRequest("post", "/api/hello", {
        filename: this.filename,
        content: this.content,
      });
    },
    updateHello() {
      this.makeRequest("put", `/api/hello/${this.filename}`, {
        content: this.content,
      });
    },
    deleteHello() {
      this.makeRequest("delete", `/api/hello/${this.filename}`);
    },

    // JSON Methods
    fetchJsonAll() {
      this.makeRequest("get", "/api/json");
    },
    fetchJsonOne() {
      this.makeRequest("get", `/api/json/${this.filename}`);
    },
    createJson() {
      this.makeRequest("post", "/api/json", {
        filename: this.filename,
        content: this.content,
      });
    },
    updateJson() {
      this.makeRequest("put", `/api/json/${this.filename}`, {
        content: this.content,
      });
    },
    deleteJson() {
      this.makeRequest("delete", `/api/json/${this.filename}`);
    },

    // CSV Methods
    fetchCsvAll() {
      this.makeRequest("get", "/api/csv");
    },
    fetchCsvOne() {
      this.makeRequest("get", `/api/csv/${this.filename}`);
    },
    createCsv() {
      this.makeRequest("post", "/api/csv", {
        filename: this.filename,
        content: this.content,
      });
    },
    updateCsv() {
      this.makeRequest("put", `/api/csv/${this.filename}`, {
        content: this.content,
      });
    },
    deleteCsv() {
      this.makeRequest("delete", `/api/csv/${this.filename}`);
    },
  },
};
</script>

<style>
/* General container styles */
.app-container {
  font-family: "Roboto", Arial, sans-serif;
  margin: 0 auto;
  max-width: 1366px; /* Aumentado para mayor anchura */
  padding: 30px; /* Más espacio interno */
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Más prominente */
}

/* Header styles */
header {
  text-align: center;
  margin-bottom: 40px;
}
header h1 {
  font-size: 3rem; /* Más grande para impacto */
  color: #4a4a4a;
}

/* Section styles */
.operation-section {
  margin-bottom: 40px;
  padding: 25px;
  background-color: #f8f8f8;
  border-radius: 10px;
  border: 1px solid #ddd;
}
.operation-section h2 {
  font-size: 2rem; /* Más destacable */
  color: #333;
  border-bottom: 3px solid #007bff;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

/* Input section */
.input-section {
  margin-bottom: 40px;
}
input,
textarea {
  display: block;
  width: 100%;
  margin: 15px 0;
  padding: 12px; /* Mayor comodidad */
  border: 1px solid #ccc;
  border-radius: 6px; /* Más suavidad */
}

/* Button group styles */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 25px; /* Más amplios */
  font-size: 1.1rem; /* Más grandes */
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
}
button:hover {
  background-color: #0056b3;
  transform: scale(1.07); /* Más llamativo */
}
button:active {
  background-color: #003f7f;
}

/* Response section */
.response-section {
  padding: 25px;
  background-color: #eef6ff;
  border-radius: 10px;
  border: 1px solid #b3d4fc;
  margin-top: 25px;
}
.response-section h2 {
  font-size: 2rem;
  color: #004085;
  padding-bottom: 8px;
  margin-bottom: 15px;
}
pre {
  background: #f4f4f4;
  padding: 20px; /* Más espacioso */
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem; /* Más legible */
  max-height: 400px;
  overflow-y: auto;
}

/* Footer styles */
footer {
  text-align: center;
  margin-top: 40px;
  font-size: 1rem;
  color: #666;
}

/* Responsive design */
@media (max-width: 1366px) {
  button {
    width: 100%;
  }
  .button-group {
    gap: 15px;
    flex-direction: column;
  }
}
</style>
