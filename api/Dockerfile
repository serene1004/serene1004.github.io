FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* tsconfig.json tsconfig.build.json ./
COPY prisma ./prisma
RUN npm install

COPY src ./src
RUN npx prisma generate && npm run build

FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm install --omit=dev && npx prisma generate

COPY --from=build /app/generated ./generated
COPY --from=build /app/dist ./dist

EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
