import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Tania", "Jonny"];

const NAME_DEFINITIONS: Record<string, string> = {
  "Alice": "Alice is a software engineer from Wonderland.",
  "Bob": "Bob is a builder who can fix anything.",
  "Charlie": "Charlie loves chocolate and adventures.",
  "Dave": "Dave is a designer who loves creating stunning visuals.",
  "Eve": "Eve is a cybersecurity expert.",
  "Frank": "Frank is a financial analyst with a keen eye for details.",
  "Tania": "Tania is a creative writer and storyteller.",
  "Jonny": "Jonny is a musician who plays multiple instruments."
};

interface Data {
  results: { name: string; definition: string }[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query))
      .map((name) => ({ name, definition: NAME_DEFINITIONS[name] }));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class="px-4 py-8 mx-auto bg-[#296e51] min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-white mb-6">Search Results</h1>
        <form action="/search" method="GET" class="w-full max-w-md mb-8">
          <input
            type="text"
            name="q"
            value={query}
            placeholder="Search..."
            class="p-2 border border-gray-300 rounded w-full"
          />
          <button type="submit" class="mt-2 p-2 bg-blue-500 text-white rounded w-full">
            Search
          </button>
        </form>
        {results.length > 0 ? (
          <ul class="w-full">
            {results.map((result) => (
              <li key={result.name} class="p-4 bg-white mb-4 rounded shadow">
                <span class="text-xl font-semibold text-[#296e51]">{result.name}</span>
                <span class="text-yellow-500 ml-2">✨</span>
                <p class="text-gray-700 mt-2">{result.definition}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p class="text-white text-xl mt-4">No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
}
