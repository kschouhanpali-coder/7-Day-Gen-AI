import React, { useState } from 'react';

/**
 * GENATIC AI DIARY - CYBERNETIC EXTENDED EDITION
 * Futuristic AI-inspired UI with deeply expanded technical content.
 * Built by Antigravity
 */

const DAYS = [
  {
    id: 1,
    title: "Neural Foundations",
    emoji: "🧠",
    topic: "LLM Fundamentals",
    image: "images/day1.png",
    summary: `Generative Artificial Intelligence represents a paradigm shift in how we interact with technology. Unlike traditional AI, which is designed to categorize or predict based on existing data, Gen AI creates entirely new content—from prose and poetry to code and cinematic visuals. At its heart lie Large Language Models (LLMs), massive neural networks trained on the breadth of human knowledge. These models function by mapping the relationship between words (tokens) in a multi-dimensional semantic space, allowing them to predict the next word in a sequence with startling accuracy. This process, known as 'Inference', is what powers the human-like dialogue we see in modern chatbots.`,
    advantages: ["Rapid content generation at scale", "Democratization of complex technical skills", "Infinite variety in creative outputs", "24/7 availability for technical support"],
    disadvantages: ["Propensity for 'hallucinations' (false info)", "Significant computational and energy costs", "Inherent bias in training data", "Lack of true 'common sense' or world model"],
    applications: ["Automated technical documentation", "Creative brainstorming and ideation", "Personalized educational tutoring", "Rapid prototyping for UX/UI"],
    tools: ["ChatGPT", "Gemini", "Claude", "Llama 3", "Mistral", "Hugging Face"],
    keyTerms: [
      { term: "LLM", definition: "Large Language Model—a type of AI trained on vast text data." },
      { term: "Token", definition: "A unit of text (roughly 0.75 words) that models use to process language." },
      { term: "Inference", definition: "The process of a trained model generating content based on new input." },
      { term: "Parameters", definition: "The internal variables a model learns during training, determining its intelligence." }
    ],
    examples: [
      { title: "Semantic Abstraction", prompt: "Explain quantum physics to a 5-year-old.", output: "Imagine quantum physics is like special LEGO bricks that can be in two boxes at once!" },
      { title: "Information Synthesis", prompt: "Summarize Transformers in 3 bullet points.", output: "1. Self-Attention 2. Positional Encoding 3. Multi-head attention." }
    ]
  },
  {
    id: 2,
    title: "Instructional Design",
    emoji: "⌨️",
    topic: "Prompt Engineering",
    image: "images/day2.png",
    summary: `Prompt engineering is the practice of refining inputs to LLMs to elicit specific, high-quality responses. It is the bridge between human intent and machine execution. By providing the right context, constraints, and personas, users can guide the model's output with precision. Advanced techniques like 'Chain of Thought' force the model to 'think' step-by-step, significantly improving performance on logical and mathematical tasks. Mastering these techniques is vital for building reliable AI-driven applications and extracting the maximum value from any Gen AI model.`,
    advantages: ["No code required to achieve complex tasks", "Immediate feedback loop for refinement", "Cost-effective compared to model training", "Allows for highly customized model behaviors"],
    disadvantages: ["Sensitive to minor wording changes", "Requires deep domain knowledge for accuracy", "May lead to 'prompt injection' vulnerabilities", "Inconsistency across different model versions"],
    applications: ["Crafting marketing copy", "Generating boilerplate code", "Summarizing long legal documents", "Building customer service scripts"],
    tools: ["PromptPerfect", "FlowGPT", "Poe", "ChatGPT", "Perplexity", "Snorkel AI"],
    keyTerms: [
      { term: "Zero-Shot", definition: "Asking a model to perform a task without any prior examples." },
      { term: "Few-Shot", definition: "Providing examples within the prompt to guide style and output." },
      { term: "Context Window", definition: "The maximum amount of text a model can 'keep in mind' during a chat." },
      { term: "Negative Prompt", definition: "Instructions telling the model what NOT to include in the output." }
    ],
    examples: [
      { title: "Persona + Constraints", prompt: "Act as a senior software architect. Review this code.", output: "1. O(n^2) complexity. 2. Memory leak. 3. Redundant queries." },
      { title: "Chain-of-Thought", prompt: "Calculate cost step by step.", output: "Step 1: Calc base. Step 2: Add tax... Total: $199.92" }
    ]
  },
  {
    id: 3,
    title: "Knowledge Retrieval",
    emoji: "📡",
    topic: "Retrieval-Augmented Generation",
    image: "images/day3.png",
    summary: `RAG (Retrieval-Augmented Generation) allows LLMs to access external, real-time information without re-training. It connects the model to a specialized database (Vector DB) containing proprietary or up-to-date documents. When a user asks a question, the system first retrieves the most relevant snippets from this database and then feeds them to the LLM to generate a factual, grounded answer. This architecture is the current gold standard for enterprise AI applications because it provides verifiable sources and keeps the model's knowledge fresh.`,
    advantages: ["Provides up-to-the-minute information", "Reduces hallucinations by citing sources", "Cost-effective compared to fine-tuning", "Enhanced data privacy for enterprise use"],
    disadvantages: ["Adds latency due to retrieval step", "Requires maintaining a Vector Database", "Limited by the quality of source documents", "Complex to implement and optimize"],
    applications: ["Corporate internal HR bots", "Live financial data analysis", "Academic research assistants", "Technical documentation search"],
    tools: ["Pinecone", "Weaviate", "ChromaDB", "LangChain", "LlamaIndex", "MongoDB Atlas"],
    keyTerms: [
      { term: "Embeddings", definition: "Numerical representations of text that capture semantic meaning." },
      { term: "Vector Database", definition: "Specialized DB for storing and searching high-dimensional vectors." },
      { term: "Similarity Search", definition: "Finding text segments mathematically similar to a query." },
      { term: "Chunking", definition: "Breaking long documents into smaller segments for the Vector DB." }
    ],
    examples: [
      { title: "Enterprise Query", prompt: "User uploads a lease PDF. 'Pet rules?'", output: "System: 'Clause 8.2 says small pets are allowed.'" },
      { title: "Live Knowledge Update", prompt: "Stock price of NVDA?", output: "System: 'NVDA closed today at $903.56.'" }
    ]
  },
  {
    id: 4,
    title: "Deep Adaptation",
    emoji: "🧬",
    topic: "Fine-tuning Strategies",
    image: "images/day4.png",
    summary: `Fine-tuning involves further training a pre-trained model on a specific dataset to adapt its behavior, style, or knowledge base. While prompting is flexible, fine-tuning is used for deep behavioral changes that cannot be achieved through instructions alone. It is particularly effective for specialized domains like medicine, law, or specific corporate communication styles. By fine-tuning, you are essentially 're-wiring' a portion of the model's brain to become an expert in a niche field.`,
    advantages: ["Deep behavioral alignment", "Higher accuracy for niche terminology", "Reduced prompt length and cost over time", "Enhanced performance on specific data formats"],
    disadvantages: ["Requires high-quality training data", "Expensive computational resources", "Risk of 'catastrophic forgetting'", "Difficult to undo or update quickly"],
    applications: ["Specialized legal document drafting", "Medical diagnostic coding", "Brand-specific conversational bots", "Custom coding assistants"],
    tools: ["OpenAI Fine-tuning", "Together AI", "Anyscale", "Weights & Biases", "Predibase"],
    keyTerms: [
      { term: "Fine-Tuning", definition: "Adjusting internal parameters using a specialized dataset." },
      { term: "Weights", definition: "The internal parameters that determine network processing." },
      { term: "Alignment", definition: "Ensuring model outputs match human values and preferences." },
      { term: "LoRA", definition: "Low-Rank Adaptation—a method to fine-tune models efficiently." }
    ],
    examples: [
      { title: "Medical Diagnostic Assistant", prompt: "Fine-tuning on oncology papers.", output: "The model uses precise terminology and drug warnings." },
      { title: "Brand Voice Alignment", prompt: "Fine-tuning on marketing copy.", output: "The model consistently uses company slogans and tone." }
    ]
  },
  {
    id: 5,
    title: "Agentic Autonomy",
    emoji: "🤖",
    topic: "AI Agents & Tool Use",
    image: "images/day5.png",
    summary: `AI Agents use LLMs as reasoning engines to perform multi-step tasks using external tools. Unlike a simple chatbot, an agent can plan, use a web browser, execute code, and interact with APIs to achieve an open-ended goal. This is the 'ReAct' framework (Reasoning + Acting). Agents are the next evolution of AI, moving from passive responders to proactive assistants that can manage complex workflows with minimal human intervention.`,
    advantages: ["Handles complex, open-ended tasks", "Can bridge the gap between AI and legacy tools", "Increases productivity through automation", "Self-correcting through feedback loops"],
    disadvantages: ["High error accumulation in long tasks", "Can be difficult to observe and debug", "Risk of unintended tool actions", "High token consumption and cost"],
    applications: ["Automated travel booking", "Complex data science pipelines", "Robotic process automation (RPA)", "Automated research reports"],
    tools: ["AutoGPT", "BabyAGI", "OpenAI Assistants", "LangChain Agents", "CrewAI", "Microsoft AutoGen"],
    keyTerms: [
      { term: "Function Calling", definition: "The ability of a model to generate data for tool interaction." },
      { term: "ReAct", definition: "A framework where the model alternates between Thought, Action, and Observation." },
      { term: "Orchestration", definition: "Managing the coordination between multiple specialized agents." },
      { term: "Memory System", definition: "How an agent remembers past actions and observations." }
    ],
    examples: [
      { title: "Trip Orchestration", prompt: "Book a trip to Tokyo.", output: "Agent: 'Searching flights... Booking... Adding to calendar...'" },
      { title: "Data Analysis Pipeline", prompt: "Analyze this CSV and plot it.", output: "Agent: 'Writing Python... Executing... Chart generated.'" }
    ]
  },
  {
    id: 6,
    title: "Sensory Fusion",
    emoji: "👁️",
    topic: "Vision & Audio Systems",
    image: "images/day6.png",
    summary: `Multimodal AI can process and understand multiple types of input simultaneously—including text, images, and audio. By mapping these diverse inputs into a shared semantic space, the model can reason across modalities. This enables interactions like describing a scene from a photo, converting a sketch into code, or generating music from a text description. Multimodality is how AI moves closer to human-like perception, understanding the world through more than just text.`,
    advantages: ["Enables richer human-AI interaction", "Solves problems text-only models cannot", "Greater accessibility for varied users", "Captures context from visual data"],
    disadvantages: ["Massive model sizes and memory needs", "Complex data alignment during training", "New types of multimodal hallucinations", "Slower inference for heavy media"],
    applications: ["Visual impaired assistance", "Interactive gaming and VR", "Automated video content moderation", "Design-to-code automation"],
    tools: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini Pro Vision", "Midjourney", "ElevenLabs", "Sora"],
    keyTerms: [
      { term: "Vision Transformer", definition: "A neural network for processing visual data using LLM techniques." },
      { term: "Latent Space", definition: "The mathematical space where models map different modalities." },
      { term: "OCR", definition: "Optical Character Recognition—extracting text from images." },
      { term: "Diffusers", definition: "Models that generate images by refining random noise into clear visuals." }
    ],
    examples: [
      { title: "Visual-to-Code", prompt: "Convert whiteboard sketch to React.", output: "Model: 'Writing code for your dashboard sketch...'" },
      { title: "Accessibility Assistant", prompt: "Describe this street photo.", output: "Model: 'A white car is on your left. Light is green.'" }
    ]
  },
  {
    id: 7,
    title: "Production Scale",
    emoji: "🚀",
    topic: "Scaling AI Products",
    image: "images/day7.png",
    summary: `Deploying AI products requires careful management of LLMOps—the pipeline of testing, monitoring, and optimizing models for real-world reliability. Day 7 focuses on the 'final mile' of AI development: making your application available to users. This involves choosing the right hosting platform, setting up safety guardrails to prevent misuse, and implementing evaluation metrics to ensure the model stays accurate as it scales.`,
    advantages: ["Consistent performance for thousands of users", "Cost-effective scaling via optimization", "Enhanced security and content safety", "Real-world impact through deployment"],
    disadvantages: ["High ongoing maintenance costs", "Monitoring Gen AI is notoriously difficult", "Model drift over time", "Security risks like prompt injection"],
    applications: ["Global customer support bots", "AI-powered search engines", "Safety layers for social media", "Personal productivity SaaS"],
    tools: ["Vercel", "Netlify", "LangSmith", "Helicone", "Weights & Biases", "Steamlit Cloud"],
    keyTerms: [
      { term: "LLMOps", definition: "Practices for managing the lifecycle of AI models." },
      { term: "Latency", definition: "The time delay before a model begins responding." },
      { term: "Evaluation", definition: "Measuring model performance against specific benchmarks." },
      { term: "Guardrails", definition: "Safety filters that block inappropriate or harmful AI outputs." }
    ],
    examples: [
      { title: "Regression Testing", prompt: "Running 100 queries on a new model.", output: "System: '98% accuracy. Latency 400ms. Approved.'" },
      { title: "Content Guardrails", prompt: "Flagging restricted instructions.", output: "System: 'Request flagged by safety layer. Blocked.'" }
    ]
  }
];

