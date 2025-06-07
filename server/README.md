## Tracer API

### Installation

Clone this repository on your local machine:

```sh
git clone git@github.com:rruiz204/poc-tracer-mvp.git
```

Navigate to the project directory and pull up the Docker containers:

```sh
docker compose up -d
```

Install the api dependencies:

```sh
cd ./server
bun install
```

Execute database migrations:

```sh
bun run prisma:migrate
```

Run the seeders to load initial data:

```sh
bun run prisma:seed
```

Start the application in development mode:

```sh
bun run dev
```

### Commands

| Topic   | Command                      | Description                            |
| ------- | ---------------------------- | -------------------------------------- |
| Prisma  | `bun run prisma:seed`        | runs the seeders                       |
| Prisma  | `bun run prisma:studio`      | opens prisma studio in your browser    |
| Prisma  | `bun run prisma:generate`    | generates prisma client with typing    |
| Prisma  | `bun run prisma:migrate`     | runs prisma migrations in the database |
| Vitest  | `bun run test:unit:simple`   | runs unit tests in the terminal        |
| Vitest  | `bun run test:unit:coverage` | runs unit test with coverage report    |
| Express | `bun run dev`                | runs api in development mode           |
| Express | `bun run prod`               | runs api in production mode            |
