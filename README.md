<div align="center">

# 🧬 Genetic AI Diary

**A structured journey through the architecture of modern AI.**

An interactive, dark-themed educational web app that explores AI concepts through 7 structured nodes — from Neural Foundations to Production Scale. Each node breaks down capabilities, vulnerabilities, tools, and real-world use cases, making complex topics like RAG, fine-tuning, and agentic systems easy to navigate and understand.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Launch_App-00FFA3?style=for-the-badge&labelColor=0a0a0a)](https://7daygenrativeai.netlify.app/)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Why Genetic AI Diary?](#-why-genetic-ai-diary)
- [Nodes](#-nodes)
- [Node Deep Dive](#-node-deep-dive)
- [Features](#-features)
- [Industry Tools Covered](#-industry-tools-covered)
- [Who Is This For?](#-who-is-this-for)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#️-getting-started)
- [Learning Path](#-suggested-learning-path)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [FAQ](#-faq)

---

## 🎯 Overview

**Genetic AI Diary** presents the modern AI stack as a series of connected "nodes" — a system-interface-inspired learning path that takes you from foundational neural network concepts all the way to production-scale deployment. Each node combines theory, tooling, and real operational examples, so abstract ideas like retrieval-augmented generation and agentic autonomy become concrete and navigable.

Rather than treating AI as one monolithic subject, the app breaks it down the way a working engineer or researcher actually experiences it: as a layered system, where each layer builds on the one before it. You start with the neural fundamentals that make language models possible, move through how those models are applied to instruction and retrieval, progress into adaptation and autonomy, and finish at the operational realities of running AI in production. The result is a mental map you can return to whenever a new AI concept, tool, or paper crosses your feed.

---

## 💡 Why Genetic AI Diary?

- **Structured, not scattered** — instead of jumping between blog posts and papers, follow a deliberate sequence of 7 nodes designed to build on each other
- **Practical, not just theoretical** — every node pairs concepts with the real tools and platforms used to implement them in industry
- **Balanced perspective** — each topic is presented with both its capabilities and its vulnerabilities, encouraging critical thinking rather than hype
- **Visually immersive** — a dark, system-interface aesthetic turns what could be a dry technical reference into an engaging, game-like exploration
- **Reference-ready** — taxonomy nodes and terminology definitions make it easy to come back and look something up later

---

## 🌐 Live Demo

<div align="center">

### 🚀 [**Launch Genetic AI Diary**](https://7daygenrativeai.netlify.app/)

*Runs live in your browser — no installation required.*

</div>

---

## 🗂️ Nodes

| Node | Focus |
|---|---|
| **NODE_01 — Neural Foundations** | Core AI/LLM concepts, capabilities & vulnerabilities |
| **NODE_02 — Instructional Design** | How AI is used in learning and content creation |
| **NODE_03 — Knowledge Retrieval** | RAG (Retrieval-Augmented Generation) and vector search |
| **NODE_04 — Deep Adaptation** | Fine-tuning models for specialized domains |
| **NODE_05 — Agentic Autonomy** | AI agents and autonomous task execution |
| **NODE_06 — Sensory Fusion** | Multimodal AI and sensory data integration |
| **NODE_07 — Production Scale** | Deploying AI systems at scale |

---

## 🔬 Node Deep Dive

### 🧠 NODE_01 — Neural Foundations
Covers the core building blocks behind modern LLMs — transformers, tokenization, embeddings, and attention mechanisms — alongside an honest look at their capabilities (pattern recognition, language generation) and vulnerabilities (hallucination, bias, prompt injection).

### 🎓 NODE_02 — Instructional Design
Explores how generative AI is reshaping education and content creation, from adaptive learning paths to AI-assisted curriculum design, and where human oversight still matters most.

### 🔍 NODE_03 — Knowledge Retrieval
Breaks down Retrieval-Augmented Generation (RAG) — vector embeddings, semantic search, chunking strategies, and how retrieval pipelines ground LLM outputs in real, up-to-date data.

### 🎯 NODE_04 — Deep Adaptation
Covers fine-tuning techniques (full fine-tuning, LoRA, QLoRA) used to specialize general-purpose models for domain-specific tasks, along with the tradeoffs in cost, data, and performance.

### 🤖 NODE_05 — Agentic Autonomy
Introduces AI agents that can plan, use tools, and execute multi-step tasks autonomously — including agent architectures, memory, and the risks of unsupervised autonomy.

### 👁️ NODE_06 — Sensory Fusion
Examines multimodal AI systems that combine text, image, audio, and video understanding into a single model, and how sensory fusion is unlocking new categories of applications.

### 🏭 NODE_07 — Production Scale
Covers the operational side of AI — deployment infrastructure, latency and cost optimization, monitoring, and the platforms used to serve models reliably at scale.

---

## ✨ Features

<table>
<tr>
<td valign="top" width="50%">

### 🖥️ Interface
- Dark-themed futuristic UI with a system-interface aesthetic
- Node-based navigation for structured, sequential learning
- Taxonomy nodes with key terminology definitions

</td>
<td valign="top" width="50%">

### 📚 Content Depth
- Capabilities vs. vulnerabilities breakdown per topic
- Sector deployment use cases for each AI technique
- Operational data logs with real prompt/response examples

</td>
</tr>
</table>

---

## 🧰 Industry Tools Covered

`ChatGPT` · `Gemini` · `Claude` · `Llama 3` · `Mistral` · `Hugging Face` · `OpenAI Fine-tuning` · `Together AI` · `Anyscale` · `Weights & Biases` · `Predibase` · and more

---

## 👥 Who Is This For?

- **Students & self-learners** looking for a structured way to understand modern AI beyond scattered tutorials
- **Developers** who want a practical map of the tools and platforms used across the AI stack
- **Product & business folks** who need to understand AI capabilities and limitations without diving into research papers
- **Educators** looking for a visual, node-based framework to teach AI concepts
- **AI enthusiasts** who enjoy exploring technical topics through an immersive, game-like interface

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React / Next.js |
| **Styling** | Tailwind CSS (dark theme) |
| **Local Dev Server** | `localhost:5173` |

---

## 📁 Project Structure

```bash
genetic-ai-diary/
├── app/                     # Next.js app router pages
│   ├── nodes/               # Individual node pages (01–07)
│   └── layout.tsx           # Root layout & global providers
├── components/              # Reusable UI components
│   ├── NodeCard.tsx
│   ├── Taxonomy.tsx
│   └── OperationalLog.tsx
├── data/                    # Node content, terminology, and tool metadata
├── styles/                  # Tailwind config & global dark theme
├── public/                  # Static assets
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

**1. Clone the repository**
```bash
git clone https://github.com/your-username/genetic-ai-diary.git
cd genetic-ai-diary
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173` 🧬

---

## 🧭 Suggested Learning Path

For newcomers to generative AI, working through the nodes in order is recommended:

1. Start at **NODE_01** to build a solid mental model of how LLMs actually work
2. Move to **NODE_02** and **NODE_03** to see how those models are applied to real tasks like teaching and information retrieval
3. Progress to **NODE_04** and **NODE_05** to understand how models are customized and made autonomous
4. Explore **NODE_06** to see how AI is expanding beyond text
5. Finish at **NODE_07** to understand what it actually takes to ship AI systems in production

Each node stands on its own too — feel free to jump straight to whatever's relevant to what you're building or learning right now.

---

## 🗺️ Roadmap

- [ ] Add interactive quizzes at the end of each node
- [ ] Expand the operational data logs with more real-world prompt/response examples
- [ ] Add a searchable global glossary across all nodes
- [ ] Introduce progress tracking so users can pick up where they left off
- [ ] Add community-submitted use cases for each technique

---

## 🤝 Contributing

Contributions are welcome — whether that's refining a node's content, fixing a bug, or suggesting a new taxonomy entry.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/node-update`)
3. Commit your changes (`git commit -m 'Update NODE_03 content'`)
4. Push to the branch (`git push origin feature/node-update`)
5. Open a pull request

---

## ❓ FAQ

**Is this a coding tutorial?**
No — Genetic AI Diary focuses on conceptual understanding of AI systems, tools, and terminology rather than step-by-step coding instruction.

**Do I need prior AI knowledge to start?**
No. NODE_01 is designed to build foundational understanding from the ground up.

**Is the content kept up to date with new AI tools and models?**
The tools and platforms referenced reflect the current AI landscape and are periodically reviewed as the ecosystem evolves.

**Can I use this content for teaching or presentations?**
Yes — feel free to reference the node structure and concepts for educational purposes.

---

<div align="center">

**Genetic AI Diary** — *Mapping the DNA of modern AI, one node at a time.*

</div>
