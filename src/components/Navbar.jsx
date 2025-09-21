export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-2xl font-bold italic">The Bunion</a>
        <div className="space-x-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/standards" className="hover:underline">Standards</a>
        </div>
      </div>
    </nav>
  )
}