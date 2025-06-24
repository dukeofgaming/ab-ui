# Dockerfile for optimized Storybook and Vitest builds
FROM node:20-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# --- Build Storybook ---
FROM base AS storybook-build
RUN npx storybook build --output-dir storybook-static

# --- Build Vitest cache (optional, for CI speedup) ---
FROM base AS vitest-cache
RUN npx vitest --run --passWithNoTests || true

# --- Final image for running Storybook static server (optional) ---
FROM node:20-slim AS storybook-static
WORKDIR /app
COPY --from=storybook-build /app/storybook-static ./storybook-static
RUN npm install -g serve
CMD ["serve", "-s", "storybook-static", "-l", "6006"]
