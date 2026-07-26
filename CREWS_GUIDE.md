# CrewAI Crews Guide - Or Paull Photography

This guide explains how to use the Development and Testing crews to build and test your photography website.

---

## Overview

Your project uses two specialized **CrewAI crews**:

1. **Development Crew** - Builds the website
2. **Testing Crew** - Tests and validates the website

Each crew consists of specialized agents who work together autonomously to complete their tasks.

---

## Setup

### Prerequisites

1. Python 3.8+ installed
2. Virtual environment created and activated
3. CrewAI installed: `pip install crewai crewai-tools`
4. Additional dependencies: `pip install python-dotenv requests stripe`

### Installation

```bash
# Navigate to project root
cd "C:\Users\orCha\projects\Or Paull Photography"

# Create Python virtual environment (if not already created)
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install CrewAI and dependencies
pip install crewai crewai-tools python-dotenv requests stripe

# Verify installation
crewai --version
```

---

## Development Crew

### What It Does

The Development Crew builds your complete photography website with the following agents:

| Agent | Role | Tasks |
|-------|------|-------|
| **Frontend Architect** | UI/UX Implementation | Project setup, layout components, UI components |
| **Gallery Specialist** | Image Management | Gallery carousels, image optimization |
| **Backend Developer** | Server & Admin | Admin panel, API, contact form, email |
| **Integration Engineer** | Deployment | Analytics, CI/CD, domain, deployment |

### Running Development Crew

**Option 1: Full Development Pipeline**

```bash
cd src/crews
python run_crews.py dev
```

This runs all development tasks in sequence:
1. Project setup
2. Component building
3. Gallery implementation
4. Backend API
5. Admin panel
6. Deployment configuration

**Option 2: Run Specific Agent**

Edit `src/crews/development_crew.py` and run only the agent you need.

**Option 3: Manual Execution**

```python
from development_crew import create_development_crew

crew = create_development_crew()
result = crew.kickoff()
print(result)
```

### Development Crew Output

When complete, you'll have:
- ✅ Complete React/Next.js project with design system
- ✅ All UI components built and styled
- ✅ 5 gallery carousels fully functional
- ✅ Admin panel for gallery management
- ✅ Backend API for form submission and gallery management
- ✅ Email integration (contact form → orchasson@gmail.com)
- ✅ Google Analytics integrated
- ✅ CI/CD pipeline configured
- ✅ Deployment ready (Vercel/Netlify)

### Development Workflow

```
1. Frontend Architect
   └─ Setup project structure
   └─ Create design system
   └─ Build layout components

2. Parallel: Gallery Specialist + Backend Developer
   ├─ Gallery Specialist
   │  └─ Build carousels
   │  └─ Image optimization
   │
   └─ Backend Developer
      └─ Admin panel
      └─ API endpoints
      └─ Form handler

3. Integration Engineer
   └─ Integrate all components
   └─ Setup deployment
   └─ Configure analytics

4. ✅ COMPLETE - Ready for Testing
```

---

## Testing Crew

### What It Does

The Testing Crew validates that your website meets all quality, UX, and security standards.

| Agent | Role | Tests |
|-------|------|-------|
| **UI Tester** | Visual & Component Tests | Component rendering, responsiveness, cross-browser |
| **Integration Tester** | Feature Tests | Workflows, forms, gallery, contact |
| **UX Tester** | Experience & Performance | Speed, usability, accessibility |
| **Security Tester** | Security & Compliance | Vulnerabilities, data protection, HTTPS |

### Running Testing Crew

**Option 1: Full Testing Pipeline**

```bash
cd src/crews
python run_crews.py test
```

This runs all testing tasks:
1. UI Component Tests
2. Responsive Design Tests
3. Cross-Browser Tests
4. Integration Workflows
5. Form Validation
6. Performance Tests
7. Accessibility Tests
8. Usability Tests
9. Security Tests
10. Summary & Sign-Off

**Option 2: Run Specific Test Agent**

Edit `src/crews/testing_crew.py` and run only what you need.

**Option 3: Manual Execution**

```python
from testing_crew import create_testing_crew

crew = create_testing_crew()
result = crew.kickoff()
print(result)
```

### Testing Crew Output

When complete, you'll receive:
- ✅ UI Component Test Report (design system compliance)
- ✅ Responsive Design Report (mobile, tablet, desktop)
- ✅ Cross-Browser Compatibility Report
- ✅ Integration Workflow Results
- ✅ Form Validation Report
- ✅ Performance Report (Lighthouse scores)
- ✅ Accessibility Report (WCAG AA compliance)
- ✅ Usability Report (UX recommendations)
- ✅ Security Report (vulnerabilities found and fixed)
- ✅ Final Sign-Off (Ready for Production / Needs Work)

### Testing Scenarios

#### UI Testing
```
✓ Navigation renders correctly (desktop, tablet, mobile)
✓ All buttons styled properly
✓ Gallery carousels display images at correct sizes
✓ Forms have proper styling and interactions
✓ Colors match design system exactly
✓ Typography is correct and readable
```

#### Integration Testing
```
✓ User can browse galleries without errors
✓ Gallery carousel prev/next buttons work
✓ Contact form validates and submits
✓ Email arrives at orchasson@gmail.com
✓ Admin can login and manage galleries
✓ Admin can upload/delete images
✓ Images appear/disappear from gallery correctly
✓ WhatsApp links open properly
✓ Instagram links open in new tab
```

#### UX Testing
```
✓ Page loads quickly (< 3 seconds on mobile 4G)
✓ Scrolling is smooth and responsive
✓ Navigation is intuitive
✓ "Book Now" buttons are prominent
✓ Forms are easy to fill
✓ No broken links or images
✓ Site is mobile-friendly
```

