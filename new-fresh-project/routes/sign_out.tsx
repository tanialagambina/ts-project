import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function SignOutPage() {
  return (
    <main>
      <h1>Sign out</h1>
      <p>Please don't go :(</p>
    </main>
  );
}