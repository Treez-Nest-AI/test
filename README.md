# DevOps Practical Test

## Time Limit
You have **45 minutes** to complete this test.
- Start time will be communicated by the interviewer
- Submit your GitHub repo URL before time is up, even if incomplete

## Instructions
1. Clone or fork this repository to your local machine
2. Complete the following tasks
3. Push your completed work to your own GitHub repository
4. Submit your GitHub repo URL before time is up, even if incomplete

## App
- `GET /` → `{ status: 'ok', message: 'Reditx API running' }`
- `GET /health` → `{ status: 'healthy' }`
- Run locally: `cd app && npm install && npm test`

---

## Tasks

### Task 1 — Dockerfile (~15 min)
Write a production-ready `Dockerfile` in the root of this repo.

**Must-have:**
- Multi-stage build
- Pinned base image version (not `:latest`)
- App builds and runs correctly

**Nice-to-have (extra credit):**
- Run app as a non-root user
- Include a `HEALTHCHECK`

### Task 2 — GitHub Actions CI/CD (~20 min)
Create `.github/workflows/ci-cd.yml` that:
- Triggers on push to `main` and PRs to `main`
- Installs dependencies and runs tests
- Builds the Docker image
- Pushes image to a container registry of your choice (ECR, Docker Hub, GHCR, etc.)
- Tags image with git SHA

> **Note:** No registry credentials are provided in this environment. It's completely fine if the push step doesn't actually run — we're evaluating whether the workflow YAML is written correctly, not whether it executes successfully here.

### Task 3 — Bonus (remaining time)
Implement any **one** of the following:
- Trivy or Snyk image vulnerability scan step (a single scan step in the workflow is sufficient — you don't need to handle/fix findings)
- Dependency caching in CI
- `docker-compose.yml` for local dev
- Environment-based deploy (dev vs prod)

This section is optional and will not negatively affect your evaluation if skipped.