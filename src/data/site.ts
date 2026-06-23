export const site = {
  name: "Max Xing",
  initials: "MX",
  socialImage: "/og-image.png",
  socialImageWidth: 1200,
  socialImageHeight: 630,
  intro:
    "I spend my time thinking about artificial intelligence, capital, and the long arc of how new technologies reshape the way we live and work.",
  status:
    "Currently researching AI infrastructure and spatial intelligence, and interested in macroeconomic markets.",
  currentlyPhrases: [
    "writing about robotics",
    "reading about AI infrastructure",
    "studying markets",
    "playing basketball",
    "DJing",
    "talking to cool people",
    "tinkering",
    "stargazing",
  ],
  email: "max_xing@brown.edu",
  resumeUrl: "/resume.pdf",
  socials: {
    substack: "https://substack.com/@maxx1ng",
    github: "https://github.com/max-x1ng",
    twitter: "https://x.com/max_x1ng",
    linkedin: "https://www.linkedin.com/in/max-xing-949779276/",
  },
  about: [
    "Hi! My name is Max, and I'm studying Applied Math & Computer Science at Brown University. I'm from the Bay Area, California, and as a result I had a lot of early exposure to the tech and startup ecosystems. So after talking to my friends' parents, many of whom were early stage tech investors, I fell in love with helping companies grow.",
    "When I got to Brown, I joined Van Wickle Ventures, which is our campus' venture capital club that invests in Brown affiliated startups. I learned how to value an early stage company and also how to talk with founders. That led me to interning at a small tech-VC firm called SaaS Ventures last summer and Antler in San Francisco this summer. These experiences quickly taught me that I love investing and doing deep research into both companies and industries.",
    "More recently, I've also developed an interest in markets. As a lifelong debater, I love thinking about how macroeconomic trends impact markets, and breaking down complex investment decisions into first principles.",
    "Besides that, I love playing basketball, and I've recently picked up DJing as well! Oh, and if you couldn't tell already, I love stars :)",
  ],
  experience: [
    {
      org: "Antler",
      role: "Investment Intern",
      location: "San Francisco, CA",
      start: "June 2026",
      end: "Present",
      description: "Early-stage investing focused on technology.",
      category: "Work",
    },
    {
      org: "Array Ventures",
      role: "Venture Scout",
      location: "San Francisco, CA",
      start: "May 2026",
      end: "Present",
      description: "Early-stage investing focused on AI infrastructure.",
      category: "Work",
    },
    {
      org: "SaaS Ventures",
      role: "Venture Capital Intern",
      location: "Miami, FL",
      start: "May 2025",
      end: "August 2025",
      description: "Early-stage investing focused on cybersecurity and software.",
      category: "Work",
    },
    {
      org: "Credo Semiconductor Inc.",
      role: "Internal Applications Intern",
      location: "San Jose, CA",
      start: "June 2024",
      end: "August 2024",
      description: "Testing networking semiconductors.",
      category: "Work",
    },
    {
      org: "Brown University",
      role: "Sc.B. Applied Mathematics & Computer Science",
      location: "Providence, RI",
      start: "2024",
      end: "2028",
      description: "",
      category: "Education",
    },
  ],
  writing: {
    featured: {
      title: "How AI Capital Expenditures Impact Semiconductor Markets",
      date: "March 2026",
      topic: "AI Infrastructure",
      description:
        "An investment thesis on the direction of the semiconductor market in the age of Artificial Intelligence.",
      url: "https://substack.com/home/post/p-194315729",
    },
  },
  interests: [
    "Artificial Intelligence",
    "Semiconductors",
    "Robotics & Spatial Intelligence",
    "Technology Investing",
    "Markets",
  ],
  reading: {
    read: [{ title: "Zero to One", author: "Peter Thiel" }],
    currentlyReading: [
      { title: "When Genius Failed", author: "Roger Lowenstein" },
      { title: "The Chip War", author: "Chris Miller" },
    ],
    readingList: [
      { title: "Common Stocks and Uncommon Profits", author: "Philip A. Fisher" },
      { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb" },
      { title: "Principles", author: "Ray Dalio" },
    ],
  },
};

export type Site = typeof site;
