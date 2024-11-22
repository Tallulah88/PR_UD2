# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del frontend al contenedor
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto del frontend
EXPOSE 8080

# Comando para ejecutar el servidor
CMD ["npm", "run", "serve"]
