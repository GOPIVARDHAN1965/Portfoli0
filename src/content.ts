// All site content, taken from SGC_GopiGunta_Resume.docx (Oct 2026).

// Formspree form ID (e.g. "xayzabcd"). Empty = contact form hidden, links only.
export const FORMSPREE_ID = "";

export const profile = {
  name: "GopiVardhan Gunta",
  handle: "gopivardhan_gunta",
  title: "Data Engineer & AI Consultant",
  location: "Tallahassee, FL",
  email: "guntagopivardhan@gmail.com",
  linkedin: "https://www.linkedin.com/in/gopivardhan",
  github: "https://github.com/GOPIVARDHAN1965",
  summary:
    // DRAFT — not from the résumé verbatim; confirm with Gopi.
    "I build data pipelines, forecasting models and AI tools for Florida's emergency management programs. M.S. Data Science, Florida State University.",
};

export const stats = [
  { value: "1,700", label: "payments reconciled" },
  { value: "0.923", label: "survival model C-index" },
  { value: "15+", label: "Power BI semantic models" },
  { value: "500K+", label: "rows ingested daily" },
];

// Before/after pairs. `after` is a % of `before` (before = 100%).
export const impact = [
  { metric: "4 → 16", label: "grants with reliable closeout forecast (of 20)", before: 20, after: 80, beforeText: "4 / 20", afterText: "16 / 20" },
  { metric: "−30%", label: "average contract approval time", before: 100, after: 70, beforeText: "before", afterText: "70%" },
  { metric: "−40%", label: "weekly reconciliation time (Aramark)", before: 100, after: 60, beforeText: "before", afterText: "60%" },
  { metric: "−40%", label: "API response time (ZAWN)", before: 100, after: 60, beforeText: "before", afterText: "60%" },
];

type Role = { title: string; period: string; bullets: string[] };
type Job = { company: string; location: string; roles: Role[] };

