# Or Paull Photography - Skills Setup Guide

This guide walks you through setting up and using the integrated skills for your photography service web application.

## Prerequisites

Before starting, ensure you have:
- [x] Claude Code installed (desktop app, CLI, or web)
- [x] Web search enabled (for find-skills, task-decomposer)
- [x] Terminal/PowerShell access
- [x] Python 3.8+ (for CrewAI - optional for initial phases)
- [x] Git (recommended for version control)

## Installation Steps

### Step 1: Initialize Project Environment

```powershell
cd "C:\Users\orCha\projects\Or Paull Photography"

# Create necessary directories
mkdir -p src/frontend src/backend src/agents docs tests
mkdir -p .claude/agents

# Verify structure
ls -Recurse
```

### Step 2: Install CrewAI (Optional for Phase 2+)

```powershell
# Create Python virtual environment
python -m venv venv

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Install CrewAI
pip install crewai crewai-tools

# Install additional dependencies
pip install python-dotenv requests stripe
```

### Step 3: Verify Skills Setup

The following skills are now configured in `.claude/settings.json`:

- ✅ **find-skills** - Enabled for discovery
- ✅ **grill-me** - Enabled for planning validation
- ✅ **Taste (design-taste-frontend-v1)** - Enabled for UI/UX
- ✅ **ponytail** - Enabled for code efficiency
- ✅ **bug-hunter** - Enabled for security
- ✅ **task-decomposer** - Enabled for planning
- ✅ **CrewAI** - Available via pip

## Using the Skills - Phase by Phase

### Phase 1: Planning & Discovery (Week 1-2)

#### Step 1a: Break Down the Project

Open Claude Code and run:

```bash
/task-decomposer
```

Then provide:
> "Break down building a photography service web application with portfolio gallery, booking system, service packages, and payment processing into phases and deliverables. Include dependencies and execution order."

**Outputs to save:**
- `PROJECT_PLAN.md` - Detailed project breakdown
- Task lists for each phase
- Dependency mapping

#### Step 1b: Validate Requirements

Run:

```bash
/grill-me
```

Then provide:
> "I'm building a photography service website. Here are my initial requirements: [paste requirements from PROJECT_PLAN.md]. Stress-test this plan and identify any gaps or unclear decisions."

**Outputs to save:**
- `REQUIREMENTS_VALIDATED.md` - Resolved requirements
- Decision log
- Feature clarifications

#### Step 1c: Discover Tools & Frameworks

Run:

```bash
/find-skills
```

Queries to run:
- "Modern responsive image gallery framework"
- "Booking/calendar system component"
- "Payment processing integration tools"
- "Photography portfolio platforms"
- "Image optimization libraries"

**Outputs to save:**
- `TECH_STACK.md` - Recommended tools
- Comparison matrix
- Integration guides

### Phase 2: Design & Architecture (Week 3-4)

#### Step 2a: Apply Taste Framework

In Claude Code, enable the Taste skill:

```bash
--skill design-taste-frontend-v1
```

Then request:
> "Design the UI/UX for a photography booking website using the Taste framework. Include: portfolio gallery, service packages, booking form, testimonials, contact. Ensure professional, distinctive design—not generic."

**Outputs to create:**
- `DESIGN_SYSTEM.md` - Taste framework rules
- Component library
- Color palette, typography, spacing rules
- Responsive breakpoints

#### Step 2b: Create Design Files

Generate:
- Wireframes for key pages
- Component specifications
- Design system documentation
- Responsive design guidelines

### Phase 3: Development Setup (Week 5+)

#### Step 3a: Apply Ponytail Principles

Enable ponytail in Claude Code:

```bash
/ponytail
```

Before writing any code, request:
> "I need to build [specific feature]. Use ponytail principles: does this exist in stdlib? Native features? Existing dependencies? What's the absolute minimum?"

**Key ponytail checklist:**
- [ ] Does this feature need to exist? (no = skip)
- [ ] Does stdlib do it?
- [ ] Native browser feature available?
- [ ] Installed dependency available?
- [ ] Can it be one line?
- [ ] Only then: write minimum code

#### Step 3b: Start with Frontend

Recommended tech stack (ponytail-optimized):
- **HTML5** native features (date input, validation)
- **CSS Grid/Flexbox** (no framework needed)
- **Vanilla JavaScript** (or minimal framework)
- **Responsive images** with srcset/picture elements

#### Step 3c: Build Backend

Recommended approach:
- Minimal framework (FastAPI, Express, Django)
- Serverless functions if scaling needed
- Database: PostgreSQL (proven, efficient)
- ORM: SQLAlchemy (Python) or Prisma (Node)

### Phase 4: Multi-Agent Development (Optional Advanced)

If using CrewAI for autonomous development:

#### Step 4a: Define Agents

