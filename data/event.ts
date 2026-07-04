// Single source of truth for event content.
// Every value here is taken directly from the provided event document.
// Do not invent schedules, speakers, or prizes — extend this file only
// when new confirmed information is provided.

export const EVENT = {
  name: "Agents of Change",
  subtitle: "National Agentic AI Bootcamp & Buildathon",
  organizer: "OIST ACM-W Student Chapter",
  dates: "10–11 July 2026",
  format: "2-Day Workshop + Team Buildathon",
} as const;

export const OVERVIEW = `The event is designed to introduce students to Agentic AI through an industry-led hands-on workshop followed by a practical buildathon. Participants will work in teams to build an AI agent that applies the concepts learned during the workshop. The objective is for every participant to leave with a working project and a clear understanding of planning, memory (RAG), tool calling and multi-agent workflows.`;

export const BUILDATHON_THEME = {
  title: "Campus AI Assistant",
  description: `Teams build an intelligent multi-agent assistant capable of answering campus-related queries, retrieving information using RAG, invoking tools, and coordinating multiple agents to solve student problems.`,
  capabilities: [
    "Answering campus-related queries",
    "Using RAG (memory & retrieval)",
    "Tool calling",
    "Multi-agent coordination",
  ],
} as const;

export const LEARNING_OUTCOMES = [
  {
    id: "architecture",
    title: "Agentic AI Architecture",
    description: "Understand Agentic AI architecture and workflows.",
  },
  {
    id: "llms",
    title: "Large Language Models",
    description: "Build AI agents using LLMs as the reasoning core.",
  },
  {
    id: "memory",
    title: "Memory using RAG",
    description: "Give agents memory and grounded knowledge with retrieval.",
  },
  {
    id: "tools",
    title: "Tool Calling",
    description: "Let agents act — invoking tools to complete real tasks.",
  },
  {
    id: "multi-agent",
    title: "Multi-Agent Systems",
    description: "Coordinate multiple agents to solve complex problems.",
  },
  {
    id: "team-dev",
    title: "Team-Based Development",
    description: "Learn team-based software development practices.",
  },
  {
    id: "e2e",
    title: "End-to-End AI Project",
    description: "Develop and present a functional end-to-end project.",
  },
] as const;

export const JOURNEY_STEPS = [
  "Industry Workshop",
  "Learn Agentic AI",
  "Form Teams",
  "Build AI Agent",
  "Mentor Guidance",
  "Submit Project",
  "Present Demo",
  "Awards",
] as const;

export const SCHEDULE = {
  day1: {
    label: "Day 1",
    date: "10 July",
    heading: "Workshop & Buildathon Kick-off",
    items: [
      { time: "10:00–10:30", activity: "Inauguration & Welcome" },
      { time: "10:30–11:00", activity: "Keynote: Introduction to Agentic AI" },
      {
        time: "11:00–01:00",
        activity:
          "Hands-on Workshop: Building AI Agents (Architecture, Tools, Memory, RAG)",
      },
      { time: "01:00–02:00", activity: "Lunch" },
      {
        time: "02:00–03:00",
        activity: "Buildathon Briefing, Team Formation & Problem Statement",
      },
      { time: "03:00–06:00", activity: "Team Development with Mentor Interaction" },
      {
        time: "11:59 PM",
        activity: "Project Submission (GitHub + Demo Video)",
      },
    ],
  },
  day2: {
    label: "Day 2",
    date: "11 July",
    heading: "Evaluation & Showcase",
    items: [
      { time: "10:00–11:30", activity: "Project Evaluation & Shortlisting" },
      { time: "11:30–01:30", activity: "Top Team Presentations and Live Demo" },
      { time: "01:30–02:30", activity: "Lunch" },
      {
        time: "02:30–03:30",
        activity: "Awards, Feedback & Valedictory Ceremony",
      },
    ],
  },
} as const;

export const WHY_PARTICIPATE = [
  "Build your first AI Agent",
  "Learn from Industry Experts",
  "Team-based Development",
  "Real-world AI Project",
  "Certificate of Participation",
  "Networking Opportunities",
  "Hands-on Learning Experience",
] as const;

// NOTE: The source document only listed candidate FAQ *questions*, with no
// answers. The answers below are placeholder copy so the section is
// functional — replace with OIST ACM-W's actual answers before launch.
export const FAQS = [
  {
    q: "Who can participate?",
    a: "Open to all students interested in AI and software development — no prior professional experience required.",
  },
  {
    q: "Do I need prior AI experience?",
    a: "No. The workshop is designed to take you from fundamentals through to building a working multi-agent project.",
  },
  {
    q: "Is participation team-based?",
    a: "Yes. After the workshop, participants form teams for the buildathon phase.",
  },
  {
    q: "What should I bring?",
    a: "Bring your own laptop with a code editor and Git installed.",
  },
  {
    q: "Will certificates be provided?",
    a: "Yes, a Certificate of Participation is provided to all attendees.",
  },
  {
    q: "What should I install before attending?",
    a: "A recent Node.js version, Git, and a code editor such as VS Code. Additional setup instructions will be shared with registered participants closer to the event.",
  },
] as const;

export const CONTACT = {
  organizer: "OIST ACM-W",
} as const;
