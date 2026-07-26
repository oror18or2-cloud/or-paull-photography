"""
Or Paull Photography - Development Crew
Handles all development tasks for the website
"""

from crewai import Agent, Task, Crew
from crewai_tools import Tool
import json

# Development Crew Agents

frontend_architect = Agent(
    role="Frontend Architect",
    goal="Design and build responsive, elegant React components following the Taste framework design system",
    backstory="""You are an expert front-end engineer specializing in photography portfolio sites.
    Passionate about creating pixel-perfect, accessible UIs. You know responsive design, accessibility
    standards, and modern CSS. Your designs don't look generic—they're refined and purposeful.""",
    verbose=True,
    allow_delegation=False
)

gallery_specialist = Agent(
    role="Gallery & Image Specialist",
    goal="Build stunning, performant image galleries and carousels that showcase photography beautifully",
    backstory="""You are a photography enthusiast and web developer who understands how to present visual content.
    Expert in image optimization, lazy loading, and carousel UX patterns. You make images look their absolute best
    while keeping performance optimal.""",
    verbose=True,
    allow_delegation=False
)

backend_developer = Agent(
    role="Backend & Admin Panel Developer",
    goal="Build admin panel for easy gallery management and implement email form submission",
    backstory="""You are a full-stack developer experienced in building admin dashboards and serverless APIs.
    You know how to create simple, user-friendly interfaces for non-technical users.
    Security and ease-of-use are your priorities.""",
    verbose=True,
    allow_delegation=False
)

integration_engineer = Agent(
    role="Integration & Deployment Engineer",
    goal="Integrate all components and deploy to Vercel/Netlify with proper CI/CD",
    backstory="""You are a DevOps and deployment specialist. Expert in serverless architectures, CI/CD pipelines,
    and deployment best practices. You ensure smooth integration and zero-downtime deployments.""",
    verbose=True,
    allow_delegation=False
)


# Development Tasks

