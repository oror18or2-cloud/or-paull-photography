# Quick Start - Or Paull Photography

**TL;DR** - Run this sequence to launch your photography web app project.

## 5-Minute Setup

```bash
# 1. You're already in the project folder
cd "C:\Users\orCha\projects\Or Paull Photography"

# 2. Create project structure
mkdir -p src/{frontend,backend,agents} docs tests

# 3. Done! Skills are configured and ready.
```

## Run These Skills in Order

### Week 1: Plan Your Project

```bash
/task-decomposer "Build a photography booking website with portfolio, packages, booking system, and payments"
```

💾 Save output as `PROJECT_PLAN.md`

### Week 1: Validate Your Plan

```bash
/grill-me
```

When prompted, paste your requirements and let it stress-test them.

💾 Save decisions as `REQUIREMENTS.md`

### Week 2: Find Your Tech Stack

```bash
/find-skills "responsive photography gallery"
/find-skills "booking calendar component"
/find-skills "stripe payment integration"
```

💾 Save recommendations as `TECH_STACK.md`

### Week 2-3: Design Your UI

```bash
--skill design-taste-frontend-v1
```

Request: "Design a professional photography booking website with portfolio, services, and booking form. Make it distinctive and beautiful."

💾 Create `DESIGN_SYSTEM.md`

### Week 3-4+: Build With Ponytail

```bash
/ponytail "I need to build [feature]. What's the minimum viable solution?"
```

Use this for every feature. It enforces lean, efficient code.

### Week Before Launch: Security Audit

```bash
/bug-hunter
```

Upload your payment processing, auth, and API code. Let it scan for vulnerabilities.

## 🎯 Your Project Phases

| Phase | Timeline | Focus | Skill |
|-------|----------|-------|-------|
| 1 | Week 1 | Plan & Validate | task-decomposer, grill-me |
| 2 | Week 2 | Design | Taste, find-skills |
| 3 | Week 3-4+ | Build | ponytail |
| 4 | Before Launch | Security | bug-hunter |

## 📁 Where Files Go

```
Or Paull Photography/
├── CLAUDE.md              ← Project context
├── SKILLS.md              ← Detailed skill info
├── SETUP.md               ← Full setup guide
├── QUICKSTART.md          ← This file
├── PROJECT_PLAN.md        ← Your task breakdown (create this)
├── REQUIREMENTS.md        ← Validated needs (create this)
├── TECH_STACK.md          ← Chosen tools (create this)
├── DESIGN_SYSTEM.md       ← Design rules (create this)
├── src/                   ← Your code goes here
├── docs/                  ← Documentation
└── tests/                 ← Tests
```

## 🚀 Key Skills at a Glance

| Skill | Command | When | Why |
|-------|---------|------|-----|
| **task-decomposer** | `/task-decomposer` | Planning | Break big goal into tasks |
| **grill-me** | `/grill-me` | Planning | Validate all decisions |
| **find-skills** | `/find-skills` | Architecture | Find best tools |
| **Taste** | `--skill design-taste-frontend-v1` | Design | Create beautiful UI |
| **ponytail** | `/ponytail` | Development | Write minimal code |
| **bug-hunter** | `/bug-hunter` | QA | Find security bugs |

## 📋 Immediate Next Steps

- [ ] Run `/task-decomposer` for project breakdown
- [ ] Run `/grill-me` to validate requirements
- [ ] Create `PROJECT_PLAN.md` with task output
- [ ] Create `REQUIREMENTS.md` with validated needs
- [ ] Move to design phase with Taste framework

## ❓ Need Help?

- **Full Setup Details**: See `SETUP.md`
- **Skills Deep Dive**: See `SKILLS.md`
- **Project Context**: See `CLAUDE.md`

---

**Ready?** Open Claude Code and run `/task-decomposer` 🚀

