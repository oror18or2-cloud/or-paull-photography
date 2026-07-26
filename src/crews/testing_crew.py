"""
Or Paull Photography - Testing Crew
Handles all testing: UI tests, integration tests, UX tests, security tests
"""

from crewai import Agent, Task, Crew
import json

# Testing Crew Agents

ui_tester = Agent(
    role="UI/Component Tester",
    goal="Ensure all components render correctly and consistently across browsers and devices",
    backstory="""You are a QA specialist focused on visual and component testing.
    Meticulous about pixel-perfect implementation and cross-browser compatibility.
    You use automated screenshot testing and manual verification.
    You catch design deviations, color mismatches, and responsive design issues.""",
    verbose=True,
    allow_delegation=False
)

integration_tester = Agent(
    role="Integration & Functionality Tester",
    goal="Verify all features work together seamlessly and user workflows complete successfully",
    backstory="""You are an integration testing specialist who understands the full user journey.
    You test workflows from initial page load to booking completion.
    You ensure data flows correctly through the system and nothing breaks.""",
    verbose=True,
    allow_delegation=False
)

ux_tester = Agent(
    role="UX & User Experience Tester",
    goal="Ensure the site is intuitive, fast, and delightful to use",
    backstory="""You are a UX researcher and designer. You test from the user's perspective.
    Does everything make sense? Is it fast? Is it enjoyable? You identify friction points
    and suggest improvements. You care about the human experience.""",
    verbose=True,
    allow_delegation=False
)

security_tester = Agent(
    role="Security & Compliance Tester",
    goal="Ensure the site is secure, compliant with standards, and protects user data",
    backstory="""You are a security-focused QA engineer. You test for common vulnerabilities,
    data protection, and compliance with privacy standards.
    User data security is your top priority. You think like a hacker to find weaknesses.""",
    verbose=True,
    allow_delegation=False
)


# Testing Tasks

