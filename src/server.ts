import { createServer } from "./mcp-server-playwright.js";

const port = Number(process.env.PORT ?? 3000);

async function main() {
  const server = await createServer({
    port,
    browserOptions: {
      headless: true,
    },
  });

  await server.listen();
  console.log(`Server running at http://localhost:${port}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
