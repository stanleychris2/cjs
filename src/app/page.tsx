import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="w-full max-w-2xl mx-auto p-8">
        <header className="flex justify-between items-center py-8">
          <h1 className="text-2xl font-bold">Chris Stanley</h1>
          <nav className="flex space-x-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/writing" className="hover:underline">Writing</Link>
          </nav>
        </header>

        <main className="space-y-16">
          <section id="about">
            <p className="mt-4 text-lg">
              I'm based in San Francisco and am currently the founder of an AI startup, Patterns, building deep research agents for private equity investing.
            </p>
            <div className="space-y-4 text-gray-600 mt-4">
              <p>
                Before Patterns I founded a marketplace, Scope, (<a href="https://www.scopeinc.com/blog/announcing-our-2-25m-series-seed" target="_blank" rel="noopener noreferrer" className="underline">link</a>) and was an early employee at fintech Cover (<a href="https://techcrunch.com/2018/10/02/cover-insurance/" target="_blank" rel="noopener noreferrer" className="underline">link</a>) startups. In 2016, I joined the business operations team at Square (nee Block) to help scale risk and fraud detection systems, and in 2011 I started my career as a sell-side investment banker at Nomura Securities, covering hedge funds for fixed income products.
              </p>
              <p>
                I went to Yale where I doubled majored in economics and psychology, and started on the varsity football and track and field teams - <a href="https://www.nhregister.com/news/article/YALE-Despite-his-track-record-Stanley-s-a-11605894.php" target="_blank" rel="noopener noreferrer" className="underline">link</a>
              </p>
            </div>
          </section>

          <section id="thinking">
            <h3 className="text-2xl font-bold mb-4">Top of mind</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>The future of software development, startups, and IP (wip)</li>
              <li>Building differentiated AI products, selling, and competing with BigTech (wip)</li>
              <li>Tools of leverage in 2025, Capital vs. Software (wip)</li>
              <li><Link href="/writing/ai-in-private-equity" className="underline">The End of Software Scarcity: How AI Is Reshaping Private Equity</Link></li>
              <li>Patterns, from data orchestration to private market investing (link)</li>
            </ul>
          </section>

          <section id="projects">
            <h3 className="text-2xl font-bold mb-4">Projects & Content</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">The UpTrade</h4>
                <p className="text-gray-600">In 2014 I taught myself how to code and build "Reddit for Finance" before r/wallstreetbets was a thing. <a href="https://github.com/stanleychris2/theuptrade" target="_blank" rel="noopener noreferrer" className="underline">See on GitHub</a>.</p>
              </div>
              <div>
                <h4 className="font-bold">FurnishUp</h4>
                <p className="text-gray-600">My first startup, FurnishUp is an online platform for visualizing and arranging furniture in a virtual 3D interior space. Open-sourced as <a href="https://github.com/furnishup/blueprint3d" target="_blank" rel="noopener noreferrer" className="underline">Blueprint3D</a>.</p>
              </div>
              <div>
                <h4 className="font-bold">Tour de Fox</h4>
                <p className="text-gray-600">In 3 months we traveled to all 48 contiguous states where we climbed to the highest point in every state, cycled between the base of the mountains, held over 30 fundraising events, and raised over $2mm. The project lives on an an annual fundraiser for the Michael J. Fox foundation. <a href="https://www.youtube.com/@tourdefox2126" target="_blank" rel="noopener noreferrer" className="underline">Watch on YouTube</a></p>
              </div>
            </div>
          </section>
          
          <section id="writing">
            <h3 className="text-2xl font-bold mb-4">Writing</h3>
            <div className="space-y-2">
                <Link href="/writing/ai-in-private-equity" className="block hover:underline">The End of Software Scarcity: How AI Is Reshaping Private Equity</Link>
            </div>
          </section>

          <section id="reading">
            <h3 className="text-2xl font-bold mb-4">Reading and Listening</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><a href="https://www.citriniresearch.com/" target="_blank" rel="noopener noreferrer" className="underline">Citrini</a></li>
              <li><a href="https://stratechery.com/" target="_blank" rel="noopener noreferrer" className="underline">Stratechery</a></li>
              <li><a href="https://www.bloomberg.com/account/newsletters/money-stuff" target="_blank" rel="noopener noreferrer" className="underline">Money Stuff</a></li>
              <li><a href="https://www.astralcodexten.com/" target="_blank" rel="noopener noreferrer" className="underline">Astral Codex 10</a></li>
              <li><a href="https://www.thealgorithmicbridge.com/" target="_blank" rel="noopener noreferrer" className="underline">The Algorithmic Bridge</a></li>
              <li><a href="https://cloudedjudgement.substack.com/" target="_blank" rel="noopener noreferrer" className="underline">Clouded Judgement</a></li>
              <li><a href="https://www.fabricatedknowledge.com/" target="_blank" rel="noopener noreferrer" className="underline">Fabricated Knowledge</a></li>
            </ul>
          </section>
        </main>

        <footer className="text-center py-16 text-gray-500">
          <p>&copy; 2024 Chris Stanley</p>
        </footer>
      </div>
    </div>
  );
}
