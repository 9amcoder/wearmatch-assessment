const TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN as string;

if (!TOKEN) {
  throw new Error("API token is not defined");
}

export default TOKEN;