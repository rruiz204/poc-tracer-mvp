#!/bin/sh
set -e

# Running database migrations...
bun run prisma:migrate:deploy

# Generating Prisma client..
bun run prisma:generate

# Seeding database...
bun run prisma:seed

# Starting application...
exec bun run prod