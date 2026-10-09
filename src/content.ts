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

// DRAFT copy (paraphrased from the résumé) — confirm with Gopi.
export const work = [
  {
    dir: "pipelines/",
    title: "Data pipelines & ETL",
    text: "Azure Data Factory, Python ETL and a versioned Azure Blob data lake. State financial data goes in from FLAIR/FOCUS and web portals, reports come out. Nobody clicks \"refresh\".",
    tools: ["Azure Data Factory", "Python", "Azure Blob", "Selenium", "SQL"],
  },
  {
    dir: "forecasting/",
    title: "Forecasting & ML",
    text: "Survival models that predict when federal grants will actually close out — and risk scores for the ones that won't.",
    tools: ["Cox PH", "ARIMA", "Prophet", "Scikit-learn"],
  },
  {
    dir: "dashboards/",
    title: "BI & dashboards",
    text: "Power BI semantic models and KPI frameworks, so leadership answers their own questions instead of emailing an analyst.",
    tools: ["Power BI", "DAX", "Power Query", "SQL"],
  },
  {
    dir: "ai-apps/",
    title: "AI apps",
    text: "Claude-powered SITREP report generation, RAG over PDFs, and internal web apps that people actually use.",
    tools: ["Claude API", "Next.js", "Supabase", "LangChain"],
  },
  {
    dir: "reconciliation/",
    title: "Finance automation",
    text: "Matching payments across systems that disagree with each other, and sending the weird ones to a human instead of guessing.",
    tools: ["Python", "Power Automate", "Excel VBA"],
  },
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

// Internal/client systems — no links, results straight from the résumé. Titles + `result` lines are DRAFT; confirm with Gopi.
export const systems = [
  {
    name: "SITREP generator",
    kind: "AI",
    result: "Situation reports drafted by AI from live operational data",
    stack: ["Claude API", "ArcGIS", "PDF"],
    details: [
      "Developed an AI-enabled SITREP generation workflow using the Claude API, packaging operational data into structured prompts and returning generated report content through an ArcGIS-based application with PDF output.",
    ],
  },
  {
    name: "Grant closeout forecasting",
    kind: "ML",
    result: "C-index 0.923 · forecasts corrected by 6–15 years",
    stack: ["Cox PH", "Python", "Survival analysis"],
    details: [
      "Built a Cox Proportional Hazards survival model (concordance index 0.923) combined with a custom LPC clearance-rate model to forecast closeout timing for FDEM's 60-grant Public Assistance portfolio, correcting prior forecasts by 6 to 15 years on major grants including Hurricane Irma and Hurricane Ian.",
      "Derived corrected payment closeout thresholds from historical grant data, replacing an inaccurate assumed value and increasing the number of active grants with a reliable closeout projection from 4 of 20 to 16 of 20.",
      "Built a risk classification framework across the active grant portfolio based on corrected closeout timing, surfacing high-risk cases for targeted follow-up.",
    ],
  },
  {
    name: "Payment reconciliation pipeline",
    kind: "Data engineering",
    result: "1,700 / 1,700 payments matched across three systems",
    stack: ["Python", "Power BI", "Caching"],
    details: [
      "Built an automated payment reconciliation pipeline for FDEM's Mitigation Bureau in Python, matching mitigation payments across the internal tracker, CFO payment history, and DFS state payment records into a single reporting table feeding a Power BI dashboard, with full match coverage across all 1,700 payments received to date.",
      "Built a caching layer for slow external state payment lookups and match logic that routes uncertain matches to manual review instead of guessing, keeping reconciliation accurate as payment volume grows.",
      "Built a Power BI dashboard covering payment status, bottlenecks, vendor concentration, and data quality, giving bureau leadership a clear view into where payments stood and where delays were happening.",
    ],
  },
  {
    name: "State finance data platform",
    kind: "Data engineering",
    result: "500K+ rows/day · built from scratch, zero-touch",
    stack: ["Azure Blob", "Python", "Selenium", "Power BI"],
    details: [
      "Architected a Python and Azure Blob Storage data lake to store and version FLAIR/FOCUS financial extracts, supporting historical reprocessing, audit trail maintenance, and cross-period reconciliation independent of source system availability.",
      "Engineered end-to-end data pipelines from FLAIR/FOCUS through Azure Blob Storage to Power BI, fully automated and built from scratch on greenfield infrastructure with no prior systems to build on.",
      "Built and maintained Python ETL pipelines ingesting 500K+ rows daily from authenticated .NET web portals, automating login flows and CSRF token handling via Selenium, scheduled via Windows Task Scheduler for zero-touch daily execution.",
    ],
  },
  {
    name: "Contract routing tracker",
    kind: "Automation",
    result: "Average contract approval time −30%",
    stack: ["Workflow mapping", "Automated alerts"],
    details: [
      "Built a Contract Routing Tracker mapping every step of multi-million dollar approval workflows, flagging delays automatically and giving managers a live bottleneck view, reducing average contract approval time by 30%.",
    ],
  },
];

export const projects: { name: string; tag?: string; url: string; live?: string; stack: string[]; bullets: string[] }[] = [
  {
    name: "Florida State Jobs Pipeline",
    tag: "Live",
    url: "https://github.com/GOPIVARDHAN1965/florida-jobs-pipeline",
    live: "https://gopivardhan1965.github.io/florida-jobs-pipeline/",
    stack: ["Python", "GitHub Actions", "ETL", "JavaScript"],
    bullets: [
      "Built a scheduled pipeline that scrapes all ~1,300 open State of Florida job postings daily, fetching detail pages incrementally (only new postings) and tracking first/last-seen dates to record when jobs open and close.",
      "Wrote a salary parser that normalises a dozen free-text pay formats (hourly, biweekly, monthly, annual, ranges, typos) into annual ranges, covering 89% of postings, with regression tests pinned to real-world strings.",
      "Published a dependency-free dashboard on GitHub Pages showing hiring by agency and city, median salary by job category, posting trends, and a searchable table with a data & tech roles filter.",
    ],
  },
  {
    name: "Florida Disaster Data Warehouse",
    tag: "Live",
    url: "https://github.com/GOPIVARDHAN1965/florida-disaster-warehouse",
    live: "https://gopivardhan1965.github.io/florida-disaster-warehouse/",
    stack: ["DuckDB", "dbt", "Python", "scikit-learn", "GitHub Actions"],
    bullets: [
      "Built an incrementally loaded warehouse joining 610K+ rows of OpenFEMA disaster spending, NOAA hurricane tracks and Census data for Florida's 67 counties, rebuilt weekly by GitHub Actions with each raw snapshot versioned as a release asset.",
      "Modelled raw → staging → marts in dbt on DuckDB (21 models, 51 data tests); the tests caught Miami-Dade's pre-1997 county code, dollars dropped by a wrong fact-table grain, and FEMA totals with no project detail behind them.",
      "Trained a model that predicts which counties receive FEMA Individual Assistance from a storm's track: ROC AUC 0.92 on held-out 2020–2025 storms vs 0.73 for a wind-distance rule, after per-storm error analysis exposed a leaky feature.",
    ],
  },
  {
    name: "World Disaster Watch",
    tag: "Live",
    url: "https://github.com/GOPIVARDHAN1965/world-disaster-watch",
    live: "https://gopivardhan1965.github.io/world-disaster-watch/",
    stack: ["JavaScript", "MapLibre GL", "Python", "GitHub Actions"],
    bullets: [
      "Built a live map of every active cyclone, earthquake, flood, wildfire, volcano and drought worldwide, refreshed hourly from GDACS and USGS, with cyclone wind zones, forecast cones and tracks drawn as map layers.",
      "Turned raw feed numbers into plain-language explanations (magnitude, hurricane category, burned area, what an alert level means) using tested templates, so no figure is ever invented.",
      "Added search-as-you-type and click-anywhere inspection: a 24-hour forecast strip, 7-day outlook, air quality and nearby disasters for any place, opening on the visitor's own location.",
    ],
  },
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
