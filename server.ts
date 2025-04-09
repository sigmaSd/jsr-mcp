import { McpServer } from "npm:@modelcontextprotocol/sdk@1.8.0/server/mcp.js";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk@1.8.0/server/stdio.js";
import { z } from "npm:zod@3.24.2";

// Create an MCP server
const server = new McpServer({
  name: "JSR",
  version: "1.0.0",
});

// Add an addition tool
server.tool("jsr_docs", {
  module: z.string().describe("The module to document, example @std/path"),
}, async ({ module }) => {
  const result = await new Deno.Command("deno", {
    args: ["doc", "jsr:" + module],
    env: { NO_COLOR: "1" },
  }).output().then((r) => new TextDecoder().decode(r.stdout));
  return ({
    content: [{ type: "text", text: result }],
  });
});

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
