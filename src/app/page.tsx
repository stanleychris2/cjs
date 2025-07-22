import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="w-full max-w-2xl mx-auto p-8">
        <header className="flex justify-between items-center py-8">
          <h1 className="text-2xl font-bold">Chris Stanley</h1>
          <nav>
            <Link href="/resume" className="hover:underline">Resume</Link>
          </nav>
        </header>

        <main className="space-y-16">
          <section id="about">
            <p className="mt-4 text-lg">
              I&apos;m based in San Francisco and am currently the founder of an AI startup, <a href="https://patterns.app/" target="_blank" rel="noopener noreferrer" className="underline">Patterns</a>, building research agents for private equity investing.
            </p>
            <div className="space-y-4 text-gray-600 mt-4">
              <p>
                Before Patterns I founded a marketplace, <a href="https://www.scopeinc.com/blog/announcing-our-2-25m-series-seed" target="_blank" rel="noopener noreferrer" className="underline">Scope</a> and was an early employee at fintech <a href="https://techcrunch.com/2018/10/02/cover-insurance/" target="_blank" rel="noopener noreferrer" className="underline">Cover</a>. In 2016, I joined the business operations team at Square (<a href="http://block.xyz/" target="_blank" rel="noopener noreferrer" className="underline">Block</a>) to help scale risk and fraud detection systems, and in 2011 I started my career as a sell-side investment banker at Nomura Securities, covering hedge funds for fixed income products.
              </p>
              <p>
                I went to Yale where I majored in economics and psychology, and started on the varsity football and track and field teams. 
              </p>
              <p>
                I write to explore my ideas and meet interesting people. Connect with me on <a href="https://www.linkedin.com/in/chris-stanley/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a> or email me at <a href="mailto:chris@patterns.app" className="underline">chris@patterns.app</a>.
              </p>
            </div>
          </section>

          <section id="thinking">
            <h3 className="text-2xl font-bold mb-4">Top of mind</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><Link href="/writing/software-startups-ip" className="underline">On Software, Startups, and IP in 2025</Link></li>
              <li><Link href="/writing/differentiated-ai-products-2025" className="underline">Building differentiated AI products in 2025</Link></li>
              <li><Link href="/writing/ai-in-private-equity" className="underline">On AI, Software Scarcity, and Private Equity</Link></li>
              <li>Patterns, from data orchestration to private market investing(wip)</li>
            </ul>
          </section>

          <section id="projects">
            <h3 className="text-2xl font-bold mb-4">Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">The UpTrade</h4>
                <p className="text-gray-600">In 2014 I taught myself how to code and build &quot;Reddit for Finance&quot; before r/wallstreetbets was a thing. <a href="https://github.com/stanleychris2/theuptrade" target="_blank" rel="noopener noreferrer" className="underline">See on GitHub</a>.</p>
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
                <Link href="/writing/differentiated-ai-products-2025" className="block hover:underline">Building Differentiated AI Products in 2025</Link>
                <Link href="/writing/software-startups-ip" className="block hover:underline">On Software, Startups, and IP in 2025 </Link>
                <Link href="/writing/ai-in-private-equity" className="block hover:underline">On AI, Software Scarcity, and Private Equity</Link>
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

        
      </div>
    </div>
  );
}
