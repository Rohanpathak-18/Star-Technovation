export const plans = [
  {
    name: "Monthly",
    code: "01 / MONTHLY",
    price: "₹9,999",
    suffix: "+ 18% GST",
    summary: "A monthly automated strategy plan.",
    features: ["1–2 strategy coding", "Completely automated"],
    action: "Enquire now",
  },
  {
    name: "Quarterly",
    code: "02 / QUARTERLY",
    price: "₹24,999",
    suffix: "+ 18% GST",
    summary: "More strategies, with priority support.",
    features: [
      "3–5 strategy coding",
      "Trades indices",
      "Completely automated",
      "Priority WhatsApp support",
      "Remote support",
    ],
    action: "Enquire now",
    featured: true,
  },
  {
    name: "Half Yearly",
    code: "03 / HALF YEARLY",
    price: "₹49,999",
    suffix: "+ 18% GST",
    summary: "A six month automated strategy plan.",
    features: [
      "6–8 strategy coding",
      "Completely automated",
      "Priority WhatsApp support",
      "Remote support",
    ],
    action: "Enquire now",
  },
  {
    name: "Yearly",
    code: "04 / YEARLY",
    price: "₹84,999",
    suffix: "+ 18% GST",
    summary: "Our most complete annual plan.",
    features: [
      "9–12 strategy coding",
      "Completely automated",
      "Priority WhatsApp support",
      "Remote support",
    ],
    action: "Enquire now",
  },
];

export const strategies = [
  {
    symbol: "NIFTY 50",
    name: "Opening range",
    tag: "INDEX · INTRADAY",
    delta: "+8.24%",
    tone: "mint",
    value: "21,647.30",
    bars: [34, 48, 40, 62, 45, 71, 55, 80, 69, 90, 76, 95],
  },
  {
    symbol: "BANKNIFTY",
    name: "Volatility drift",
    tag: "INDEX · SWING",
    delta: "+5.81%",
    tone: "tomato",
    value: "46,128.65",
    bars: [61, 42, 56, 37, 70, 50, 78, 55, 72, 64, 89, 76],
  },
  {
    symbol: "GOLD",
    name: "Mean reversion",
    tag: "COMMODITY · POSITIONAL",
    delta: "+3.16%",
    tone: "yellow",
    value: "₹72,430",
    bars: [40, 59, 46, 68, 54, 71, 62, 84, 70, 89, 81, 96],
  },
];

export const articles = [
  {
    category: "FIELD NOTES · 6 MIN",
    date: "12 JUN 2025",
    title: "A quieter kind of edge: why process beats prediction",
    art: "article-purple",
    slug: "process-over-prediction",
    body: [
      "Markets reward preparation more consistently than prediction. A useful process makes room for uncertainty and defines what you will do before a fast move asks you to decide under pressure.",
      "That can be as simple as writing down the conditions that would make a trade valid, the risk you are willing to take, and the point at which you will step away. The value comes from repeating the same thoughtful steps, even when the outcome changes.",
      "Tools should make that process easier to see. They should show the assumptions behind a signal, keep risk visible, and leave the final decision in your hands.",
    ],
  },
  {
    category: "THE PLAYBOOK · 4 MIN",
    date: "28 MAY 2025",
    title: "Draw your risk map before the market opens",
    art: "article-lime",
    slug: "draw-your-risk-map",
    body: [
      "Before the opening bell, decide where a trade idea stops making sense. That level gives your plan a boundary and helps you understand the possible loss before you commit capital.",
      "A practical risk map includes your position size, the event or price condition that invalidates the setup, and a daily loss limit. Keep the map simple enough to check quickly when markets get busy.",
      "A disciplined plan cannot remove market risk. It can help make exposure deliberate and reduce decisions made in the heat of the moment.",
    ],
  },
  {
    category: "MARKET LETTER · 8 MIN",
    date: "16 MAY 2025",
    title: "Volatility isn’t the villain. Unplanned exposure is.",
    art: "article-red",
    slug: "understanding-volatility",
    body: [
      "Volatility describes how much prices move. It is part of the market environment, and it can change quickly around news, earnings, and shifts in liquidity.",
      "The harder problem is holding a position without understanding how a larger move could affect your account. Position sizing and clear exit conditions help translate volatility into risk you can evaluate.",
      "No model can predict every sharp move. Monitor your exposure, understand the limits of your system, and be prepared to pause when conditions no longer match your plan.",
    ],
  },
];
