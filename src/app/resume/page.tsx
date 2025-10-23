"use client";
import Image from "next/image";
import Link from "next/link";

type ResumeContact = {
  location?: string;
  phone?: string;
  email?: string;
  website?: string;
};

type Education = {
  school: string;
  logo?: string;
  degree?: string;
  field?: string;
  dates?: string;
  location?: string;
  papers?: string[];
  coursework?: string[];
  activities?: string[];
};

type Experience = {
  company: string;
  logo?: string;
  title: string;
  dates?: string;
  location?: string;
  description: string[] | string;
};

type Resume = {
  name: string;
  summary: string;
  contact?: ResumeContact;
  about?: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
};

const resume: Resume = {
  name: "Chris Stanley",
  summary:
    "Technical operator and founder with 15 years building intelligent data systems and AI products that automate and augment decision-making. I ship end-to-end across code, design, GTM, and leadership. Focused on driving AI adoption and measurable business impact in the enterprise.",
  contact: {
    location: "San Francisco, CA",
    phone: "(310) 405-4043",
    email: "stanleychris2@gmail.com",
    website: "chrisstanley.xyz",
  },
  about:
    "",
  skills: [
    "Executive leadership: fundraising, planning, investor comms; OKRs, KPI cadence, reporting",
    "Systems architecture: automate manual ops into reliable, auditable workflows for finance, risk, sales",
    "Product management: customer discovery, business case validation, iterative roadmap",
    "Full-stack builder: Python, TypeScript/Node.js, SQL; data pipelines (Airflow, dbt, Snowflake/BigQuery)",
    "Analytics & BI: self-serve dashboards and automated reporting that drive decisions",
    "Applied ML: problem framing, model development/evaluation, safe deployment",
    "LLM/agents: agentic workflows, retrieval, evals, prompt design, custom tools/integrations",
    "Risk & compliance: SOC 2, GDPR; data security, privacy, governance",
  ],
  education: [
    {
      school: "Yale University",
      logo: "/yale.png",
      degree: "B.A.",
      field: "Economics and Psychology",
      dates: "2007 - 2011",
      location: "New Haven, CT",
      papers: [
        "A Risky Paradigm: An Evaluation of Risk and Decision-Making in American Society",
        "Technology and Financial Market Evolution",
        "Economics, Psychology, and Theory: An Analysis of the Historical Relationship Between Economics and Psychology",
      ],
      coursework: ["Statistics", "Psychology", "Game Theory"],
      activities: [
        "Berkeley College (Residential College); Varsity Football (Cornerback); Varsity Track & Field (100m, 200m, 4x100, 4x400); DMR school record holder",
      ],
    },
    {
      school: "Loyola High School, Los Angeles",
      logo: "/loyola.png",
      degree: "High School Diploma",
      field: "",
      dates: "2003 - 2007",
      location: "Los Angeles, CA",
    },
  ],
  experience: [
    {
      company: "Patterns",
      logo: "/patterns.png",
      title: "Founder",
      dates: "2021 - Present",
      location: "San Francisco Bay Area",
      description: [
        "Raised $6M and built a low-code AI data automation and insights platform for revenue & finance teams; led a 6-engineer team end-to-end (architecture, UX, delivery).",
        "Shipped an agentic data/LLM platform: connectors, python/SQL DAG orchestration infrastructure and low-code UI, text-to-SQL agents, LLM powered data reconciliation agents, and solo-dev on most recent finance/research agent for investment banking and PE (web research, Jupyter/Python, Excel, powerpoint, and database querying).",
        "Launched the first agent builder on HackerNews (https://news.ycombinator.com/item?id=33801314) the day ChatGPT released; iterated with enterprise design partners.",
        "Owned product, GTM and sales; generated $500k+ lifetime revenue with customers including Crunchbase.",
      ],
    },
    {
      company: "Scope",
      logo: "/scopeinc_logo.jpeg",
      title: "Founder",
      dates: "2018 - 2020",
      location: "San Francisco Bay Area",
      description: [
        "Raised $3M to build a professional services marketplace that helped SaaS companies (e.g., Plaid, Square, Shippo) accelerate time-to-value, retention, and ROI.",
        "Led a 5-engineer team; built automated requirement intake, scoping, quoting, and expert matching workflows.",
        "Scoped, quoted, and managed 50+ projects; delivered $400k+ GMV; sold to C-level executives.",
      ],
    },
    {
      company: "Cover",
      logo: "/cover__logo.jpeg",
      title: "Business Operations Lead",
      dates: "2016 - 2018",
      location: "San Francisco Bay Area",
      description: [
        "Engineered a modern ELT stack (Fivetran, Snowflake, dbt) and Periscope BI; created 30+ data models and 100+ curated KPI views for Product, Sales, and Growth.",
        "Automated financial reporting and forecasting (P&L, cash flow, LTV) and built executive dashboards and cadences.",
        "Shipped an ML lead-scoring service (Python/Scikit-learn) that reduced CAC by 18%.",
        "Supported a $16M fundraise (Tribe Capital, Social Capital, YC) by building the deck, data room, and an automated financial-model pipeline with live metrics; primary diligence contact.",
      ],
    },
    {
      company: "Square",
      logo: "/joinsquare_logo.jpeg",
      title: "Business Operations, Risk",
      dates: "2014 - 2018",
      location: "San Francisco Bay Area",
      description: [
        "Scaled risk operations post-IPO; implemented Airflow pipelines and Tableau reporting to power real-time risk metrics and agent scorecards across a 100+ person merchant review team.",
        "Investigated fraud patterns and modeled credit risk to generate machine learning predictive signals/features for transaction risk scoring and fraud detection.",
        "Led company-wide Plaid integration enabling automated bank account review; partnered with Square Capital to enhance underwriting.",
        "Built a chargeback predictive model to prioritize chargeback dispute management, saving $850k+/year in operating costs.",
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
            margin: 0.25in;
          }
          .no-print {
            display: none !important;
          }
          /* Condense layout for print */
          .resume-container {
            padding: 0.25in 0.28in !important;
            max-width: 100% !important;
          }
          .resume-container h1 { font-size: 1.52rem !important; line-height: 1.12 !important; }
          .resume-container h2 { font-size: 0.92rem !important; line-height: 1.12 !important; }
          .resume-container h3 { font-size: 0.8rem !important; line-height: 1.12 !important; }
          .resume-container p,
          .resume-container li { font-size: 0.7rem !important; line-height: 1.2 !important; }
          /* Tighten Tailwind space-y utilities when printing */
          .resume-container .space-y-12 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.9rem !important; }
          .resume-container .space-y-10 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.8rem !important; }
          .resume-container .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.45rem !important; }
          /* Lists */
          .resume-container ul { margin-left: 0.8rem !important; }
          .resume-container ul li { margin-top: 0.16rem !important; }
          /* Logos: force visibility and fixed size for print */
          .resume-logo, .resume-logo * { visibility: visible !important; opacity: 1 !important; }
          .resume-logo { width: 24px !important; height: 24px !important; display: inline-block !important; }
          .resume-logo img { width: 24px !important; height: 24px !important; object-fit: contain !important; }
          /* Two-column skills for print */
          .resume-container .skills-list { column-count: 2; column-gap: 1rem; }
          .resume-container .skills-list li { break-inside: avoid; }
          /* Limit bullets per experience to 4 on print */
          .resume-container .experience-bullets li:nth-child(n+5) { display: none !important; }
        }
      `}</style>
      <div className="bg-white text-black min-h-screen font-sans">
        <div className="w-full max-w-4xl mx-auto p-8 resume-container">
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
          {resume.contact && (
            <p className="mt-2 text-md text-gray-600">
              {[resume.contact.location, resume.contact.phone, resume.contact.email, resume.contact.website]
                .filter(Boolean)
                .join(" · ")}  
            </p>
          )}
              <p className="mt-4 text-lg text-gray-700">{resume.summary}</p>
            </div>
            {resume.about && (
              <div>
                <h2 className="text-3xl font-bold border-b pb-2">About</h2>
                <p className="mt-4 text-lg text-gray-700">{resume.about}</p>
              </div>
            )}
            {Array.isArray(resume.skills) && resume.skills.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold border-b pb-2">Skills</h2>
                <ul className="mt-4 list-disc list-outside ml-6 space-y-2 text-gray-700 skills-list">
                  {resume.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold border-b pb-2">Experience</h2>
              <div className="mt-6 space-y-10">
                {resume.experience.map((job, index) => (
                  <article key={index} className="">
                    <div className="flex items-center gap-3">
                      {job.logo ? (
                        <span className="resume-logo rounded-md ring-1 ring-gray-200 overflow-hidden">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={56}
                            height={56}
                            className="rounded-md"
                          />
                        </span>
                      ) : (
                        <div className="resume-logo bg-gray-100 rounded-md ring-1 ring-gray-200"></div>
                      )}
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight">{job.company}</h3>
                        <p className="text-lg text-gray-600">{job.title}</p>
                        <p className="text-sm text-gray-500">
                          {job.dates} &middot; {job.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-gray-700">
                      {Array.isArray(job.description) ? (
                        <ul className="list-disc list-outside ml-5 space-y-1.5 experience-bullets">
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
                  </article>
                ))}
              </div>
            </div>
            {Array.isArray(resume.education) && resume.education.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold border-b pb-2">Education</h2>
                <div className="mt-6 space-y-10">
                  {resume.education.map((edu, i) => (
                    <article key={i}>
                      <div className="flex items-center gap-3">
                        {edu.logo ? (
                          <span className="resume-logo rounded-md ring-1 ring-gray-200 overflow-hidden">
                            <Image
                              src={edu.logo}
                              alt={`${edu.school} logo`}
                              width={48}
                              height={48}
                              className="rounded-md"
                            />
                          </span>
                        ) : (
                          <div className="resume-logo bg-gray-100 rounded-md ring-1 ring-gray-200"></div>
                        )}
                        <div>
                          <h3 className="text-2xl font-semibold leading-tight">{edu.school}</h3>
                          <p className="text-lg text-gray-600">
                            {(edu.degree ? edu.degree : "")}
                            {edu.degree && edu.field ? ", " : ""}
                            {(edu.field ? edu.field : "")}
                          </p>
                          <p className="text-sm text-gray-500">
                            {(edu.dates ? edu.dates : "")}
                            {edu.dates && edu.location ? " · " : ""}
                            {(edu.location ? edu.location : "")}
                          </p>
                        </div>
                      </div>
                      {Array.isArray(edu.coursework) && edu.coursework.length > 0 && (
                        <p className="mt-3 text-gray-700">
                          <span className="font-medium">Coursework:</span> {edu.coursework.join(", ")}
                        </p>
                      )}
                      {Array.isArray(edu.papers) && edu.papers.length > 0 && (
                        <ul className="mt-3 list-disc list-outside ml-5 space-y-1.5 text-gray-700">
                          <li className="font-medium">Notable papers:</li>
                          {edu.papers.map((paper, j) => (
                            <li key={j}>{paper}</li>
                          ))}
                        </ul>
                      )}
                      {Array.isArray(edu.activities) && edu.activities.length > 0 && (
                        <ul className="mt-3 list-disc list-outside ml-5 space-y-1.5 text-gray-700">
                          {edu.activities.map((act, j) => (
                            <li key={j}>{act}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

