// ============================================================
// AI Learning Platform - Content File
// Update THIS file only. index.html stays the same forever.
// ============================================================

const platformContent = {

  // ---------- OVERVIEW ----------
  overview: {
    purpose: "A real, high-quality personal learning system so Peter can understand the latest AI developments (especially agentic systems, multi-agent loops, and practical use in 2026), the best ways to use AI, and how to apply it in real work.",
    coreRule: "Only real, trusted content. No demo or placeholder information."
  },

  // ---------- VISION ----------
  vision: {
    version: "1.0",
    date: "14 July 2026",
    owner: "Leader Agent",
    statement: `To create a high-quality, trustworthy, and progressively improving personal learning system that helps Peter deeply understand:

• The current state of AI (especially agentic systems, multi-agent loops, context management, and practical production use in 2026)
• The best ways to actually use AI effectively and safely
• Clear, actionable paths to build skills and apply AI in real work (clinic tools, business, personal projects)

The system must feel real, not simulated. It will be grounded in primary sources (official documentation, respected practitioners, and high-signal content), with careful summarisation, clear explanations, and practical application steps using Grok.

It will grow over time through continual curation of new developments from blogs, X (Twitter), videos, and research — always filtered for quality and relevance.`,

    principles: [
      "Real content only — No demo or placeholder information.",
      "Quality over quantity — Every piece of content goes through a Reviewer agent.",
      "Progressive & Layered Learning — Start simple, then go deeper.",
      "Practical Application — Every concept must connect to how Peter can use it with Grok.",
      "Transparency & Reporting — Clear visibility into progress.",
      "Accessibility — Large text, high contrast, clean layout.",
      "Living System — Continuously updated with real developments.",
      "System Self-Improvement — The way the agents work must improve over time (meta-loop)."
    ],

    success: [
      "Peter has a clear mental model of how modern AI (especially agentic systems) works in 2026.",
      "He knows the best current practices and can apply them confidently.",
      "He has a growing library of trusted, summarised resources.",
      "Progress is visible and based on real work (not fake numbers).",
      "The system itself demonstrates good agentic practices."
    ]
  },

  // ---------- AGENTS ----------
  agents: [
    {
      name: "Leader / Vision Owner",
      role: "Sets direction, approves major changes, maintains the Vision document.",
      workRecord: "Updates the Vision & Strategy Document and produces high-level status reports."
    },
    {
      name: "Architect",
      role: "Designs system structure, data models, and processes.",
      workRecord: "Maintains Architecture and Process documents. Designs how the database feeds the webpage and how agents hand work to each other."
    },
    {
      name: "Researcher / Curator",
      role: "Finds high-quality new content from trusted sources (official docs, X, blogs, YouTube).",
      workRecord: "Adds entries to the Resources collection with source, quality score, summary, and date."
    },
    {
      name: "Analyst",
      role: "Processes long content — transcribes videos and summarises long threads carefully.",
      workRecord: "Creates structured summaries that are stored and linked to the original source."
    },
    {
      name: "Educator",
      role: "Turns content into clear, layered learning material with practical application steps for Grok.",
      workRecord: "Creates or updates learning modules, explanations, and “how to apply this with Grok” sections."
    },
    {
      name: "Reviewer / QA",
      role: "Quality gate — checks accuracy, clarity, actionability, and alignment with the Vision.",
      workRecord: "Adds review notes and approval status. Nothing reaches Peter without passing this gate."
    },
    {
      name: "Reporter",
      role: "Produces clear status reports after each loop.",
      workRecord: "Updates the Current State section and adds progress reports."
    }
  ],

  // ---------- DEVELOPMENT LOOP ----------
  developmentLoop: [
    "Leader / Architect — Reviews the Vision and current state. Defines the next piece of work.",
    "Planner — Breaks the work into clear tasks and records them.",
    "Executor — Completes the tasks (research, summarisation, writing, updating files, etc.).",
    "Reviewer — Checks quality, accuracy, and alignment with the Vision.",
    "Reporter — Produces a clear status report and updates the Hub.",
    "Handoff — Records what was done, decisions made, and what comes next."
  ],

  selfImprovementNote: "At the end of every major loop the Reviewer and Reporter must also answer: What worked well? What was slow or unclear? What process change would improve the next loop? This is how the system itself gets better over time (meta-loop).",

  // ---------- HANDOFF ----------
  handoff: {
    betweenAgents: "Each agent writes a short work log entry before handing off. Example: “Executor complete. Handing to Reviewer. Status: Draft ready for review.”",
    betweenSessions: [
      "New session must first read the latest Vision document and Current State (this Hub).",
      "Start with a short summary of the latest work and next priorities.",
      "Reference this Project Hub for all documents and processes."
    ]
  },

  // ---------- CURRENT STATE ----------
  currentState: {
    date: "18 July 2026",
    exists: [
      "Vision & Strategy Document (v1.0) with System Self-Improvement meta-loop",
      "Project Hub website with full detailed documents",
      "Multi-agent team with clear roles and work-recording method",
      "Ideal Development Loop and Handoff Protocol defined",
      "Real trusted resources list started",
      "One detailed real example breakdown (token optimisation thread)"
    ],
    todo: [
      "Expand the real resources library with more high-quality 2026 content",
      "Create the first structured Learning Path based on real content",
      "Set up basic database / structured storage for resources + progress tracking",
      "Improve the learning interface so it feels like a dedicated teaching tool",
      "Add more carefully transcribed and summarised video content",
      "Make progress tracking real (based on actual completed work)"
    ],
    latestReport: "Vision Alignment is strong. We have a clear Vision, defined agents, a proper development loop that includes system self-improvement, and a central Hub that contains the full working documents. Next recommended action: Expand the real resources library and create the first Learning Path."
  },

  // ---------- REAL RESOURCES ----------
  resources: [
    {
      title: "Anthropic Academy – Official Free Courses",
      source: "Anthropic (Official)",
      score: "9.7 / 10",
      why: "Highest authority source. Free courses with certificates on AI Fluency, Claude Code, agentic loops, and responsible multi-step use.",
      link: "https://www.anthropic.com/learn"
    },
    {
      title: "Loop Engineering by Addy Osmani",
      source: "O'Reilly Radar • June 2026",
      score: "9.3 / 10",
      why: "Clear explanation of the shift from prompting to designing reliable agent loops in production systems.",
      link: "https://www.oreilly.com/radar/loop-engineering/"
    },
    {
      title: "State of Context Engineering in 2026",
      source: "Aurimas Griciūnas • SwirlAI Newsletter",
      score: "9.1 / 10",
      why: "Detailed practitioner patterns: progressive disclosure, compression, routing, retrieval evolution, and tool management.",
      link: ""
    },
    {
      title: "Building Effective AI Agents (Anthropic Patterns)",
      source: "Anthropic official guidance",
      score: "9.5 / 10",
      why: "Foundational architecture patterns for reliable agents. Focuses on production-ready designs.",
      link: "https://www.anthropic.com/learn"
    }
  ],

  // ---------- PROCESSES ----------
  processes: {
    contentAddition: "Researcher → Analyst (if needed) → Educator → Reviewer → Librarian → Reporter",
    sessionStart: "Always begin by reading the latest Vision document and Current State (this Hub).",
    qualityGate: "Nothing reaches Peter without passing the Reviewer.",
    selfImprovement: "At the end of every major loop, Reviewer + Reporter must answer what worked well, what was unclear/slow, and what process change would improve the next loop. Architect + Leader review these observations regularly and turn good ideas into formal improvement tasks."
  }
};
