# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar y configurar el proyecto
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Exponer el puerto de desarrollo
EXPOSE 5173

# Iniciar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