// --- STYLES (Cyber AI Aesthetic) ---
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg-dark: #050608;
    --card-bg: #0C0E12;
    --neon-cyan: #00F2FF;
    --neon-purple: #BC13FE;
    --text-primary: #F8FAFC;
    --text-dim: #94A3B8;
  }

  body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: 'Outfit', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  .ai-grid {
    background-image: 
      linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    position: relative;
  }
  .ai-grid::after {
    content: '';
    position: absolute;
    top: -100%; left: 0; width: 100%; height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(0, 242, 255, 0.1), transparent);
    animation: scan 8s linear infinite;
    pointer-events: none;
  }
  @keyframes scan { 0% { top: -100px; } 100% { top: 100%; } }

  .cyber-card {
    background: var(--card-bg);
    border: 1px solid rgba(0, 242, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }
  .cyber-card::before {
    content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%;
    background: linear-gradient(to bottom, var(--neon-cyan), var(--neon-purple));
    opacity: 0.5;
  }

  .neon-text { text-shadow: 0 0 10px rgba(0, 242, 255, 0.5); }
  .mono-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.2em; color: var(--neon-cyan); opacity: 0.8; }

  .code-block {
    background: #000;
    border: 1px solid rgba(0, 242, 255, 0.2);
    padding: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: #A5B4FC;
    border-radius: 4px;
    position: relative;
  }
  .code-block::after {
    content: 'OPERATIONAL_LOG';
    position: absolute;
    top: -10px; right: 10px;
    background: var(--bg-dark);
    padding: 0 5px;
    font-size: 0.6rem;
    color: var(--neon-cyan);
  }

  .sidebar-item { border-left: 2px solid transparent; transition: all 0.3s ease; }
  .sidebar-item.active { border-left-color: var(--neon-cyan); background: linear-gradient(to right, rgba(0, 242, 255, 0.05), transparent); }

  .day-image { width: 100%; height: 400px; object-fit: cover; border: 1px solid rgba(0, 242, 255, 0.2); box-shadow: 0 0 40px rgba(0, 242, 255, 0.1); }
  
  .tool-tag {
    background: rgba(0, 242, 255, 0.05);
    border: 1px solid rgba(0, 242, 255, 0.2);
    padding: 0.4rem 0.8rem;
    border-radius: 2px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--neon-cyan);
    transition: all 0.3s ease;
  }
  .tool-tag:hover {
    background: rgba(0, 242, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 242, 255, 0.3);
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: var(--neon-cyan); }
`;

const App = () => {
  const [activeDayId, setActiveDayId] = useState(1);
  const activeDay = DAYS.find(d => d.id === activeDayId);
  
  // Helper to get correct image path for GitHub Pages
  const getImagePath = (path) => {
    const base = import.meta.env.BASE_URL;
    return `${base}${path}`;
  };

  return (
    <div className="min-h-screen ai-grid flex flex-col md:flex-row">
      <style>{STYLES}</style>
      
      {/* CYBER SIDEBAR */}
      <aside className="w-full md:w-[300px] md:fixed md:h-screen bg-[#050608]/95 border-r border-cyan-500/10 p-8 flex flex-col z-20 backdrop-blur-xl">
        <div className="mb-16">
          <div className="mono-label mb-2">SYSTEM_INTERFACE</div>
          <h1 className="text-3xl font-bold tracking-tighter neon-text italic">Genetic AI diary</h1>
          <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4" />
        </div>

        <nav className="space-y-4 flex-1">
          {DAYS.map((day) => {
            const isActive = activeDayId === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDayId(day.id)}
                className={`sidebar-item w-full p-4 text-left transition-all ${isActive ? 'active' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg opacity-80">{day.emoji}</span>
                  <div>
                    <div className="mono-label !text-[0.6rem]">NODE_0{day.id}</div>
                    <div className={`text-sm font-semibold tracking-tight italic ${isActive ? 'text-white' : 'text-slate-500'}`}>
                      {day.title.toUpperCase()}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
           <div className="flex justify-between items-center text-[10px] font-mono text-cyan-500/50">
             <span>ARCHIVE_MODE: ENABLED</span>
             <span>V.FINAL_X</span>
           </div>
        </div>
      </aside>

      {/* MAIN CYBER CONTENT */}
      <main className="flex-1 md:ml-[300px] p-6 md:p-16 lg:p-24 flex flex-col items-center">
        
        <section className="max-w-[950px] w-full space-y-20 animate-in fade-in zoom-in-95 duration-700">
          
          <header className="space-y-4 text-center md:text-left">
            <div className="mono-label flex items-center justify-center md:justify-start gap-3">
               <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
               INDEXING_MODULE_0{activeDayId}
            </div>
            <h2 className="text-6xl font-bold tracking-tighter neon-text uppercase leading-none italic">
              {activeDay.title}
            </h2>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
               <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 text-[10px] font-mono text-cyan-400">DOMAIN: {activeDay.topic}</div>
               <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-1 text-[10px] font-mono text-purple-400">CLEARANCE: LEVEL_01</div>
            </div>
          </header>

          <div className="relative">
             <div className="absolute -inset-10 bg-cyan-500/5 blur-[100px] rounded-full" />
             <img src={getImagePath(activeDay.image)} alt={activeDay.title} className="day-image relative z-10 rounded-sm" />
             <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 font-mono text-[9px] text-cyan-500 border border-cyan-500/30 z-20">
               RECON_INTEL_ACTIVE
             </div>
          </div>

          {/* MAIN DATA GRID */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
               {/* ABSTRACT */}
               <div className="cyber-card p-10 md:p-14">
                  <div className="mono-label mb-8">CORE_TECHNICAL_ABSTRACT</div>
                  <p className="text-xl text-slate-300 leading-relaxed font-light">
                    {activeDay.summary}
                  </p>
               </div>

               {/* TOOLS */}
               <div className="space-y-6">
                  <div className="mono-label">INDUSTRY_TOOLSET</div>
                  <div className="flex flex-wrap gap-3">
                    {activeDay.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
               </div>

               {/* ANALYSIS */}
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="cyber-card p-8 border-emerald-500/10">
                    <div className="mono-label !text-emerald-500 mb-6">CAPABILITIES</div>
                    <ul className="space-y-4">
                      {activeDay.advantages.map((adv, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                          <span className="text-emerald-500">▶</span> {adv}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="cyber-card p-8 border-rose-500/10">
                    <div className="mono-label !text-rose-500 mb-6">VULNERABILITIES</div>
                    <ul className="space-y-4">
                      {activeDay.disadvantages.map((dis, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                          <span className="text-rose-500">▶</span> {dis}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>

            {/* SIDE INTEL */}
            <div className="space-y-10">
               <div className="cyber-card p-8 border-cyan-500/10">
                  <div className="mono-label mb-8">TAXONOMY_NODES</div>
                  <div className="space-y-8">
                    {activeDay.keyTerms.map((term, i) => (
                      <div key={i} className="group">
                        <div className="text-[10px] font-mono text-cyan-500 mb-2 opacity-50">NODE_0{i+1}</div>
                        <div className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{term.term}</div>
                        <div className="text-[0.75rem] text-slate-500 leading-relaxed">{term.definition}</div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="cyber-card p-8 border-purple-500/10">
                  <div className="mono-label mb-6">SECTOR_DEPLOYMENT</div>
                  <div className="grid gap-4">
                    {activeDay.applications.map((app, i) => (
                      <div key={i} className="bg-white/5 p-4 text-[0.7rem] text-slate-400 border border-white/5 rounded-sm">
                        {app}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

          </div>

          {/* OPERATIONAL LOGS */}
          <div className="space-y-10 pt-10 border-t border-white/5">
             <div className="flex items-center gap-6">
               <h3 className="text-3xl font-bold tracking-tighter uppercase neon-text">OPERATIONAL_DATA</h3>
               <div className="flex-1 h-px bg-cyan-500/20" />
             </div>
             <div className="grid md:grid-cols-2 gap-10">
               {activeDay.examples.map((ex, idx) => (
                 <div key={idx} className="space-y-4">
                    <div className="mono-label !text-purple-400">DATA_STREAM_0{idx+1} &bull; {ex.title}</div>
                    <div className="code-block">
                       <div className="mb-4"><span className="text-cyan-500 opacity-50">$ SYSTEM_IN:</span> {ex.prompt}</div>
                       <div className="text-white"><span className="text-cyan-500 opacity-50">$ MODEL_OUT:</span> {ex.output}</div>
                    </div>
                 </div>
               ))}
             </div>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-40 pb-20 w-full flex justify-between items-center px-10 border-t border-white/5 pt-12">
          <div className="mono-label opacity-30">SECURE_INTERFACE_V_FINAL</div>
          <div className="mono-label opacity-30">&copy; 2024 Genetic AI diary</div>
        </footer>
      </main>
    </div>
  );
};

export default App;
