# Playwright MCP Server

A starter workspace for a Node.js + TypeScript project designed for `@modelcontextprotocol/server-playwright` and Playwright.

> Note: `@modelcontextprotocol/server-playwright` is not currently available on the public npm registry. This workspace includes a local stub implementation so you can install dependencies and start developing.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npm run playwright:install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Notes

- `src/server.ts` contains a starter server entrypoint.
- Adjust the imported API in `src/server.ts` if the actual package export differs.
