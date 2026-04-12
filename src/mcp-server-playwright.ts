type ServerOptions = {
  port: number;
  browserOptions?: {
    headless?: boolean;
  };
};

type ServerInstance = {
  listen: () => Promise<void>;
};

export async function createServer(options: ServerOptions): Promise<ServerInstance> {
  return {
    listen: async () => {
      console.log(
        `Placeholder Playwright MCP server started on port ${options.port}. Replace this stub with the real @modelcontextprotocol/server-playwright implementation.`
      );
    },
  };
}