Create `agents/portfolio_agent.py`:
```python
from crewai import Agent

portfolio_agent = Agent(
    role="Portfolio Manager",
    goal="Organize and optimize the photography portfolio",
    backstory="Expert in photo curation and presentation"
)
```

Other agents:
- Booking Coordinator Agent
- Payment Processor Agent
- Client Relations Agent

#### Step 4b: Create Tasks

Define tasks for each agent:
- Organize images by category
- Process bookings
- Handle payments
- Send communications

### Phase 5: Quality Assurance (Week Before Launch)

#### Step 5a: Security Audit

Run:

```bash
/bug-hunter
```

Then upload key files:
- Payment processing code
- Authentication/authorization
- Database queries
- File upload handlers
- API endpoints

**Focus areas:**
- SQL injection prevention
- XSS protection
- CSRF tokens
- Authentication flows
- Payment PCI compliance
- GDPR data handling
- File upload security

#### Step 5b: Fix Vulnerabilities

Apply all bug-hunter recommended fixes to a safe branch:

```bash
git checkout -b security-fixes
# Apply fixes
git commit -m "Security: Address bug-hunter findings"
git push origin security-fixes
```

### Phase 6: Final Review & Launch

#### Step 6a: Design Review

Re-run Taste framework check:
> "Review this design against the Taste framework guidelines. Ensure it maintains professional, distinctive appearance across all pages and devices."

#### Step 6b: Code Cleanup

Apply final ponytail optimization:
> "Review this codebase for unnecessary complexity. Apply ponytail principles: remove dead code, simplify implementations, ensure we're not overbuilt."

#### Step 6c: Launch Checklist

- [ ] All features implemented
- [ ] Security audit passed
- [ ] Performance optimized
- [ ] Mobile responsive verified
- [ ] Payment processing tested
- [ ] Email notifications working
- [ ] Analytics configured
- [ ] Backups configured
- [ ] Monitoring set up
- [ ] Legal/privacy policies in place

## Skill Usage Quick Reference

### find-skills
```bash
/find-skills "what you need"
# Returns: Available tools and how to integrate them
```

### grill-me
```bash
/grill-me
# Interactively stress-tests your plan/design
# Best for: Validation before building
```

### Taste Framework
```bash
--skill design-taste-frontend-v1
# Enables anti-slop UI/UX design
# Best for: Professional, distinctive design
```

### ponytail
```bash
/ponytail
# Enforces minimal, efficient code
# Best for: Code review and optimization
```

### bug-hunter
```bash
/bug-hunter
# Scans for security vulnerabilities
# Best for: Pre-launch security audit
```

### task-decomposer
```bash
/task-decomposer "your project goal"
# Breaks down into executable tasks
# Best for: Planning and estimation
```

### CrewAI
```python
# Python-based multi-agent orchestration
# Best for: Complex workflows and automation
pip install crewai
```

## File Organization

```
Or Paull Photography/
├── CLAUDE.md              # Project context
├── SKILLS.md              # Skills documentation
├── SETUP.md               # This file
├── PROJECT_PLAN.md        # Generated by task-decomposer
├── REQUIREMENTS.md        # Validated requirements
├── TECH_STACK.md          # Discovered tools
├── DESIGN_SYSTEM.md       # Taste framework specs
│
├── .claude/
│   ├── settings.json      # Global settings
│   ├── settings.local.json # Local overrides
│   └── agents/            # CrewAI agent definitions
│
├── src/
│   ├── frontend/          # UI/UX (Taste optimized)
│   ├── backend/           # API (ponytail optimized)
│   ├── agents/            # CrewAI agents
│   └── security/          # Security utilities
│
├── docs/
│   ├── API.md             # API documentation
│   ├── DESIGN.md          # Design specifications
│   └── DEPLOYMENT.md      # Deployment guide
│
├── tests/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── security/          # Security tests
│
└── venv/                  # Python virtual environment
```

## Troubleshooting

### Skills not appearing in Claude Code?

1. Ensure `.claude/settings.json` exists in project folder
2. Restart Claude Code
3. Verify permissions are set correctly
4. Check that you're in the project folder

### CrewAI installation fails?

```powershell
# Try upgrading pip
python -m pip install --upgrade pip

# Install with specific version
pip install crewai==0.1.0
```

### Skills not running?

1. Ensure web search is enabled
2. Check API access
3. Review error messages in Claude Code console
4. Try running skill from main Claude Code window (not just in project)

## Next Actions

1. **Today**: Complete Step 1a-1c (Planning Phase)
2. **Tomorrow**: Complete Step 2a-2b (Design Phase)
3. **This Week**: Complete Step 3a-3c (Development Setup)
4. **Before Launch**: Complete Step 5a-5b (Security Audit)

---

**Questions?** Refer back to `SKILLS.md` for detailed information on each skill, or use `/find-skills` to discover additional tools!

