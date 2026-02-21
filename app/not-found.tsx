import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-black mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-inter mb-8">
          Page not found
        </p>
        <p className="text-gray-500 font-inter mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent-orange text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
