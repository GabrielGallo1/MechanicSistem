# ========================
# ETAPA 1 - BUILD
# ========================
FROM node:20-alpine AS build

WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Build do Vite
RUN npm run build


# ========================
# ETAPA 2 - SERVE (NGINX)
# ========================
FROM nginx:alpine

# Configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Arquivos gerados pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
