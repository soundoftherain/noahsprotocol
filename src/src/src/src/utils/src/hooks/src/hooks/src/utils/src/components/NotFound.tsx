import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center text-white bg-black">
      <h1 className="text-5xl font-bold mb-4">Ark coordinate not found</h1>
      <p className="text-lg mb-6">
        The path you tried to reach drifts beyond the mapped Noah’s Ark universe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
