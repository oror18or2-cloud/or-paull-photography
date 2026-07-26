# Or Paull Photography - Integrated Skills

This project integrates seven key AI development skills to build a professional photography service web application. Each skill serves a specific purpose in the development pipeline.

## Skills Overview

### 1. **find-skills** 🔍
**Purpose:** Discovery and installation of capabilities from the open agent skills ecosystem

**How it helps your project:**
- Identifies additional tools and frameworks needed for specific features
- Finds optimal solutions for photography gallery rendering, image optimization
- Discovers booking system components and payment integrations

**Installation:**
```bash
/find-skills
```

**Use cases for photography app:**
- Finding image optimization libraries
- Discovering calendar/booking components
- Finding payment gateway integrations

---

### 2. **grill-me** 🔥
**Purpose:** Relentless interviewing skill that stress-tests plans through systematic questioning

**How it helps your project:**
- Validates photography service business model before development
- Ensures all customer requirements are captured
- Identifies potential gaps in feature planning

**Installation:**
```bash
/grill-me
```

**Use cases for photography app:**
- Validate booking system requirements
- Test pricing and package structure
- Confirm payment flow expectations
- Review portfolio display needs

---

### 3. **Taste** 🎨
**Purpose:** Anti-Slop Frontend Framework - prevents generic AI-generated interfaces

**How it helps your project:**
- Creates distinctive, professional visual design
- Establishes aesthetic constraints (hierarchy, spacing, typography)
- Ensures photography portfolio looks elegant and branded

**Installation:**
```bash
--skill design-taste-frontend-v1
```

**Use cases for photography app:**
- Portfolio gallery design (clean, high-impact image display)
- Professional booking interface
- Modern client testimonials section
- Elegant package/pricing display

---

### 4. **CrewAI** 👥
**Purpose:** Multi-agent AI orchestration framework

**How it helps your project:**
- Orchestrates complex workflows with specialized agents
- Each agent handles specific domain (gallery, booking, payments, admin)
- Enables parallel development and autonomous task execution

**Installation:**
```bash
pip install crewai
```

**Use cases for photography app:**
- Portfolio management agent (image processing, categorization)
- Booking agent (scheduling, confirmations, reminders)
- Payment processing agent (checkout, invoicing)
- Customer management agent (inquiries, follow-ups)

**Example roles:**
- Portfolio Curator Agent - manages gallery organization
- Booking Coordinator Agent - handles scheduling
- Payment Processor Agent - manages transactions
- Client Relationship Agent - customer communications

---

### 5. **ponytail** ✂️
**Purpose:** AI coding skill that reduces code by 54% using YAGNI principles

**How it helps your project:**
- Enforces minimal, efficient code
- Uses stdlib and native features before custom solutions
- Reduces API costs and latency
- Prevents over-engineering

**Installation:**
```bash
/ponytail
```

**Decision ladder ponytail enforces:**
1. Does this feature need to exist? (No = skip it)
2. Does stdlib do it? (Yes = use it)
3. Is there a native platform feature? (Yes = use it)
4. Is there an installed dependency? (Yes = use it)
5. Can it be one line? (Yes = one line)
6. Only then: Write minimum viable implementation

**Use cases for photography app:**
- Image gallery (use native HTML5 instead of complex library)
- Responsive design (CSS Grid/Flexbox instead of framework)
- Date picking (native input[type="date"])
- Form validation (HTML5 validation before JS)

---

### 6. **bug-hunter** 🐛
**Purpose:** Autonomous AI code review and security vulnerability scanner

**How it helps your project:**
- Identifies logic errors and runtime bugs
- Scans for security vulnerabilities
- Auto-fixes issues on safe branch
- Essential for payment processing and customer data

**Installation:**
```bash
/bug-hunter
```

**Critical use cases for photography app:**
- Payment processing security (PCI compliance)
- Customer data protection (GDPR, privacy)
- Authentication/authorization flows
- File upload handling (image security)
- SQL injection prevention (database queries)
- XSS protection (user input)
- CSRF token validation

---

### 7. **task-decomposer** 📋
**Purpose:** Breaks complex objectives into executable subtasks

**How it helps your project:**
- Converts high-level goal into manageable components
- Identifies dependencies between tasks
- Provides execution order and priorities
- Shows team allocation and tools needed

**Installation:**
```bash
/task-decomposer
```

**Project breakdown example:**
```
Main Goal: Build Photography Service Web App

Phase 1: Foundation
├─ Project setup & architecture
├─ Database schema design
├─ Authentication system

Phase 2: Core Features
├─ Portfolio gallery
├─ Image upload & processing
├─ Service packages

Phase 3: Booking System
├─ Calendar integration
├─ Availability management
├─ Client notifications

Phase 4: Payment Processing
├─ Checkout flow
├─ Invoice generation
├─ Payment gateway integration

Phase 5: Admin Dashboard
├─ Analytics
├─ Client management
├─ Booking management

Phase 6: Launch Prep
├─ Security audit (bug-hunter)
├─ Performance optimization (ponytail)
├─ Design review (Taste)
```

---

## Recommended Workflow

### Stage 1: Planning & Validation
1. Run **task-decomposer** to break down the entire project
2. Use **grill-me** to stress-test each component requirement
3. Document all decisions and dependencies

### Stage 2: Design & Architecture
1. Apply **Taste** framework for UI/UX foundation
2. Use **find-skills** to locate optimal libraries and tools
3. Plan multi-agent structure with **CrewAI** in mind

### Stage 3: Development
1. Apply **ponytail** principles for minimal, efficient code
2. Use **CrewAI** to orchestrate agent-based development
3. Build each component (portfolio, booking, payments, admin)

### Stage 4: Quality Assurance
1. Run **bug-hunter** for comprehensive security review
2. Verify all critical flows (payments, auth, data handling)
3. Performance optimization using ponytail principles

### Stage 5: Deployment
1. Final design review with **Taste** checklist
2. Security audit with **bug-hunter**
3. Launch with monitoring and analytics

---

## Skills Integration Commands

Quick reference for using skills in Claude Code:

```bash
# Planning phase
/task-decomposer "Build a photography booking web application"
/grill-me

# Design phase
--skill design-taste-frontend-v1
/find-skills "photography gallery framework"

# Development phase
/ponytail
# CrewAI: pip install crewai

# Testing phase
/bug-hunter

# General discovery
/find-skills
```

---

## Configuration

All skills are configured to work with Claude Code. Ensure you have:
- Claude Code installed
- Access to Claude API (for bug-hunter, task-decomposer)
- Python environment (for CrewAI)
- Web search enabled (for find-skills)

---

## Next Steps

1. ✅ Skills documented
2. ⬜ Run `/task-decomposer` for detailed project breakdown
3. ⬜ Run `/grill-me` to validate requirements
4. ⬜ Implement design with Taste framework
5. ⬜ Begin development with ponytail principles
6. ⬜ Conduct bug-hunter security audit
7. ⬜ Deploy and monitor