def create_development_tasks():
    """Create all development tasks for the crew"""

    tasks = {
        "setup_project": Task(
            description="""
            Set up the project structure for Or Paull Photography website:
            1. Initialize Next.js/React project with proper structure
            2. Set up design system files (CSS variables for colors, typography, spacing)
            3. Create component directory structure
            4. Set up environment variables (.env.example)
            5. Configure package.json with dependencies

            Use the DESIGN_SYSTEM.md as reference for all specifications.
            """,
            agent=frontend_architect,
            expected_output="Project structure ready with design system implemented"
        ),

        "build_layout_components": Task(
            description="""
            Build core layout components following the design system:
            1. Navigation bar (sticky, responsive with hamburger menu)
            2. Hero/Welcome section
            3. Section containers with proper spacing
            4. Footer component
            5. Responsive grid system

            Requirements:
            - Use design system colors and typography
            - Mobile-first responsive design
            - Accessibility standards (proper semantic HTML, ARIA labels)
            - CSS architecture that's clean and maintainable
            """,
            agent=frontend_architect,
            expected_output="Reusable layout components ready for use"
        ),

        "build_ui_components": Task(
            description="""
            Build all reusable UI components from design system:
            1. Buttons (primary, secondary, CTA)
            2. Cards (for pricing, what's included, etc.)
            3. Form elements (input, textarea, select, checkbox)
            4. Dividers
            5. Typography components (H1-H3, body text, labels)
            6. Icon components

            Requirements:
            - Match design system specifications exactly
            - Proper hover/focus states
            - Accessibility (proper labels, semantic HTML)
            - Responsive and mobile-optimized
            """,
            agent=frontend_architect,
            expected_output="Complete component library ready for page building"
        ),

        "build_gallery_carousels": Task(
            description="""
            Build carousel components for the 5 photography galleries:
            1. Implement carousel with prev/next buttons
            2. Dot indicators for current image
            3. Smooth transitions between images
            4. Touch/swipe support for mobile
            5. Auto-fit 10 images per category

            Gallery categories:
            - Newborn Photography
            - Maternity Studio Sessions
            - Maternity Beach Sessions
            - Maternity Lake Sessions
            - Family Sessions

            Requirements:
            - Performant (lazy loading, proper image sizes)
            - Responsive (adjust height on mobile)
            - Keyboard accessible (arrow keys to navigate)
            - Mobile touch-friendly
            - No auto-play (user-controlled only)
            """,
            agent=gallery_specialist,
            expected_output="Working carousel components with proper image handling"
        ),

        "implement_image_optimization": Task(
            description="""
            Implement image optimization and performance:
            1. Set up lazy loading for all images
            2. Configure responsive image srcset/sizes
            3. Implement image preloading strategy
            4. Use Next.js Image component (if Next.js) or similar
            5. Configure image formats (WebP with fallbacks)
            6. Add image alt text template

            Requirements:
            - Images load on demand (not all at once)
            - Proper file sizes for different screen sizes
            - Fast perceived performance
            - No layout shift when images load
            """,
            agent=gallery_specialist,
            expected_output="Image optimization implemented, ready for actual photos"
        ),

        "build_admin_panel": Task(
            description="""
            Build admin panel for gallery and content management:
            1. Admin login page (simple auth)
            2. Gallery management dashboard
            3. Add/Edit/Delete images for each gallery
            4. Image upload form with preview
            5. Content editor for text sections (About, pricing, etc.)
            6. View submitted contact forms

            Requirements:
            - Simple and intuitive UI (non-technical users)
            - Image upload with validation (check file type, size)
            - Real-time preview of changes
            - Confirmation dialogs for destructive actions
            - Secure authentication
            - Data persistence (database or file storage)
            """,
            agent=backend_developer,
            expected_output="Working admin panel with CRUD operations"
        ),

        "build_backend_api": Task(
            description="""
            Build API endpoints for the website:
            1. Gallery management endpoints (GET, POST, PUT, DELETE)
            2. Content endpoints (GET/UPDATE for sections)
            3. Contact form submission endpoint
            4. Email sending integration
            5. Admin authentication endpoint

            Requirements:
            - RESTful API design
            - Proper error handling and validation
            - Security (validate all inputs, prevent injection)
            - Rate limiting on form submissions
            - Logging for debugging
            - Documentation for each endpoint
            """,
            agent=backend_developer,
            expected_output="API endpoints ready for integration"
        ),

        "build_contact_form": Task(
            description="""
            Build and integrate contact form:
            1. Create form component (name, phone, email, message fields)
            2. Form validation (required fields, email format, phone format)
            3. Error messages and success feedback
            4. Form submission to email (orchasson@gmail.com)
            5. Prevent spam (rate limiting)

            Requirements:
            - Client-side validation
            - Server-side validation
            - Clear error messages
            - Success confirmation message
            - Loading state during submission
            - No sensitive data in logs
            """,
            agent=backend_developer,
            expected_output="Working contact form with email integration"
        ),

        "integrate_analytics": Task(
            description="""
            Integrate Google Analytics:
            1. Set up Google Analytics 4 property
            2. Add GA tracking code
            3. Configure key events (page views, form submissions, button clicks)
            4. Test tracking is working
            5. Create dashboard for key metrics

            Requirements:
            - Track page views
            - Track "Book Now" button clicks
            - Track form submissions
            - Track gallery carousel interactions
            - Don't track PII (personally identifiable information)
            """,
            agent=integration_engineer,
            expected_output="Analytics fully configured and tracking"
        ),

        "setup_deployment": Task(
            description="""
            Set up deployment pipeline:
            1. Configure Vercel or Netlify
            2. Set up CI/CD pipeline (GitHub Actions or similar)
            3. Configure environment variables for production
            4. Set up staging environment
            5. Configure domain setup (orpaulphotography.com)
            6. Set up SSL/HTTPS

            Requirements:
            - Automatic deployment on git push
            - Staging environment for testing
            - Production environment for live site
            - Environment variable management
            - Backup and disaster recovery setup
            """,
            agent=integration_engineer,
            expected_output="Deployment pipeline ready, site deployable"
        ),

        "integrate_components": Task(
            description="""
            Integrate all components into complete website:
            1. Assemble pages from components
            2. Build page sections (Hero, About, Galleries, Info, Pricing, FAQ, Contact, Footer)
            3. Connect routing and navigation
            4. Test all page sections render correctly
            5. Verify responsive design across devices

            Requirements:
            - All sections accessible via navigation
            - Smooth scrolling between sections
            - Consistent styling across pages
            - No broken links
            - Mobile responsive throughout
            """,
            agent=integration_engineer,
            expected_output="Complete integrated website ready for testing"
        )
    }

    return tasks


def create_development_crew():
    """Create the development crew"""

    tasks = create_development_tasks()

    # Create crew with all agents and tasks
    crew = Crew(
        agents=[
            frontend_architect,
            gallery_specialist,
            backend_developer,
            integration_engineer
        ],
        tasks=list(tasks.values()),
        verbose=True
    )

    return crew


if __name__ == "__main__":
    # Run development crew
    crew = create_development_crew()
    result = crew.kickoff()
    print("\n" + "="*50)
    print("DEVELOPMENT CREW COMPLETE")
    print("="*50)
    print(result)
