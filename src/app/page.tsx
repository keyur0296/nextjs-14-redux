import Counter from "../components/Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        Welcome to <span className="text-blue-600">Redux Toolkit</span> + <span className="text-purple-600">TypeScript</span> + <span className="text-green-600">Next.js</span>
      </h1>
      <Counter />
    </main>
  );
}
