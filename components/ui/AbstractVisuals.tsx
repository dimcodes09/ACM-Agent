"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Clean, technical block diagram representing Agentic AI Core Architecture (Planning, Memory, Tools) */
export function AgentArchitectureDiagram({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface-raised/30 p-6 ${className}`}>
      {/* Technical coordinate header */}
      <div className="flex justify-between items-center mb-6 border-b border-border pb-3 font-mono-ui text-[9px] tracking-wider text-text-faint">
        <span>SCHEMA // AGENT_CORE_v1.2</span>
        <span>STATUS: SYS_OK</span>
      </div>

      <svg viewBox="0 0 380 240" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grids */}
        <defs>
          <pattern id="diag-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="10" y1="0" x2="10" y2="10" stroke="var(--color-border)" strokeWidth="0.3" strokeOpacity="0.5" />
            <line x1="0" y1="10" x2="10" y2="10" stroke="var(--color-border)" strokeWidth="0.3" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="380" height="240" fill="url(#diag-grid)" />

        {/* User Query Block */}
        <g>
          <rect x="15" y="100" width="70" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="50" y="120" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="600">INPUT</text>
          <text x="50" y="132" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">[User Query]</text>
        </g>

        {/* Central Core Agent Block */}
        <g>
          <rect x="135" y="90" width="110" height="60" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-signal)" strokeWidth="1.2" />
          <text x="190" y="112" textAnchor="middle" fill="var(--color-text)" fontSize="9" fontWeight="600" fontFamily="var(--font-mono)">LLM PLANNER</text>
          <text x="190" y="125" textAnchor="middle" fill="var(--color-active)" fontSize="7.5" fontFamily="var(--font-mono)">[ReAct Loop]</text>
          <text x="190" y="137" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">agent.reason()</text>
        </g>

        {/* Memory Sub-Block (Top) */}
        <g>
          <rect x="145" y="15" width="90" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="190" y="35" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="600">RAG MEMORY</text>
          <text x="190" y="47" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">vector-store</text>
        </g>

        {/* Tools Sub-Block (Bottom) */}
        <g>
          <rect x="145" y="185" width="90" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="190" y="205" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="600">APIS & TOOLS</text>
          <text x="190" y="217" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">tool_calling()</text>
        </g>

        {/* Response Block (Right) */}
        <g>
          <rect x="295" y="100" width="70" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="330" y="120" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="600">OUTPUT</text>
          <text x="330" y="132" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">[Response]</text>
        </g>

        {/* Connections & Arrows (Thin solid gray lines) */}
        {/* Input -> Central Core */}
        <path d="M 85 120 L 135 120" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="135,120 130,117 130,123" fill="var(--color-border-hover)" />

        {/* Central Core <-> Memory */}
        <path d="M 180 90 L 180 55" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="180,55 177,60 183,60" fill="var(--color-border-hover)" />
        <path d="M 200 55 L 200 90" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="200,90 197,85 203,85" fill="var(--color-border-hover)" />

        {/* Central Core <-> Tools */}
        <path d="M 180 150 L 180 185" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="180,185 177,180 183,180" fill="var(--color-border-hover)" />
        <path d="M 200 185 L 200 150" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="200,150 197,155 203,155" fill="var(--color-border-hover)" />

        {/* Central Core -> Output */}
        <path d="M 245 120 L 295 120" stroke="var(--color-signal)" strokeWidth="1.2" />
        <polygon points="295,120 290,117 290,123" fill="var(--color-signal)" />

        {/* Small indicator dots showing request/response flow */}
        {!reduce && (
          <>
            <circle r="2" fill="var(--color-active)">
              <animateMotion path="M 85 120 L 135 120" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="var(--color-signal)">
              <animateMotion path="M 245 120 L 295 120" dur="2s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}

/** Clean, technical diagram showing a Multi-Agent coordination pipeline */
export function MultiAgentOrchestrationDiagram({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface-raised/30 p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6 border-b border-border pb-3 font-mono-ui text-[9px] tracking-wider text-text-faint">
        <span>SCHEMA // MULTI_AGENT_FLOW</span>
        <span>COORDINATION: ACTIVE</span>
      </div>

      <svg viewBox="0 0 380 240" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="380" height="240" fill="url(#diag-grid)" />

        {/* Master Coordinator */}
        <g>
          <rect x="135" y="10" width="110" height="46" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-signal)" strokeWidth="1" />
          <text x="190" y="32" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">ORCHESTRATOR</text>
          <text x="190" y="44" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">coordinator.py</text>
        </g>

        {/* Sub-Agent A (Academics) */}
        <g>
          <rect x="20" y="100" width="100" height="46" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="70" y="122" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">ACADEMIC AGENT</text>
          <text x="70" y="134" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">retriever.py</text>
        </g>

        {/* Sub-Agent B (Facilities) */}
        <g>
          <rect x="260" y="100" width="100" height="46" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="310" y="122" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">FACILITIES AGENT</text>
          <text x="310" y="134" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">tools.py</text>
        </g>

        {/* Shared Memory Bus */}
        <g>
          <rect x="110" y="185" width="160" height="40" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="190" y="205" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">SHARED CONTEXT BUS</text>
          <text x="190" y="217" textAnchor="middle" fill="var(--color-active)" fontSize="7" fontFamily="var(--font-mono)">memory.json</text>
        </g>

        {/* Connection paths */}
        {/* Orchestrator -> Agent A */}
        <path d="M 160 56 C 160 80, 70 70, 70 100" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="70,100 67,95 73,95" fill="var(--color-border-hover)" />

        {/* Orchestrator -> Agent B */}
        <path d="M 220 56 C 220 80, 310 70, 310 100" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="310,100 307,95 313,95" fill="var(--color-border-hover)" />

        {/* Agent A -> Context Bus */}
        <path d="M 70 146 L 70 165 C 70 180, 140 180, 140 185" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="140,185 136,181 138,187" fill="var(--color-border-hover)" />

        {/* Agent B -> Context Bus */}
        <path d="M 310 146 L 310 165 C 310 180, 240 180, 240 185" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="240,185 242,187 244,181" fill="var(--color-border-hover)" />
      </svg>
    </div>
  );
}

/** Minimalist Vector Space Clustering plot (Stripe style) representing memory index retrieval */
export function VectorSpaceRetrievalPlot({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface-raised/30 p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6 border-b border-border pb-3 font-mono-ui text-[9px] tracking-wider text-text-faint">
        <span>DATAPLOT // VECTOR_RETRIEVAL_2D</span>
        <span>INDEX: COMPLETED</span>
      </div>

      <svg viewBox="0 0 380 220" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="380" height="220" fill="url(#diag-grid)" />

        {/* Axes */}
        <line x1="30" y1="20" x2="30" y2="190" stroke="var(--color-border)" strokeWidth="1" />
        <line x1="30" y1="190" x2="360" y2="190" stroke="var(--color-border)" strokeWidth="1" />
        <text x="25" y="15" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">DIM_Y</text>
        <text x="365" y="193" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">DIM_X</text>

        {/* Cluster 1: Document chunk embeddings (faint circles) */}
        <circle cx="90" cy="60" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="100" cy="50" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="110" cy="70" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="95" cy="80" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />

        {/* Cluster 2: Academic database chunks (target cluster) */}
        <circle cx="260" cy="120" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="280" cy="110" r="4" fill="var(--color-signal)" stroke="var(--color-signal)" strokeWidth="0.5" strokeOpacity="0.8" />
        <circle cx="290" cy="135" r="4" fill="var(--color-signal)" />
        <circle cx="270" cy="140" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="250" cy="130" r="4" fill="var(--color-text-faint)" fillOpacity="0.4" />
        <circle cx="295" cy="115" r="4" fill="var(--color-signal)" fillOpacity="0.6" />

        {/* Query Vector vector pointer */}
        <line x1="30" y1="190" x2="275" y2="112" stroke="var(--color-active)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="275" cy="112" r="5" fill="var(--color-active)" />
        <text x="260" y="102" fill="var(--color-active)" fontSize="7.5" fontFamily="var(--font-mono)" fontWeight="600">QUERY_VEC</text>

        {/* Retrieval bounds circle */}
        <circle cx="280" cy="125" r="30" fill="none" stroke="var(--color-border-hover)" strokeWidth="0.8" />
        <text x="310" y="152" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">nearest_neighbors(k=3)</text>
      </svg>
    </div>
  );
}

/** Detailed blueprints architecture layout for the Campus AI Assistant buildathon concept */
export function CampusAIAssistantBlueprint({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border bg-base/80 p-6 ${className}`}>
      {/* Corner labels */}
      <div className="flex justify-between items-center mb-5 border-b border-border pb-3 font-mono-ui text-[8.5px] tracking-wider text-text-faint">
        <span>PROJECT // CAMPUS_AI_SCHEMATIC</span>
        <span>REVISION // 1.0.4</span>
      </div>

      <svg viewBox="0 0 380 240" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="380" height="240" fill="url(#diag-grid)" />

        {/* User interface node */}
        <g transform="translate(10, 95)">
          <rect width="80" height="50" rx="3" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="40" y="24" textAnchor="middle" fill="var(--color-text)" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">USER_PORTAL</text>
          <text x="40" y="36" textAnchor="middle" fill="var(--color-text-faint)" fontSize="7" fontFamily="var(--font-mono)">chat_ui.tsx</text>
        </g>

        {/* Coordinator Node */}
        <g transform="translate(130, 90)">
          <rect width="110" height="60" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-signal)" strokeWidth="1" />
          <text x="55" y="24" textAnchor="middle" fill="var(--color-text)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">COORDINATOR</text>
          <text x="55" y="36" textAnchor="middle" fill="var(--color-active)" fontSize="7.5" fontFamily="var(--font-mono)">intent_classifier</text>
          <text x="55" y="48" textAnchor="middle" fill="var(--color-text-faint)" fontSize="6.5" fontFamily="var(--font-mono)">agent.orchestrate()</text>
        </g>

        {/* Academic Vector Storage Agent (Top Right) */}
        <g transform="translate(280, 15)">
          <rect width="90" height="42" rx="3" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="45" y="22" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">ACADEMIC_RAG</text>
          <text x="45" y="32" textAnchor="middle" fill="var(--color-text-faint)" fontSize="6.5" fontFamily="var(--font-mono)">db_courses</text>
        </g>

        {/* Hostel Tool Calling Agent (Middle Right) */}
        <g transform="translate(280, 99)">
          <rect width="90" height="42" rx="3" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="45" y="22" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">FACILITIES_API</text>
          <text x="45" y="32" textAnchor="middle" fill="var(--color-text-faint)" fontSize="6.5" fontFamily="var(--font-mono)">hostel_status</text>
        </g>

        {/* General Admin Agent (Bottom Right) */}
        <g transform="translate(280, 183)">
          <rect width="90" height="42" rx="3" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="45" y="22" textAnchor="middle" fill="var(--color-text-muted)" fontSize="7.5" fontFamily="var(--font-mono)">ADMIN_RETRIEVER</text>
          <text x="45" y="32" textAnchor="middle" fill="var(--color-text-faint)" fontSize="6.5" fontFamily="var(--font-mono)">db_general</text>
        </g>

        {/* Flow Connectors */}
        {/* User -> Coordinator */}
        <line x1="90" y1="120" x2="130" y2="120" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="130,120 126,117 126,123" fill="var(--color-border-hover)" />

        {/* Coordinator -> Academic */}
        <path d="M 240 110 C 260 110, 260 36, 280 36" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="280,36 276,33 276,39" fill="var(--color-border-hover)" />

        {/* Coordinator -> Facilities */}
        <line x1="240" y1="120" x2="280" y2="120" stroke="var(--color-border-hover)" strokeWidth="1" />
        <polygon points="280,120 276,117 276,123" fill="var(--color-border-hover)" />

        {/* Coordinator -> Admin */}
        <path d="M 240 130 C 260 130, 260 204, 280 204" stroke="var(--color-border-hover)" strokeWidth="1" fill="none" />
        <polygon points="280,204 276,201 276,207" fill="var(--color-border-hover)" />
      </svg>
    </div>
  );
}
