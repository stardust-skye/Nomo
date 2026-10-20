# Coding Agent Instructions

## General rules

- Read the relevant documentation and existing implementation before making changes.
- Follow the existing architecture, coding conventions, and dependency policies.
- Make the smallest change that solves the stated problem.
- Do not invent APIs, test results, or implementation details.
- Do not expose secrets, credentials, personal data, or environment files.
- Do not disable tests or weaken validation to make a change pass.

## Verification

- Identify the tests relevant to the change.
- Run the applicable tests and checks.
- Report commands that passed, failed, or could not be run.
- Do not claim that code was tested if the tests were not executed.
- Review generated code for correctness, security, error handling, and maintainability.

## Reporting

When completing a task, summarize:
1. What changed.
2. Why the change was made.
3. Which tests and checks were run.
4. Any known limitations or unresolved concerns.