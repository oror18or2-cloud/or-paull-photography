"""
Or Paull Photography - Crew Runner
Execute development and testing crews
"""

import sys
from pathlib import Path
from development_crew import create_development_crew
from testing_crew import create_testing_crew


def run_development_crew():
    """Run the development crew"""
    print("\n" + "="*60)
    print("🚀 STARTING DEVELOPMENT CREW")
    print("="*60)
    print("\nDevelopment Crew Tasks:")
    print("1. Setup project structure")
    print("2. Build layout components")
    print("3. Build UI components")
    print("4. Build gallery carousels")
    print("5. Implement image optimization")
    print("6. Build admin panel")
    print("7. Build backend API")
    print("8. Build contact form")
    print("9. Integrate analytics")
    print("10. Setup deployment")
    print("11. Integrate components")
    print("\n" + "-"*60)

    try:
        crew = create_development_crew()
        result = crew.kickoff()

        print("\n" + "="*60)
        print("✅ DEVELOPMENT CREW COMPLETE")
        print("="*60)
        print("\nDevelopment Results:")
        print(result)
        return True

    except Exception as e:
        print(f"\n❌ Development Crew Error: {str(e)}")
        return False


def run_testing_crew():
    """Run the testing crew"""
    print("\n" + "="*60)
    print("🧪 STARTING TESTING CREW")
    print("="*60)
    print("\nTesting Crew Tasks:")
    print("1. UI Component Tests")
    print("2. Responsive Design Tests")
    print("3. Cross-Browser Tests")
    print("4. Integration Workflow Tests")
    print("5. Form Validation Tests")
    print("6. Performance Tests")
    print("7. Accessibility Tests")
    print("8. Usability Tests")
    print("9. Security Tests")
    print("10. Final Testing Summary")
    print("\n" + "-"*60)

    try:
        crew = create_testing_crew()
        result = crew.kickoff()

        print("\n" + "="*60)
        print("✅ TESTING CREW COMPLETE")
        print("="*60)
        print("\nTesting Results:")
        print(result)
        return True

    except Exception as e:
        print(f"\n❌ Testing Crew Error: {str(e)}")
        return False


def run_all_crews():
    """Run both development and testing crews"""
    print("\n" + "="*60)
    print("⚡ OR PAULL PHOTOGRAPHY WEBSITE")
    print("Development & Testing Pipeline")
    print("="*60)

    # Run development crew
    dev_success = run_development_crew()

    if not dev_success:
        print("\n⚠️  Development crew failed. Skipping testing crew.")
        return False

    # Run testing crew
    test_success = run_testing_crew()

    if test_success:
        print("\n" + "="*60)
        print("🎉 PIPELINE COMPLETE - READY FOR DEPLOYMENT")
        print("="*60)
        return True
    else:
        print("\n" + "="*60)
        print("⚠️  TESTING ISSUES FOUND - REVIEW AND FIX")
        print("="*60)
        return False


def main():
    """Main entry point"""
    if len(sys.argv) < 2:
        print("Usage: python run_crews.py [dev|test|all]")
        print("\nOptions:")
        print("  dev  - Run development crew only")
        print("  test - Run testing crew only")
        print("  all  - Run development then testing (full pipeline)")
        sys.exit(1)

    command = sys.argv[1].lower()

    if command == "dev":
        success = run_development_crew()
    elif command == "test":
        success = run_testing_crew()
    elif command == "all":
        success = run_all_crews()
    else:
        print(f"Unknown command: {command}")
        print("Use: dev, test, or all")
        sys.exit(1)

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
