# Nomo

[![CI](https://github.com/stardust-skye/nomo/actions/workflows/ci.yml/badge.svg)](https://github.com/stardust-skye/nomo/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/stardust-skye/nomo/ci-metrics/ci-tests.json)](https://github.com/stardust-skye/nomo/actions/workflows/ci.yml)
[![JavaScript coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/stardust-skye/nomo/ci-metrics/ci-coverage.json)](https://github.com/stardust-skye/nomo/actions/workflows/ci.yml)

The test and coverage badges are updated by the `main` branch CI workflow from the
JUnit and V8 coverage reports produced by the tests on the latest commit.

Nomo is a gamified restaurant discovery platform that turns eating out into an ongoing journey rather than a series of disconnected restaurant searches — combining personalized recommendations, location-based exploration, gamification, and rewards.

**Core loop:** Discover → Visit → Complete → Earn → Unlock → Explore Further



## 🎬 Project Demo

Watch Nomo in action:

[▶️ Watch the Nomo Demo Video](https://drive.google.com/file/d/1C21V_6h4hnrj18iJf7XVyExx2dGDpPCt/view?usp=sharing)


---

## Repository structure

```
nomo/
├── apps/
│   ├── api/              # Backend service(s)
│   ├── mobile/           # Mobile client
│   └── web/               # Web client
├── packages/
│   ├── shared/            # Shared types, constants, utils
│   └── design-system/     # Shared UI components/tokens
├── infra/                 # IaC, deployment configs
├── docs/                  # Architecture docs, ADRs
└── .github/                # Workflows, issue/PR templates
```

Each app has its own README with setup instructions:
- [`apps/api/README.md`](./apps/api/README.md)
- [`apps/mobile/README.md`](./apps/mobile/README.md)
- [`apps/web/README.md`](./apps/web/README.md)

## Getting started

```bash
git clone https://github.com/stardust-skye/nomo.git
cd nomo
npm install
cp .env.example .env   # repeat inside each app directory as needed
```

Then follow the relevant app's README to run it locally.

## Contributing

Before opening a PR, read [`CONTRIBUTING.md`](./CONTRIBUTING.md) — it covers branching strategy, commit conventions, PR process, and CI/CD.

## Documentation

Comprehensive technical documentation is built with Sphinx and is present at the project's documentation site: https://stardust-skye.github.io/Nomo/

Locally, you can build and serve the documentation with the following commands:

* **Build documentation locally:**
  ```bash
  npm run docs
  ```
* **Serve documentation locally:**
  ```bash
  npm run docs:serve
  ```
  Then view at `http://localhost:8085`.

Key documentation chapters:
- [Contributing guide](./CONTRIBUTING.md)
- [Architecture Decision Records](./docs/adr)
- [Installation Guide](./INSTALL.md)
- [Third-Party Libraries & Licenses](./THIRD_PARTY_LIBRARIES.md)

## License

This project is licensed under the [MIT License](./LICENSE).

## AI Use and Human Review

Nomo supports transparent AI-assisted development. Agent instructions and applicable review-bot configurations are maintained in the repository. Contributors are expected to review AI-assisted changes, run relevant tests, and disclose material AI assistance in pull requests.

Automated review does not replace human judgment. See [AI Use Disclosure](docs/AI_USAGE.md) for the project's policy and verification practices.