#### Security Testing
```
✓ HTTPS enforced
✓ Form inputs validated server-side
✓ XSS attacks prevented
✓ SQL injection attempts prevented
✓ Rate limiting on form submissions
✓ Admin authentication required
✓ Uploaded files validated
✓ No sensitive data in logs
✓ Privacy policy present
```

---

## Full Pipeline (Development + Testing)

### Run Everything

To run the complete pipeline (build + test), use:

```bash
cd src/crews
python run_crews.py all
```

This:
1. Runs Development Crew (builds website)
2. Runs Testing Crew (validates everything)
3. Provides final sign-off

**Timeline**: 
- Development: 2-4 hours (depending on complexity)
- Testing: 1-2 hours
- Total: 3-6 hours

### Pipeline Flow

```
START
  │
  ├─→ DEVELOPMENT CREW
  │   ├─→ Setup
  │   ├─→ Build Components
  │   ├─→ Build Admin Panel
  │   ├─→ Build API
  │   └─→ Deploy Configuration
  │
  ├─→ TESTING CREW
  │   ├─→ UI Tests
  │   ├─→ Integration Tests
  │   ├─→ UX & Performance Tests
  │   ├─→ Security Tests
  │   └─→ Final Sign-Off
  │
  └─→ READY FOR PRODUCTION
```

---

## Interpreting Results

### Development Crew Success Criteria

**All tasks completed:**
- [ ] Project setup successful
- [ ] Components built and tested
- [ ] Admin panel functional
- [ ] API endpoints working
- [ ] Email integration working
- [ ] Analytics configured
- [ ] Deployment ready

### Testing Crew Success Criteria

**Tests passing:**
- [ ] UI Component Tests: PASS
- [ ] Responsive Design: PASS
- [ ] Cross-Browser: PASS
- [ ] Integration Workflows: PASS
- [ ] Form Validation: PASS
- [ ] Performance: PASS (scores > 80)
- [ ] Accessibility: PASS (WCAG AA)
- [ ] Usability: PASS
- [ ] Security: PASS (no critical issues)

### Sign-Off Status

- **✅ PASS**: Site ready for production
- **⚠️ CONDITIONAL PASS**: Ready with fixes applied
- **❌ FAIL**: Major issues found, needs rework
- **📊 PASS WITH MONITORING**: Ready but monitor key metrics

---

## Customizing the Crews

### Add New Development Task

Edit `src/crews/development_crew.py`:

```python
def create_development_tasks():
    tasks = {
        # ... existing tasks ...
        
        "new_task": Task(
            description="Your task description here",
            agent=frontend_architect,  # or other agent
            expected_output="What should be completed"
        )
    }
    return tasks
```

### Add New Test

Edit `src/crews/testing_crew.py`:

```python
def create_testing_tasks():
    tasks = {
        # ... existing tests ...
        
        "new_test": Task(
            description="Your test description here",
            agent=ui_tester,  # or other tester
            expected_output="Test results format"
        )
    }
    return tasks
```

---

## Troubleshooting

### Crew Won't Start

**Error**: `ModuleNotFoundError: No module named 'crewai'`

**Fix**:
```bash
pip install crewai crewai-tools
```

### Crew Hangs or Crashes

**Issue**: Crew stops responding or crashes mid-task

**Solutions**:
1. Check API keys (if using external APIs)
2. Ensure internet connection
3. Run with verbose output: `crew = create_development_crew(); result = crew.kickoff()`
4. Check Python version (requires 3.8+)

### Agent Can't Find Files

**Issue**: `FileNotFoundError` when agent tries to access files

**Fix**: Ensure you're in the correct directory:
```bash
cd "C:\Users\orCha\projects\Or Paull Photography"
```

### Memory Issues

**Issue**: Crew uses too much memory or crashes

**Solutions**:
1. Close other applications
2. Break large tasks into smaller ones
3. Run in smaller batches (dev crew first, then testing)

---

## Running Crews in Production

### Automated Pipeline

Once configured, you can run the full pipeline automatically:

```bash
# Run everything and generate report
python src/crews/run_crews.py all > build_report.txt 2>&1
```

### Continuous Integration

Integrate with GitHub Actions:

```yaml
# .github/workflows/build-test.yml
name: Build & Test

on: [push, pull_request]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.10'
      - run: pip install crewai crewai-tools
      - run: python src/crews/run_crews.py all
```

---

## Next Steps

1. **Setup Environment**
   - [ ] Create virtual environment
   - [ ] Install dependencies
   - [ ] Verify CrewAI installation

2. **Run Development Crew**
   - [ ] Execute `python run_crews.py dev`
   - [ ] Review generated code and files
   - [ ] Fix any issues

3. **Run Testing Crew**
   - [ ] Execute `python run_crews.py test`
   - [ ] Review test results
   - [ ] Fix any failing tests

4. **Deploy**
   - [ ] Push to GitHub (if using version control)
   - [ ] Deploy to Vercel/Netlify
   - [ ] Verify live site

5. **Monitor**
   - [ ] Monitor performance metrics
   - [ ] Check analytics data
   - [ ] Gather user feedback

---

## Summary

The CrewAI crews automate the building and testing of your photography website. Use them to:
- 🚀 **Build** rapidly with specialized agents
- 🧪 **Test** thoroughly across all dimensions
- ✅ **Validate** quality before launch
- 📊 **Monitor** performance and user experience

For questions, refer back to the crew configuration in `.claude/crewai_config.md`.

