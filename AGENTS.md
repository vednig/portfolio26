# Agent Guide

## Stack
- Runtime: Bun
- Server: Elysia (`src/index.ts`) + `@elysiajs/static` + `@elysiajs/openapi`
- Client: React (`public/*.tsx`) served from `public/`
- Styling: Tailwind CSS v4 via `bun-plugin-tailwind` (`bunfig.toml`)

## Common commands
- Install deps: `bun install`
- Dev server (watch): `bun run dev` (open `http://localhost:3000/`)
- Build server binary: `bun run build` (outputs `./server`)

## Key paths
- Server entrypoint: `src/index.ts`
- Client entrypoint: `public/index.html` -> `public/index.tsx`
- Typed API client: `public/libs/api.ts` (Eden `treaty` using `@server` types)
- Shared client code: `src/lib/*`, `src/hooks/*` (imported by the React app)
- Alternate demo page: `public/other/*` (includes a React Query API call)

## API / OpenAPI
- Example route: `GET /message`
- OpenAPI UI: `GET /openapi`
- OpenAPI JSON: `GET /openapi/json`

## Conventions
- TypeScript: `strict: true` (`tsconfig.json`)
- Path aliases: `@server`, `@server/*`, `@public/*`
- Formatting: `.prettierrc` (tabs, 4 width, no semicolons, single quotes)
- Dependencies/lockfiles: prefer Bun (`bun.lock`); avoid adding/committing `package-lock.json`.

## Notes
- No automated test suite is configured (`npm test` exits with an error).
- `node_modules/` and the built `server` binary are gitignored; don’t commit them.
