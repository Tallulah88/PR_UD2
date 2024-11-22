# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del backend al contenedor
COPY package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto del backend
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
