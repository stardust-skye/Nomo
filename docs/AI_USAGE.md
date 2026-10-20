# AI Use Disclosure

## Policy

Nomo permits AI-assisted development using coding agents and AI-powered development tools, including ChatGPT Codex, Google Antigravity, and GitHub Copilot.

The project aims to make AI use transparent and preserve human responsibility for the code that is merged.

## Disclosure and transparency

AI-related development instructions and review configurations are maintained in version control where applicable.

- `AGENTS.md`: Instructions for coding agents.
- `.coderabbit.yaml`: Configuration for automated code review, if enabled.
- `.github/pull_request_template.md`: Disclosure and verification checklist for proposed changes.
- GitHub pull requests and commit history: Evidence of changes, discussion, review, and test results.

Only list files and tools that are actually used by this repository.

## Human verification

Before merging a change that used AI assistance, the contributor should:

1. Read and understand the proposed changes.
2. Check that the changes meet the project's requirements.
3. Run relevant automated tests and report the results.
4. Review security, privacy, error handling, and dependency changes where applicable.
5. Correct or reject output that is inaccurate, unsafe, or inconsistent with the project.
6. Disclose any remaining limitations or checks that could not be completed.

Automated review is supplementary. It does not replace human review or successful testing.

## Scope of AI assistance

Contributors should disclose material AI assistance with implementation, debugging, test generation, documentation, or architectural decisions. Routine editor features and minor text suggestions do not need individual disclosure unless required by a project's external policy.

## Accountability

The human contributor remains responsible for the submitted changes, including AI-assisted changes. The project does not claim that all AI-generated output is correct or that every contribution uses AI.

## Evidence

For individual changes, consult the associated pull request, review comments, CI results, and any relevant test or validation records. Do not claim that a review or test occurred unless there is evidence that it did.