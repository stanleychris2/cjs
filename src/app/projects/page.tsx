import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="w-full max-w-2xl mx-auto p-8">
        <header className="py-8">
          <Link href="/" className="hover:underline">&larr; Back to home</Link>
        </header>
        <main className="space-y-8">
          <h1 className="text-4xl font-bold">Projects & Content</h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">The UpTrade</h2>
              <p className="text-gray-600 mt-2">In 2014 I taught myself how to code and build "Reddit for Finance" before r/wallstreetbets was a thing. <a href="https://github.com/stanleychris2/theuptrade" target="_blank" rel="noopener noreferrer" className="underline">See on GitHub</a>.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">FurnishUp</h2>
              <p className="text-gray-600 mt-2">My first startup, FurnishUp is an online platform for visualizing and arranging furniture in a virtual 3D interior space. Open-sourced as <a href="https://github.com/furnishup/blueprint3d" target="_blank" rel="noopener noreferrer" className="underline">Blueprint3D</a>.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Tour de Fox</h2>
              <p className="text-gray-600 mt-2">In 3 months we traveled to all 48 contiguous states where we climbed to the highest point in every state, cycled between the base of the mountains, held over 30 fundraising events, and raised over $2mm. The project lives on an an annual fundraiser for the Michael J. Fox foundation. <a href="https://www.youtube.com/@tourdefox2126" target="_blank" rel="noopener noreferrer" className="underline">Watch on YouTube</a></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 