export const experience: Job[] = [
  {
    company: "Simeon Global Consulting",
    location: "Tallahassee, FL",
    roles: [
      {
        title: "Data Engineer & AI Consultant",
        period: "Aug 2026 – Present",
        bullets: [
          "Engineered Azure Data Factory pipelines to ingest daily operational data from SharePoint-hosted Excel trackers, combining internal records with externally collected data from Python web-scraping workflows for downstream reporting and analysis.",
          "Developed an AI-enabled SITREP generation workflow using the Claude API, packaging operational data into structured prompts and returning generated report content through an ArcGIS-based application with PDF output.",
          "Built a bureau-wide training management application for FDEM Mitigation using Power Apps Canvas Apps and SharePoint Lists, with role-based access and centralized internal training records.",
          "Developed internal AI and web applications using Next.js, Supabase/PostgreSQL, and Vercel, including AI-assisted portfolio content generation and database-backed internal tools.",
        ],
      },
      {
        title: "Data Engineer",
        period: "Mar 2026 – Aug 2026",
        bullets: [
          "Built a Cox Proportional Hazards survival model (concordance index 0.923) combined with a custom LPC clearance-rate model to forecast closeout timing for FDEM's 60-grant Public Assistance portfolio, correcting prior forecasts by 6 to 15 years on major grants including Hurricane Irma and Hurricane Ian.",
          "Derived corrected payment closeout thresholds from historical grant data, replacing an inaccurate assumed value and increasing the number of active grants with a reliable closeout projection from 4 of 20 to 16 of 20.",
          "Built a risk classification framework across the active grant portfolio based on corrected closeout timing, surfacing high-risk cases for targeted follow-up.",
          "Built an automated payment reconciliation pipeline for FDEM's Mitigation Bureau in Python, matching mitigation payments across the internal tracker, CFO payment history, and DFS state payment records into a single reporting table feeding a Power BI dashboard, with full match coverage across all 1,700 payments received to date.",
          "Built a caching layer for slow external state payment lookups and match logic that routes uncertain matches to manual review instead of guessing, keeping reconciliation accurate as payment volume grows.",
          "Built a Power BI dashboard covering payment status, bottlenecks, vendor concentration, and data quality, giving bureau leadership a clear view into where payments stood and where delays were happening.",
        ],
      },
    ],
  },
  {
    company: "Florida Division of Emergency Management",
    location: "Tallahassee, FL",
    roles: [
      {
        title: "Data Analyst",
        period: "May 2025 – Mar 2026",
        bullets: [
          "Architected a Python and Azure Blob Storage data lake to store and version FLAIR/FOCUS financial extracts, supporting historical reprocessing, audit trail maintenance, and cross-period reconciliation independent of source system availability.",
          "Engineered end-to-end data pipelines from FLAIR/FOCUS through Azure Blob Storage to Power BI, fully automated and built from scratch on greenfield infrastructure with no prior systems to build on.",
          "Deployed 15+ Power BI semantic models bureau-wide using DAX, calculated columns, row-level security, and Power Query transformations, enabling self-service reporting for 50+ stakeholders without analyst intervention.",
          "Built SQL-driven KPI frameworks connecting live financial data sources to Power BI, enabling leadership to monitor multi-billion-dollar program operations and track performance against objectives in real time.",
          "Built and maintained Python ETL pipelines ingesting 500K+ rows daily from authenticated .NET web portals, automating login flows and CSRF token handling via Selenium, scheduled via Windows Task Scheduler for zero-touch daily execution.",
          "Built a Contract Routing Tracker mapping every step of multi-million dollar approval workflows, flagging delays automatically and giving managers a live bottleneck view, reducing average contract approval time by 30%.",
        ],
      },
    ],
  },
  {
    company: "Aramark",
    location: "Tallahassee, FL",
    roles: [
      {
        title: "Data & Finance Analyst",
        period: "Nov 2023 – May 2025",
        bullets: [
          "Built Python and SQL ETL pipelines to generate automated sales and revenue reports across $35M+ in annual transactions; trend analysis surfaced key revenue drivers and contributed to a 20% improvement in forecasting accuracy.",
          "Owned month-end close activities including variance analysis, account reconciliation, and forecast updates, standardizing templates and automating repetitive data pulls to reduce close cycle friction.",
          "Handled weekly financial operations covering $500K+ in AP/AR, invoice processing, and account reconciliations; automated invoice tracking using Power Automate and SQL, cutting processing delays by 30%.",
          "Built 10+ Power BI dashboards covering 25+ KPIs across $35M+ in operations, including DAX measures, drill-through pages, and real-time data connections so leadership could analyze financials without waiting on manual reports.",
          "Replaced manual reconciliation workflows with Excel VBA macros, cutting weekly reconciliation time by 40% and eliminating formula errors that had caused prior reporting discrepancies.",
          "Generated and distributed daily sales variance reports giving operations managers a quantitative view of performance versus plan each morning.",
        ],
      },
    ],
  },
  {
    company: "Sravanthi Engineers",
    location: "India",
    roles: [
      {
        title: "Finance Analyst",
        period: "Jul 2021 – Jun 2023",
        bullets: [
          "Allocated costs across active contracts and produced management reporting with a clear breakdown of spend versus budget on every project.",
          "Performed tender analysis and built detailed cost estimates for work orders, breaking down material, labor, and overhead to produce competitive bids and accurate project budgets.",
          "Filed GST returns and maintained compliance records on schedule, ensuring statutory deadlines were met without penalties.",
          "Prepared site measurement reports reconciling estimated versus actual material and labor usage, used to settle contractor disputes and calibrate future cost estimates.",
          "Managed end-to-end AP/AR and invoicing across multiple simultaneous engineering projects, tracking payment milestones, following up on overdue accounts, and maintaining cash flow visibility for project leadership.",
        ],
      },
    ],
  },
  {
    company: "ZAWN",
    location: "Ottawa, Canada (Remote)",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "Feb 2021 – Apr 2021",
        bullets: [
          "Diagnosed and resolved slow MongoDB queries in high-traffic collections by adding compound indexes, restructuring aggregation pipelines, and rewriting query logic, bringing API response times down by 40%.",
          "Wrote automated regression test scripts in Selenium and PyTest, reducing manual testing burden per release and improving release confidence.",
          "Built and integrated frontend components including profile avatar upload and dropdown navigation, contributing to a 15% lift in user engagement post-release.",
          "Traced recurring bugs in alert and complaint submission flows, wrote detailed issue reports with reproduction steps, and worked with the dev team to resolve root causes responsible for 30% of customer complaints.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "RAG PDF Query System",
    url: "https://github.com/GOPIVARDHAN1965/rag_ollama_project",
    stack: ["Python", "Ollama", "FAISS", "Flask"],
    bullets: [
      "Built a local RAG pipeline using Ollama and vector embeddings where users query large PDFs and get context-grounded answers retrieved from the most relevant document chunks before generation.",
      "Implemented FAISS-based embedding indexing and chunk overlap tuning to keep retrieval fast and accurate on locally run models with no cloud dependency.",
      "Built a Flask REST API wrapper around the RAG pipeline, exposing document query functionality as an HTTP endpoint for integration with frontends and external tools.",
    ],
  },
  {
    name: "Tally Code Brewers — Quiz Platform",
    tag: "Semifinalist",
    url: "https://github.com/Bidisha28/TallyCode-QuizCreationPlatform",
    stack: ["Flask", "MongoDB", "Python"],
    bullets: [
      "Built a full-stack quiz platform in Flask and MongoDB under hackathon time pressure with dynamic question loading, real-time scoring, per-user unique links, and re-attempt blocking; placed semifinalist among 200+ teams.",
      "Designed a flexible MongoDB data model supporting variable point values, time-limited link activation, and per-user access control without hardcoding quiz-specific logic.",
      "Stress-tested concurrent quiz submissions and tuned backend query patterns to handle load without score drops or duplicate entries.",
    ],
  },
  {
    name: "Shopping Recommendation & Sentiment Analysis",
    url: "https://github.com/GOPIVARDHAN1965/final_sem_project",
    stack: ["Scikit-learn", "TF-IDF", "KNN", "Flask"],
    bullets: [
      "Built a KNN-based product recommendation model on purchase history data, surfacing complementary product suggestions that improved cross-sell opportunity identification by 25%.",
      "Trained a TF-IDF and Scikit-learn text classifier on restaurant review data, reaching 88% accuracy in sentiment labeling with output feeding a reporting layer for service quality trend analysis.",
      "Wrapped both models in a Flask REST API and built automated reporting generating spend analysis summaries and live sentiment scores on demand for business stakeholders.",
    ],
  },
];

export const achievements = [
  { rank: "1st", text: "IIT Madras HackerRank Competition" },
  { rank: "3rd", text: "Gitam HackerEarth Competition" },
  { rank: "Semifinalist", text: "Tally Code Brewers Hackathon — among 200+ teams" },
];

export const skills: Record<string, string[]> = {
  "ML & AI": ["ARIMA", "Prophet", "Scikit-learn", "TF-IDF", "NLP", "LangChain", "RAG", "Vector Embeddings", "PyTorch", "TensorFlow", "Hugging Face", "Pinecone"],
  "BI & Analytics": ["Power BI", "Power Query", "Power Automate", "Excel", "ETL Pipelines", "Data Modeling", "Semantic Models", "KPI Development", "Plotly"],
  "Cloud & DevOps": ["AWS", "GCP", "Azure", "Azure Blob Storage", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  Databases: ["MySQL", "SQL Server", "SQLite", "PostgreSQL", "MongoDB", "Snowflake"],
  "Frameworks & APIs": ["Flask", "REST APIs", "FastAPI", "Streamlit", "Dash", "Next.js"],
  Languages: ["Python", "SQL", "DAX", "M (Power Query)", "VBA", "R", "Java", "JavaScript", "C++"],
  Tools: ["Git", "GitHub", "SharePoint", "Windows Task Scheduler", "Selenium", "PyTest"],
};

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Feb 2025", url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/b84a6b62136143cca23c1a034f3797cf" },
  { name: "Florida Certified Contract Manager (FCCM)", issuer: "Florida Department of Management Services", date: "Dec 2025" },
];

export const education = [
  { degree: "M.S. Data Science", school: "Florida State University", place: "Tallahassee, FL", date: "May 2025", gpa: "3.93" },
  { degree: "B.Tech Computer Science", school: "Gitam University", place: "Visakhapatnam, India", date: "May 2023", gpa: "8.36" },
];
