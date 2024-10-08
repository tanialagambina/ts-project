import { PageProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <NavBar />
      <Component />
    </div>
  );
}