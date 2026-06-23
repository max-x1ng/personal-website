export const site = {
  name: "Alex Hartwell",
  initials: "AH",
  title: "Investor, builder, and writer at the intersection of technology and human behavior.",
  intro:
    "I spend my time thinking about artificial intelligence, capital, and the long arc of how new technologies reshape the way we live and work. By training I'm part researcher, part operator — most days I'm reading papers, talking to founders, or writing in the margins of both.",
  status:
    "Currently researching AI infrastructure and spatial intelligence, and writing a series on the economics of compute.",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  socials: {
    substack: "https://substack.com/@yourhandle",
    github: "https://github.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
  },
  about: [
    "I grew up between a few cities and spent a long time trying to figure out whether I wanted to be a scientist, a writer, or someone who builds companies. I've made peace with doing a little of all three.",
    "My background is in computer science and economics. Before now, I worked at the intersection of applied research and early-stage investing, with detours through product, policy, and a brief, formative obsession with classical piano.",
    "I'm most interested in questions that sit between disciplines: how machine intelligence changes the structure of markets, why certain ideas compound and others don't, and what good taste looks like in a world of infinite leverage.",
    "Outside of work I read more fiction than I probably should, run slowly but consistently, and am always looking for a good record store.",
  ],
  experience: [
    {
      org: "Halcyon Capital",
      role: "Investor",
      location: "New York, NY",
      start: "2024",
      end: "Present",
      description:
        "Early-stage investing focused on AI infrastructure, applied research, and developer tools.",
      category: "Work",
    },
    {
      org: "Stanford HAI",
      role: "Visiting Researcher",
      location: "Stanford, CA",
      start: "2023",
      end: "2024",
      description:
        "Research on alignment evaluation methods and the economics of large-scale model deployment.",
      category: "Research",
    },
    {
      org: "Anthropic",
      role: "Product, Applied",
      location: "San Francisco, CA",
      start: "2022",
      end: "2023",
      description:
        "Worked across enterprise product and developer experience for foundation model APIs.",
      category: "Work",
    },
    {
      org: "Harvard University",
      role: "A.B. Computer Science & Economics",
      location: "Cambridge, MA",
      start: "2018",
      end: "2022",
      description:
        "Thesis on information cascades in venture markets. Editor at the undergraduate review.",
      category: "Education",
    },
  ],
  writing: {
    featured: {
      title: "The Quiet Repricing of Compute",
      date: "May 2026",
      topic: "AI Infrastructure",
      description:
        "A long essay on how the cost curve of inference is reshaping the economics of every software business built in the last decade.",
      url: "https://substack.com/@yourhandle/p/quiet-repricing",
    },
    posts: [
      {
        title: "Notes on Taste",
        date: "Apr 2026",
        topic: "Essays",
        description: "Why taste, not intelligence, is becoming the scarce resource.",
        url: "#",
      },
      {
        title: "Spatial Intelligence is the Next Interface",
        date: "Feb 2026",
        topic: "AI",
        description: "On robotics, embodied models, and what comes after the chat box.",
        url: "#",
      },
      {
        title: "What I Learned Reading 100 Investment Memos",
        date: "Jan 2026",
        topic: "Investing",
        description: "Patterns from a year of writing — and rewriting — conviction.",
        url: "#",
      },
      {
        title: "The Underrated Discipline of Slow Thinking",
        date: "Nov 2025",
        topic: "Essays",
        description: "A defense of the long walk in an age of instant answers.",
        url: "#",
      },
    ],
  },
  projects: [
    {
      name: "Compute Atlas",
      description:
        "An open dataset and visualization tracking the cost, location, and energy mix of global AI training runs.",
      tech: ["Research", "Data", "Next.js"],
      github: "https://github.com/yourhandle/compute-atlas",
      live: "https://compute-atlas.example.com",
    },
    {
      name: "Memo Engine",
      description:
        "A small tool that turns conversation transcripts into structured investment memos. Built mostly for myself.",
      tech: ["TypeScript", "LLMs"],
      github: "https://github.com/yourhandle/memo-engine",
      live: null,
    },
    {
      name: "On Spatial Intelligence",
      description:
        "An evolving thesis on robotics, world models, and the infrastructure required for embodied AI to matter.",
      tech: ["Essay", "Investing"],
      github: null,
      live: "https://substack.com/@yourhandle/p/spatial",
    },
    {
      name: "Pianola",
      description:
        "An experiment in turning practice sessions into structured feedback using audio models and a little music theory.",
      tech: ["Audio", "Python"],
      github: "https://github.com/yourhandle/pianola",
      live: null,
    },
  ],
  interests: [
    "Artificial intelligence",
    "Robotics & spatial intelligence",
    "Technology investing",
    "AI infrastructure",
    "Human behavior",
    "Music & cognition",
    "Healthcare",
    "Startups",
  ],
};

export type Site = typeof site;
