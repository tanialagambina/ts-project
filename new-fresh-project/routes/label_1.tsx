import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>Label 1</h1>
      <p>This is the page from the first link of the drop down menu. Welcome!</p>
    </main>
  );
}