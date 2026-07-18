// ============================================================
// AI Learning Platform - Content File
// Update THIS file only. index.html stays the same forever.
// ============================================================

const platformContent = {

  // ---------- CRITICAL STANDING INSTRUCTIONS ----------
  // 1. Content Accuracy Rule:
  //    The content in this file and on the website MUST always be kept current.
  //    Out-of-date status, version numbers, dates, or progress reports are not acceptable.
  //    Reporter is primarily responsible. Reviewer must check before any update is published.
  //
  // 2. System Self-Improvement Goal (Ongoing Background Task):
  //    Continuously improve the system so that Peter never has to handle files.
  //    Making the website and the complete system truly dynamic is a permanent
  //    background improvement goal, not a one-time task. Architect owns progress on this.

  // ---------- OVERVIEW ----------
  overview: {
    purpose: "A real, high-quality personal learning system so Peter can understand the latest AI developments (especially agentic systems, multi-agent loops, and practical use in 2026), the best ways to use AI, and how to apply it in real work.",
    coreRule: "Only real, trusted content. No demo or placeholder information. Content must always be kept up to date."
  },

  // ---------- VISION ----------
  vision: {
    version: "1.3",
    date: "18 July 2026",
    owner: "Leader Agent",
    statement: `To create a high-quality, trustworthy, and progressively improving personal learning system that helps Peter deeply understand:

• The current state of AI (especially agentic systems, multi-agent loops, context management, and practical production use in 2026)
• The best ways to actually use AI effectively and safely
• Clear, actionable paths to build skills and apply AI in real work (clinic tools, business, personal projects)

The system must feel real, not simulated. It will be grounded in primary sources (official documentation, respected practitioners, and high-signal content), with careful summarisation, clear explanations, and practical application steps using Grok.

It will grow over time through continual curation of new developments from blogs, X (Twitter), videos, and research — always filtered for quality and relevance.`,

    principles: [
      "Real content only — No demo or placeholder information.",
      "Content must always be kept current — Out-of-date status, dates, or reports are not acceptable.",
      "Quality over quantity — Every piece of content goes through a Reviewer agent.",
      "Progressive & Layered Learning — Start simple, then go deeper.",
      "Practical Application — Every concept must connect to how Peter can use it with Grok.",
      "Transparency & Reporting — Clear visibility into progress.",
      "Accessibility — Large text, high contrast, clean layout.",
      "Living System — Continuously updated with real developments.",
      "System Self-Improvement — The way the agents work and the system itself must improve over time (meta-loop). Making the complete system truly dynamic (no file handling for Peter) is an ongoing background goal.",
      "Project-Managed Development — All work is tracked in GitHub Projects + Issues for transparency and professionalism."
    ],

    success: [
      "Peter has a clear mental model of how modern AI (especially agentic systems) works in 2026.",
      "He knows the best current practices and can apply them confidently.",
      "He has a growing library of trusted, summarised resources.",
      "Progress is visible and based on real work (not fake numbers).",
      "The system itself demonstrates good agentic practices.",
      "The website content is always current — Peter never sees outdated information.",
      "Peter does not have to handle files — the system is truly dynamic."
    ]
  },

  // ---------- AGENTS ----------
  agents: [
    {
      name: "Leader / Vision Owner",
      role: "Sets direction, approves major changes, maintains the Vision document. Enforces content accuracy and system self-improvement goals.",
      workRecord: "Updates the Vision & Strategy Document and produces high-level status reports. Ensures content accuracy and that dynamic-system progress is tracked."
    },
    {
      name: "Architect",
      role: "Designs system structure, data models, and processes. PRIMARY owner of the ongoing goal to make the complete system truly dynamic so Peter never has to handle files. Drives continuous background improvements.",
      workRecord: "Maintains Architecture and Process documents. Continuously researches and proposes solutions for a file-free, dynamic system. Monitors and reports on self-improvement progress."
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
      role: "Quality gate — checks accuracy, clarity, actionability, alignment with the Vision, AND that all dates/status/version numbers are current.",
      workRecord: "Adds review notes and approval status. Must reject any update that contains outdated information."
    },
    {
      name: "Reporter",
      role: "Produces clear status reports after each loop. PRIMARY owner of keeping Current State, dates, version and progress reports accurate. Keeps GitHub Issues + Project Hub in sync.",
      workRecord: "Updates the Current State section and adds progress reports. Responsible for ensuring nothing is out of date."
    }
  ],

  // ---------- DEVELOPMENT LOOP ----------
  developmentLoop: [
    "Leader / Architect — Reviews the Vision and current state. Defines the next piece of work. Architect also reviews progress on making the system dynamic.",
    "Planner — Breaks the work into clear tasks and records them (creates GitHub Issues).",
    "Executor — Completes the tasks (research, summarisation, writing, updating files, etc.).",
    "Reviewer — Checks quality, accuracy, vision alignment, AND that all dates and status information are current. Reviews related GitHub Issues.",
    "Reporter — Produces a clear status report and updates the Hub. Must keep dates, version and progress accurate. Syncs board status.",
    "Handoff — Records what was done, decisions made, and what comes next. Moves issues on the project board."
  ],

  selfImprovementNote: "The self-improvement loop is an ongoing background process with this cadence: (1) Immediate reflections at the end of every major Development Loop by Reviewer + Reporter (posted as issue comments). (2) Scheduled formal reviews and improvement implementations every 7 days (weekly) or after every 3 major loops, whichever comes first. Architect continuously drives long-term background goals like system dynamization and reports progress. Project board hygiene is checked during every scheduled review.",

  // ---------- HANDOFF ----------
  handoff: {
    betweenAgents: "Each agent writes a short work log entry before handing off. Example: “Executor complete. Handing to Reviewer. Status: Draft ready for review.” Issues are moved on the project board during handoff.",
    betweenSessions: [
      "New session must first read the latest Vision document and Current State (this Hub).",
      "Start with a short summary of the latest work and next priorities.",
      "Reference this Project Hub for all documents and processes. Check the GitHub Project board for current task status."
    ]
  },

  // ---------- CURRENT STATE ----------
  currentState: {
    date: "18 July 2026",
    exists: [
      "Vision & Strategy Document (v1.3) with System Self-Improvement meta-loop and Content Accuracy Rule",
      "Project Hub website with full detailed documents (index.html + content.js structure)",
      "Multi-agent team with clear roles and work-recording method",
      "Ideal Development Loop and Handoff Protocol defined (integrated with GitHub Projects)",
      "Standing instruction that website content must always be kept current",
      "Standing background goal: Make the complete system truly dynamic so Peter never has to handle files (Architect owns this as ongoing task)",
      "PROJECT.md created – full project management structure defined",
      "Real trusted resources list started",
      "One detailed real example breakdown (token optimisation thread)"
    ],
    todo: [
      "Set up GitHub Project board and create initial Issues from current TODO list",
      "Expand the real resources library with more high-quality 2026 content",
      "Create the first structured Learning Path based on real content",
      "Set up basic database / structured storage for resources + progress tracking",
      "Improve the learning interface so it feels like a dedicated teaching tool",
      "Add more carefully transcribed and summarised video content",
      "Make progress tracking real (based on actual completed work)"
    ],
    ongoingBackgroundGoals: [
      "Make the complete system truly dynamic so Peter never has to handle any files (Architect is primary owner — continuous improvement task with weekly reviews)",
      "Maintain project board hygiene and keep Hub in sync with GitHub Issues (Reporter responsibility)"
    ],
    latestReport: "Vision Alignment is strong. We have converted development from chat-driven to proper project-managed (GitHub Projects + Issues + PROJECT.md). Content Accuracy Rule is in place. The self-improvement loop now has a clear cadence. Architect will drive the dynamic system goal as ongoing background work. Next immediate action: Create the GitHub Project board and initial Issues."
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
    sessionStart: "Always begin by reading the latest Vision document and Current State (this Hub). Check the GitHub Project board for current tasks.",
    qualityGate: "Nothing reaches Peter without passing the Reviewer. Reviewer must also confirm that all dates, version numbers and status information are current. Reviews related GitHub Issues and PRs.",
    selfImprovement: "The self-improvement loop is an ongoing background process with this cadence: At the end of every major Development Loop, Reviewer + Reporter provide immediate reflections on what worked, what didn't, and suggested improvements (posted as issue comments). Architect + Leader conduct formal review and implementation sessions every 7 days (weekly) or after every 3 major loops, whichever comes first. The Architect continuously drives long-term background goals like system dynamization and reports progress. Project board hygiene is checked during every scheduled review.",
    contentAccuracy: "STANDING RULE: Website content (especially status, dates, version and progress reports) must always be kept current. Reporter owns this. Reviewer enforces it. Out-of-date content is a process failure.",
    projectManagement: "All work is tracked in GitHub Projects + Issues. The Reporter keeps the Project Hub in sync with the board. Self-improvement includes regular project hygiene checks."
  },

  // ---------- PROJECT LINKS ----------
  projectLinks: {
    githubRepo: "https://github.com/peterwwatson/ai-learning-platform",
    projectBoard: "https://github.com/users/peterwwatson/projects/1",  // replace 1 with the actual project number once created
    liveHub: "https://peterwwatson.github.io/ai-learning-platform/"
  }
};
