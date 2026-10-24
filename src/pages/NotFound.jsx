
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-light text-stone-800">
        404
      </h1>

      <p className="mt-4 text-stone-600">
        Sorry, we couldn't find that page.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-full bg-stone-800 px-8 py-3 text-white hover:bg-amber-800"
      >
        Return Home
      </Link>
    </main>
  );
}

export default NotFound;
