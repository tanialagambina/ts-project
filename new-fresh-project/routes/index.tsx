import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Pokemon from "../islands/Pokemon.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#296e51]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to my website</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        <Pokemon />
        <form action="/search" method="GET" class="mt-8 w-full max-w-md">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            class="p-2 border border-gray-300 rounded w-full"
          />
          <button type="submit" class="mt-2 p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
