FROM oven/bun:1.2-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

COPY scripts/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 3000

CMD [ "/entrypoint.sh" ]