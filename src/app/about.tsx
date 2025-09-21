import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          The Bunion is a satirical news publication created by students...
        </p>
      </main>
      <Footer />
    </>
  )
}