def create_testing_tasks():
    """Create all testing tasks for the crew"""

    tasks = {
        "ui_component_tests": Task(
            description="""
            Test all UI components for visual correctness and consistency:

            Test Cases:
            1. Navigation menu
               - [ ] Renders correctly on desktop (full menu)
               - [ ] Mobile hamburger menu works
               - [ ] Active link is highlighted
               - [ ] Hover states work
               - [ ] All links navigate correctly

            2. Buttons
               - [ ] Primary buttons look correct (Dark Brown background)
               - [ ] Secondary buttons render properly
               - [ ] CTA buttons are prominent
               - [ ] Hover/focus states visible
               - [ ] Touch targets 48×48px minimum

            3. Forms
               - [ ] Input fields render with correct styling
               - [ ] Labels are associated and visible
               - [ ] Placeholder text is visible
               - [ ] Focus states are clear
               - [ ] Error states display properly

            4. Cards
               - [ ] Proper background color (Warm White)
               - [ ] Border color matches design (Soft Blush Pink)
               - [ ] Padding and spacing correct
               - [ ] Shadow effects render properly
               - [ ] Hover effects work smoothly

            5. Typography
               - [ ] H1, H2, H3 sizes correct (check design system)
               - [ ] Font family renders (Playfair Display for headers, Inter for body)
               - [ ] Line height and letter spacing correct
               - [ ] Color contrast passes WCAG AA (4.5:1)
               - [ ] No broken or missing fonts

            6. Color Palette
               - [ ] Light Brown (#D4C4B9) renders correctly
               - [ ] Dark Brown (#5C4A42) renders correctly
               - [ ] Soft Blush Pink (#E8D5D1) renders correctly
               - [ ] Warm White background (#FAFAF8)
               - [ ] All colors match hex values

            Report Format:
            - Component: [name]
            - Status: PASS / FAIL
            - Issues: [any visual inconsistencies]
            - Screenshots: [attach before/after if issues]
            """,
            agent=ui_tester,
            expected_output="Comprehensive UI component test report with visual verification"
        ),

        "responsive_design_tests": Task(
            description="""
            Test responsive design across all breakpoints:

            Breakpoints to Test:
            1. Mobile (375px) - iPhone SE
               - [ ] Navigation hamburger menu visible and functional
               - [ ] Gallery carousels display at 100% width
               - [ ] Images scale properly
               - [ ] Text doesn't overflow
               - [ ] All buttons easily tappable (48×48px)
               - [ ] Forms stack vertically
               - [ ] No horizontal scrolling

            2. Tablet (768px) - iPad
               - [ ] Navigation transitions from hamburger to horizontal
               - [ ] Gallery carousels display nicely
               - [ ] Two-column layouts work
               - [ ] Spacing scales appropriately
               - [ ] Images display at optimal size

            3. Desktop (1280px+) - Full desktop
               - [ ] Full navigation menu visible
               - [ ] Gallery carousels large and impressive
               - [ ] Multi-column layouts work
               - [ ] Generous spacing and breathing room
               - [ ] No content takes up entire screen (max-width constraints)

            Test Devices:
            - Chrome DevTools (mobile, tablet, desktop views)
            - iOS Safari (iPhone)
            - Android Chrome (various sizes)
            - Firefox
            - Safari (macOS if available)

            Report Format:
            - Breakpoint: [375px / 768px / 1280px]
            - Device: [specific device]
            - Issue: [describe any layout problems]
            - Status: PASS / FAIL
            """,
            agent=ui_tester,
            expected_output="Responsive design test report for all breakpoints"
        ),

        "cross_browser_tests": Task(
            description="""
            Test across different browsers for compatibility:

            Browsers to Test:
            1. Chrome (latest)
               - [ ] All features work
               - [ ] CSS renders correctly
               - [ ] No console errors

            2. Firefox (latest)
               - [ ] All features work
               - [ ] CSS renders correctly
               - [ ] No console errors

            3. Safari (latest)
               - [ ] All features work
               - [ ] CSS renders correctly
               - [ ] No console errors

            4. Edge (latest)
               - [ ] All features work
               - [ ] CSS renders correctly
               - [ ] No console errors

            5. Mobile Browsers
               - [ ] iOS Safari
               - [ ] Android Chrome

            Test Focus:
            - CSS compatibility (grid, flexbox, custom properties)
            - JavaScript functionality
            - Image rendering
            - Font rendering
            - Form inputs
            - Animations/transitions

            Report Format:
            - Browser: [name and version]
            - Status: PASS / FAIL
            - Issues: [any browser-specific problems]
            - Workarounds needed: [yes/no]
            """,
            agent=ui_tester,
            expected_output="Cross-browser compatibility test report"
        ),

        "integration_workflow_tests": Task(
            description="""
            Test complete user workflows end-to-end:

            Test Workflow 1: Gallery Browsing
            1. [ ] User lands on home page
            2. [ ] Page loads within 3 seconds
            3. [ ] Navigation menu is visible and clickable
            4. [ ] User scrolls to gallery section
            5. [ ] Gallery carousel displays images
            6. [ ] Previous/Next buttons work
            7. [ ] Dot indicators work (click to jump)
            8. [ ] Swipe works on mobile
            9. [ ] All 5 gallery categories load correctly
            10. [ ] Images display at correct aspect ratio

            Test Workflow 2: Contact Form Submission
            1. [ ] User scrolls to contact section
            2. [ ] Contact form is visible
            3. [ ] Form fields are empty and ready
            4. [ ] User fills in name, phone, email, message
            5. [ ] Form validates input (email format, etc.)
            6. [ ] User clicks submit
            7. [ ] Form submission is processed
            8. [ ] Success message displays
            9. [ ] Email arrives at orchasson@gmail.com
            10. [ ] Form clears or shows confirmation

            Test Workflow 3: WhatsApp Booking
            1. [ ] User finds "Book Now" buttons
            2. [ ] User clicks WhatsApp button
            3. [ ] WhatsApp opens (mobile) or shows link (desktop)
            4. [ ] Conversation is pre-filled with contact info
            5. [ ] User can type message and send

            Test Workflow 4: Social Links
            1. [ ] Instagram link is visible (footer/header)
            2. [ ] Instagram link opens in new tab
            3. [ ] Instagram profile loads correctly
            4. [ ] WhatsApp link works throughout site

            Test Workflow 5: Admin Panel
            1. [ ] Admin can login
            2. [ ] Gallery management page loads
            3. [ ] Admin can upload new image
            4. [ ] Image appears in gallery after upload
            5. [ ] Admin can delete image
            6. [ ] Gallery updates without broken images
            7. [ ] Admin can edit content sections
            8. [ ] Changes appear on live site

            Report Format:
            - Workflow: [name]
            - Steps Tested: [1-10]
            - Status: PASS / FAIL
            - Errors: [if any]
            - Data verified: [what was checked]
            """,
            agent=integration_tester,
            expected_output="Complete integration workflow test results"
        ),

        "form_validation_tests": Task(
            description="""
            Test all form validation and error handling:

            Contact Form Tests:
            1. Name field
               - [ ] Empty submission rejected
               - [ ] Minimum length enforced (e.g., 2 chars)
               - [ ] Special characters handled
               - [ ] Error message shows clearly

            2. Phone field
               - [ ] Empty submission rejected
               - [ ] Valid phone formats accepted
               - [ ] Invalid formats rejected
               - [ ] International numbers handled
               - [ ] Error message shows clearly

            3. Email field
               - [ ] Empty submission rejected
               - [ ] Valid emails accepted
               - [ ] Invalid formats rejected (missing @, etc.)
               - [ ] Error message shows clearly
               - [ ] Email validation is secure (no injection)

            4. Message field
               - [ ] Empty submission rejected
               - [ ] Minimum length enforced (e.g., 10 chars)
               - [ ] Maximum length enforced (e.g., 1000 chars)
               - [ ] HTML/script tags handled safely
               - [ ] Emoji/unicode handled

            5. Form Submission
               - [ ] All fields required
               - [ ] One missing field prevents submission
               - [ ] Error summary shows all issues
               - [ ] Successful submission clears form
               - [ ] Successful submission shows confirmation

            Test Cases:
            - [ ] Submit empty form → errors
            - [ ] Submit name only → errors
            - [ ] Submit with fake email → error
            - [ ] Submit with invalid phone → error
            - [ ] Submit valid data → success
            - [ ] Submit with XSS attempt → safely escaped
            - [ ] Submit with SQL injection attempt → safely escaped
            """,
            agent=integration_tester,
            expected_output="Form validation test report"
        ),

        "performance_tests": Task(
            description="""
            Test website performance and speed:

            Page Load Performance
            1. [ ] First Contentful Paint (FCP) < 1.5s on mobile 4G
            2. [ ] Largest Contentful Paint (LCP) < 2.5s on mobile 4G
            3. [ ] Cumulative Layout Shift (CLS) < 0.1 (no unexpected jumps)
            4. [ ] Total page size < 5MB (including images)
            5. [ ] Images load lazily (not all at once)

            Scrolling Performance
            1. [ ] Smooth scrolling (60 FPS, no jank)
            2. [ ] Gallery carousel transitions smooth
            3. [ ] No lag when scrolling through galleries
            4. [ ] Mobile scrolling responsive (no delays)

            Interaction Performance
            1. [ ] Button clicks respond instantly (no delay)
            2. [ ] Form inputs respond instantly
            3. [ ] Navigation menu opens immediately
            4. [ ] Gallery navigation (prev/next) responds instantly

            Testing Tools
            - Google Lighthouse (Chrome DevTools)
            - WebPageTest
            - GTmetrix
            - Mobile DevTools throttling (3G/4G simulation)

            Report Format:
            - Metric: [FCP, LCP, CLS, etc.]
            - Desktop Score: [value]
            - Mobile Score: [value]
            - Status: PASS / FAIL (acceptable thresholds)
            - Recommendations: [improvements if needed]
            """,
            agent=ux_tester,
            expected_output="Performance test report with scores and recommendations"
        ),

        "accessibility_tests": Task(
            description="""
            Test website accessibility and usability:

            Keyboard Navigation
            1. [ ] Tab key cycles through all interactive elements
            2. [ ] Tab order is logical (left to right, top to bottom)
            3. [ ] Focus indicators are visible (not hidden)
            4. [ ] Can navigate entire site with keyboard only
            5. [ ] Enter key submits forms
            6. [ ] Escape key closes menus/modals

            Screen Reader Testing (basic)
            1. [ ] Page structure makes sense when read aloud
            2. [ ] Headings are properly marked (H1, H2, H3)
            3. [ ] Images have descriptive alt text
            4. [ ] Form labels are associated with inputs
            5. [ ] Links have descriptive text (not "click here")
            6. [ ] Buttons are labeled properly

            Color & Contrast
            1. [ ] Text has sufficient contrast (4.5:1 for body text)
            2. [ ] Dark Brown (#5C4A42) on Warm White (#FAFAF8) passes
            3. [ ] Buttons are distinguishable by more than color
            4. [ ] Error messages don't rely on color alone

            Responsive Text
            1. [ ] Font size never below 16px
            2. [ ] Text remains readable on all screen sizes
            3. [ ] Line height is adequate (1.5+)
            4. [ ] Letter spacing is readable

            Testing Tools
            - Chrome/Firefox accessibility audits
            - WAVE browser extension
            - Axe DevTools
            - Screen reader (NVDA, JAWS, or VoiceOver)
            - Manual keyboard testing

            Report Format:
            - Issue: [describe accessibility problem]
            - Severity: Critical / High / Medium / Low
            - WCAG Level: A / AA / AAA
            - How to Fix: [suggestion]
            """,
            agent=ux_tester,
            expected_output="Accessibility test report (WCAG AA compliance check)"
        ),

        "usability_tests": Task(
            description="""
            Test website usability from user perspective:

            User Clarity Tests
            1. [ ] Purpose of website is immediately clear
            2. [ ] How to book is obvious (not hidden)
            3. [ ] Gallery navigation is intuitive
            4. [ ] Contact options are easy to find
            5. [ ] Navigation menu makes sense
            6. [ ] Buttons are clearly clickable (look like buttons)
            7. [ ] Error messages are helpful (not cryptic)
            8. [ ] Success messages confirm action

            Mobile Experience
            1. [ ] Touch targets are large enough (48×48px minimum)
            2. [ ] No horizontal scrolling needed
            3. [ ] Hamburger menu is easy to find
            4. [ ] Gallery carousel easy to swipe
            5. [ ] Form inputs don't trigger zoom (16px font minimum)
            6. [ ] Buttons are easy to tap

            Visual Design
            1. [ ] Design feels professional and elegant
            2. [ ] Not cluttered or overwhelming
            3. [ ] Photography is the focal point
            4. [ ] Branding is consistent throughout
            5. [ ] Color palette is cohesive and warm
            6. [ ] Typography is readable and professional

            Conversion Funnel
            1. [ ] New visitor quickly understands what you do
            2. [ ] Galleries showcase best work
            3. [ ] Pricing is clear
            4. [ ] Call-to-action buttons are prominent
            5. [ ] Contact methods are easy to use
            6. [ ] Instagram link is easy to find

            Report Format:
            - Test: [description]
            - Result: Intuitive / Confusing / Needs Work
            - Observation: [user feedback]
            - Recommendation: [improvement if needed]
            """,
            agent=ux_tester,
            expected_output="Usability test report with UX recommendations"
        ),

        "security_tests": Task(
            description="""
            Test website security and data protection:

            Form Security
            1. [ ] Form inputs validate server-side (not just client)
            2. [ ] HTML/script injection attempts are escaped
            3. [ ] SQL injection attempts are prevented
            4. [ ] XSS (Cross-Site Scripting) attacks are prevented
            5. [ ] CSRF (Cross-Site Request Forgery) tokens present
            6. [ ] Rate limiting prevents form spam

            Data Protection
            1. [ ] Passwords hashed securely (if applicable)
            2. [ ] Contact form data not logged in plain text
            3. [ ] Email addresses validated and stored safely
            4. [ ] Phone numbers validated
            5. [ ] Sensitive data never in URL parameters
            6. [ ] No sensitive data in browser console/local storage

            HTTPS & Encryption
            1. [ ] HTTPS enforced (no HTTP)
            2. [ ] SSL certificate valid
            3. [ ] All resources loaded over HTTPS
            4. [ ] Mixed content warnings (none should appear)

            Admin Panel Security
            1. [ ] Admin login requires authentication
            2. [ ] Session timeout after inactivity
            3. [ ] Password meets security standards (minimum complexity)
            4. [ ] Admin actions are logged
            5. [ ] Only authenticated admins can access

            File Upload Security
            1. [ ] File type validation (only images allowed)
            2. [ ] File size limits enforced
            3. [ ] Filenames sanitized (no path traversal)
            4. [ ] No executable files allowed
            5. [ ] Uploaded files scanned for malware (if possible)

            API Security
            1. [ ] API endpoints validate all inputs
            2. [ ] API rate limiting prevents abuse
            3. [ ] API authentication required (if admin endpoint)
            4. [ ] API errors don't leak sensitive info

            Compliance
            1. [ ] Privacy policy present (even if placeholder)
            2. [ ] Google Analytics doesn't track PII
            3. [ ] Cookie consent (if cookies used)
            4. [ ] Basic GDPR compliance (EU users)

            Report Format:
            - Test: [security check]
            - Status: PASS / FAIL / WARNING
            - Severity: Critical / High / Medium / Low
            - Description: [what was found]
            - How to Fix: [remediation steps]
            """,
            agent=security_tester,
            expected_output="Security test report with vulnerabilities and fixes"
        ),

        "final_testing_summary": Task(
            description="""
            Create comprehensive testing summary and sign-off:

            1. Compile all test results
               - UI Component tests: [PASS/FAIL]
               - Responsive design: [PASS/FAIL]
               - Cross-browser: [PASS/FAIL]
               - Integration workflows: [PASS/FAIL]
               - Form validation: [PASS/FAIL]
               - Performance: [PASS/FAIL]
               - Accessibility: [PASS/FAIL]
               - Usability: [PASS/FAIL]
               - Security: [PASS/FAIL]

            2. Critical issues found: [count]
               - List each critical issue with fix status

            3. High priority issues: [count]
               - List each high priority issue with fix status

            4. Medium/Low issues: [count]
               - List each medium/low issue with fix status

            5. Testing coverage:
               - Features tested: [X%]
               - Browsers tested: [list]
               - Devices tested: [list]
               - Edge cases covered: [yes/no]

            6. Recommendation:
               - PASS: Site ready for production
               - CONDITIONAL PASS: Ready with fixes applied
               - FAIL: Not ready, needs major work
               - PASS WITH MONITORING: Ready but monitor metrics

            7. Next steps:
               - Address any remaining issues
               - Monitor production metrics
               - Gather user feedback
               - Plan improvements for next version
            """,
            agent=security_tester,
            expected_output="Final comprehensive testing summary and sign-off"
        )
    }

    return tasks


def create_testing_crew():
    """Create the testing crew"""

    tasks = create_testing_tasks()

    # Create crew with all agents and tasks
    crew = Crew(
        agents=[
            ui_tester,
            integration_tester,
            ux_tester,
            security_tester
        ],
        tasks=list(tasks.values()),
        verbose=True
    )

    return crew


if __name__ == "__main__":
    # Run testing crew
    crew = create_testing_crew()
    result = crew.kickoff()
    print("\n" + "="*50)
    print("TESTING CREW COMPLETE")
    print("="*50)
    print(result)
