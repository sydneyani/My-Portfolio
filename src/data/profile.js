export const contact = {
  github: 'https://github.com/sydneyani',
  linkedin: 'https://www.linkedin.com/in/sydney-ani-1561471b8',
  email: 'mailto:580091sydney@gmail.com',
  resume: `${process.env.PUBLIC_URL}/resume.html`,
};

export const focusAreas = [
  {
    title: 'Snowflake BI and data warehousing',
    body: 'Daily warehouse development, including Snowflake’s built-in AI for data validation, and support for consolidating ERP data into OneBI.',
  },
  {
    title: 'Data validation',
    body: 'A Python Flask application with Snowflake SSO and the Snowflake API for ETL readiness checks, delta-variance analysis, and cross-column comparisons. LLM-assisted workflows flag schema mismatches and variance spikes across multiple ERP systems.',
  },
  {
    title: 'Applied AI',
    body: 'AI enablement lead for the group, including training sessions, and AI automation in GitHub Actions workflows.',
  },
  {
    title: 'Software and analytics engineering',
    body: 'Applications in C# and Flutter, REST API automation, and Python/SQL analytics. Machine learning pipelines with pandas, NumPy, scikit-learn, and XGBoost for forecasting and classification, on Azure, with occasional Databricks use.',
  },
];

export const experience = [
  {
    title: 'BI – Data Warehouse Developer',
    company: 'NOV/Auredia',
    location: 'Houston, TX',
    time: 'Apr 2026 – Present',
    points: [
      'Work in Snowflake daily, using Snowflake’s built-in AI for data validation.',
      'AI enablement lead for the group, running training sessions.',
      'Built a Python Flask app with Snowflake SSO and the Snowflake API for ETL readiness checks, delta-variance analysis, and cross-column comparisons.',
      'LLM-assisted validation workflows that flag schema mismatches and variance spikes across multiple ERP systems.',
      'AI automation in GitHub Actions workflows, and support for ERP consolidation into OneBI.',
    ],
  },
  {
    title: 'Data Scientist / Software Engineer',
    company: 'NOV/Auredia',
    location: 'Houston, TX',
    time: 'Oct 2024 – Mar 2026',
    points: [
      'Primary languages were C# and Flutter, with Python and SQL for analytics.',
      'Built ML pipelines with pandas, NumPy, scikit-learn, and XGBoost for forecasting and classification.',
      'Built REST API automation services.',
      'Used Azure heavily and Databricks occasionally.',
    ],
  },
  {
    title: 'HR Technology Project Specialist (SQL Engineer)',
    company: 'NOV',
    location: 'Houston, TX',
    time: 'Aug 2021 – Sep 2024',
    points: [
      'Automated SQL internal auditing and reporting systems, reducing manual effort by ~50%.',
    ],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['C#', '.NET', 'Flutter', 'Dart', 'Python', 'SQL', 'JavaScript', 'React'],
  },
  {
    label: 'Data platform',
    items: ['Snowflake', 'dbt'],
  },
  {
    label: 'ML / AI',
    items: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'XGBoost',
      'PyTorch',
      'Transformers',
      'Flask',
      'OpenAI API',
      'Prompt engineering',
      'RAG',
      'LLM integration',
    ],
  },
  {
    label: 'Cloud / DevOps',
    items: ['Azure', 'Databricks', 'GitHub Actions'],
  },
];

export const education = {
  school: 'University of Houston',
  span: '2021–2025',
  degrees: [
    {
      name: 'M.S. Engineering Data Science & AI',
      detail: 'GPA 3.8 · Dec 2025',
    },
    {
      name: 'B.S. Computer Information Systems',
      detail: '',
    },
  ],
  coursework: {
    label: 'University coursework',
    href: 'https://github.com/sydneyani/university-coursework',
  },
};

export const certifications = [
  'NVIDIA DLI — Building RAG Agents with LLMs (2025)',
  'NVIDIA DLI — NLP Fundamentals (2025)',
];

export const projects = [
  {
    name: 'snowflake-dbt-data-platform',
    repo: 'snowflake-dbt-data-platform',
    flagship: true,
    summary: 'End-to-end data pipeline.',
    tags: ['Snowflake', 'dbt'],
    href: 'https://github.com/sydneyani/snowflake-dbt-data-platform',
  },
  {
    name: 'CiteGround',
    repo: 'rag-eval-assistant',
    flagship: true,
    summary:
      'Citation-grounded question answering over a synthetic filing corpus, with retrieval checked against the passage the answer came from.',
    tags: ['Python', 'FastAPI', 'RAG'],
    href: 'https://github.com/sydneyani/rag-eval-assistant',
  },
  {
    name: 'ml-forecasting-service',
    repo: 'ml-forecasting-service',
    flagship: true,
    summary:
      'Day-ahead forecast of German electricity load. Held-out 2017 test MAE is 18.16 GWh for the XGBoost champion.',
    tags: ['Python', 'XGBoost', 'FastAPI'],
    href: 'https://github.com/sydneyani/ml-forecasting-service',
  },
  {
    name: 'Meridian',
    repo: 'dotnet-flutter-app',
    flagship: true,
    summary:
      'C# field-operations API and Flutter client for work orders, inspections, and a shift dashboard. Sample data is synthetic.',
    tags: ['C#', '.NET', 'Flutter'],
    href: 'https://github.com/sydneyani/dotnet-flutter-app',
  },
  {
    name: 'FormulAI',
    repo: 'FormulAI',
    flagship: false,
    summary:
      'Flask app that turns a plain-language question and an uploaded workbook into an Excel formula.',
    tags: ['Python', 'Flask', 'OpenAI'],
    href: 'https://github.com/sydneyani/FormulAI',
  },
  {
    name: 'Legal Document Summarization',
    repo: 'NLP-Legal-Text-AI-Summarization-Model',
    flagship: false,
    summary:
      'T5 abstractive and BERT extractive summaries of UK and Indian Supreme Court judgments, scored with ROUGE, BLEU, and BERTScore.',
    tags: ['Python', 'PyTorch', 'T5', 'BERT'],
    href: 'https://github.com/sydneyani/NLP-Legal-Text-AI-Summarization-Model',
  },
  {
    name: 'Realtime Voice Agent',
    repo: 'Realtime-API',
    flagship: false,
    summary:
      'Push-to-talk browser voice agent on the OpenAI Realtime API, with a Node relay that keeps the API key on the server.',
    tags: ['React', 'Node', 'OpenAI'],
    href: 'https://github.com/sydneyani/Realtime-API',
  },
  {
    name: 'Railway Management System',
    repo: 'Tech-Solutions',
    flagship: false,
    summary:
      'React and Express app on a normalized MySQL schema for schedules, bookings, tickets, and SQL reports. Sydney led the UI.',
    tags: ['React', 'Express', 'MySQL'],
    href: 'https://github.com/sydneyani/Tech-Solutions',
  },
  {
    name: 'Data Science Portfolio',
    repo: 'SydneyAniProjects',
    flagship: false,
    summary:
      'Census-income classification, a car-evaluation network, speech-emotion models, and SQL for healthcare and workforce data.',
    tags: ['Python', 'PyTorch', 'SQL'],
    href: 'https://github.com/sydneyani/SydneyAniProjects',
  },
];
