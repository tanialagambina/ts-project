import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function ServicesPage() {
  return (
    <main>
      <h1>Services</h1>
      <p>This is the services page.</p>
    </main>
  );
}