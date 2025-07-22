"use client";
import Image from "next/image";
import Link from "next/link";

const resume = {
  name: "Chris Stanley",
  summary:
    "A founder with 15+ years of experience at the intersection of data science, finance, and product. Currently building Patterns, an agentic research platform that gives private equity and finance teams a decisive edge by automating market research, financial modeling, and due diligence.",
  about:
    "From design to code to sales, I'm a versatile builder who is most effective at the product level: talking to customers, designing solutions, and working with engineers. In 2022, I was captivated by LLMs and have since shipped multiple AI products at Patterns. I'm driven by the real-world application of AI and building products that integrate it into the fabric of a business. I thrive in small, high-leverage teams pushing the frontier of AI-first business building, from product development to sales and marketing.",
  experience: [
    {
      company: "Patterns",
      logo: "/patterns_data_logo.jpeg",
      title: "Founder",
      dates: "May 2021 - Present",
      location: "San Francisco Bay Area",
      description: [
        "Started Patterns to enable ops teams to build and deploy internal data apps 10x faster via pre-built connectors, a low-code interface, and templated intelligence kits (e.g., ETL pipelines, ML models).",
        "In Nov 2022, pivoted to orchestrating LLM tasks and launched our first product, an agent builder, on HackerNews the same day as ChatGPT's release.",
        "Refined the product to focus on text-to-SQL agents, selling self-service analytics to finance and ops teams.",
        "In 2024, pivoted to private market research, building an advanced research agent with capabilities for web research, python via jupyter notebooks, Excel editing, and database querying.",
      ],
    },
    {
      company: "Scope",
      logo: "/scopeinc_logo.jpeg",
      title: "Co-Founder",
      dates: "Jun 2019 - Mar 2021",
      location: "San Francisco Bay Area",
      description: [
        "Co-founded Scope, an expert network platform that enabled software companies to build and manage expert networks for their products and customers.",
        "Scoped and implemented 100+ software integration solutions for leading providers like Plaid, Square, and Shippo across logistics, revenue operations, and finance.",
      ],
    },
    {
      company: "Cover",
      logo: "/cover__logo.jpeg",
      title: "Data Platform and Ops Lead",
      dates: "Jan 2018 - Feb 2019",
      location: "San Francisco Bay Area",
      description: [
        "As a Founding Data & Ops Engineer (employee #20), I built the company's analytics and data-engineering stack from the ground up, reporting directly to the CEO.",
        "Accelerated a $16M fundraise from Tribe Capital, Social Capital, and YC by automating the financial-model pipeline, providing live metrics for the pitch deck and investor data room.",
        "Served as the primary engineering contact for due-diligence data pulls and KPI validations.",
        "Architected and implemented a company-wide OKR and metrics framework, enabling real-time progress monitoring for Product, Sales, and Growth teams.",
        "Engineered and deployed a modern ELT stack (Fivetran, Snowflake, dbt) and Periscope BI, creating over 30 data models and 100+ curated KPI views.",
        "Shipped a machine-learning service (Python/Scikit-learn) for predictive lead scoring, cutting customer acquisition costs by 18%.",
        "Automated financial forecasting (P&L, cash-flow, LTV) and designed systems to power employee performance reviews and engagement surveys.",
      ],
    },
    {
      company: "Square",
      logo: "/joinsquare_logo.jpeg",
      title: "Data Engineering, Risk and Finance",
      dates: "Jan 2016 - Jan 2018",
      location: "San Francisco Bay Area",
      description: [
        "Modeled the Risk organization's KPI schema and automated metric computation with ELT pipelines (Python, dbt, Airflow), driving board-level reporting and C-suite analysis.",
        "Engineered high-throughput pipelines for third-party data, enriching risk-score features and cutting model latency by 40%.",
        "Built and maintained an operational analytics platform with 20+ ETL jobs, powering 70 Tableau dashboards for daily decision-making across three business units.",
        "Developed the Risk organization's P&L model from warehouse data to enable dynamic scenario analysis and budget tracking.",
        "Implemented a feature store and fraud-prediction pipeline, boosting decision precision by 8 percentage points through A/B testing.",
      ],
    },
    {
      company: "FurnishUp",
      logo: "/furnish_up_logo.png",
      title: "Founder",
      dates: "Jul 2014 - Jan 2016",
      location: "Greater New York City Area",
      description: [
        "Founded FurnishUp, an online platform for visualizing and arranging furniture in a virtual 3D space to enhance customer engagement and simplify purchase decisions.",
        "Open-sourced the core technology as Blueprint3D.",
      ],
    },
    {
      company: "The Michael J. Fox Foundation for Parkinson's Research",
      logo: "/michaeljfoxorg_logo.jpeg",
      title: "Video Producer - Tour de Fox",
      dates: "Jun 2014 - Sep 2014",
      location: "Greater New York City Area",
      description: [
        "Produced video content for Tour de Fox, a nationwide fundraising campaign that raised over $2 million in three months.",
        "Managed logistics, video and still photography, and the production of short films to document a journey across 48 states.",
      ],
    },
    {
      company: "Nomura",
      logo: "/nomura_logo.jpeg",
      title: "Fixed Income Analyst",
      dates: "Jul 2011 - Jul 2014",
      location: "New York, NY",
      description: [
        "As a Fixed Income Sales Associate, I advised hedge funds, asset managers, and banks on investment strategies across a range of fixed-income products.",
        "My product expertise included financial derivatives, futures, options, interest rate swaps, and government bonds in both US and European markets.",
      ],
    },
  ],
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            margin: 0.5in;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
      <div className="bg-white text-black min-h-screen font-sans">
        <div className="w-full max-w-4xl mx-auto p-8">
          <header className="py-8 flex justify-between items-center no-print">
            <Link href="/" className="hover:underline">
              &larr; Back to home
            </Link>
            <button
              onClick={handlePrint}
              className="hover:underline"
            >
              pdf
            </button>
          </header>
          <main className="space-y-12">
            <div>
              <h1 className="text-5xl font-bold">{resume.name}</h1>
              <p className="mt-4 text-lg text-gray-700">{resume.summary}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold border-b pb-2">About</h2>
              <p className="mt-4 text-lg text-gray-700">{resume.about}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold border-b pb-2">Experience</h2>
              <div className="mt-8 space-y-12">
                {resume.experience.map((job, index) => (
                  <div key={index} className="flex space-x-6">
                    <div className="flex-shrink-0">
                      {job.logo ? (
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-md"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold">{job.company}</h3>
                      <p className="text-lg text-gray-600">{job.title}</p>
                      <p className="text-sm text-gray-500">
                        {job.dates} &middot; {job.location}
                      </p>
                      <div className="mt-4 text-gray-700 space-y-2">
                        {Array.isArray(job.description) ? (
                          <ul className="list-disc list-inside space-y-2">
                            {job.description.map((item, i) => {
                              const hnLink =
                                "https://news.ycombinator.com/item?id=33801314";
                              if (item.includes(hnLink)) {
                                const parts = item.split(hnLink);
                                return (
                                  <li key={i}>
                                    {parts[0]}
                                    <a
                                      href={hnLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline"
                                    >
                                      {hnLink}
                                    </a>
                                    {parts[1]}
                                  </li>
                                );
                              }
                              return <li key={i}>{item}</li>;
                            })}
                          </ul>
                        ) : (
                          <p>{job.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// Modify the description for Patterns to handle the link correctly
const patternsJob = resume.experience.find(
  (job) => job.company === "Patterns"
);
if (patternsJob) {
  const hnString = "on HackerNews";
  const fullDescription = (patternsJob.description as string[]).find((d) =>
    d.includes(hnString)
  );

  if (fullDescription) {
    const index = (patternsJob.description as string[]).indexOf(
      fullDescription
    );
    (patternsJob.description as string[])[
      index
    ] = `In Nov 2022, pivoted to orchestrating LLM tasks and launched our first product, an agent builder, on HackerNews the same day as ChatGPT's release.`;
  }
} 