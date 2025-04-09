# JSR-MCP Server

A Model Context Protocol (MCP) server that provides access to JSR (JavaScript Registry) module documentation.

## Overview

This server provides an MCP interface for retrieving documentation for JSR modules. It uses Deno's document API to fetch and serve module documentation on request.

## Features

- Simple MCP-based interface for JSR module documentation
- Exposes a single tool: `jsr_docs` for retrieving module documentation

## Tools

### jsr_docs

Allows clients to request documentation for any JSR module.

**Parameters:**

- `module` (string): The name of the JSR module to document (e.g., `@std/path`)

**Returns:**

- Documentation for the specified module in plain text format

## Usage

```bash
# Run the server with all required permissions
deno run -A server.ts
```

# Exmaple

Here is an example chat with Zed using this mcp Server


## License

[MIT](LICENSE)
