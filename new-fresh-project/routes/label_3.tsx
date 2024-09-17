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
      <h1>Label 3</h1>
      <p>This is the page from the third link of the drop down menu. I guess you've clicked through all the links now!!</p>
    </main>
  );
}