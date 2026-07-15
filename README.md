# DevOps Practical Test

## Time Limit
You have **45 minutes** to complete this test.
- Start time will be communicated by the interviewer
- Submit your fork URL before time is up, even if incomplete

## Instructions
1. Clone or fork this repository to your local machine
2. Complete the following tasks
3. Push your completed work to your own GitHub repository
4. Submit your GitHub repo URL before time is up, even if incomplete

## Tasks

### Task 1 — Dockerfile
Write a production-ready `Dockerfile` in the root of this repo.
- Use a pinned base image version (not `:latest`)
- Multi-stage build
- Run app as non-root user
- Include a HEALTHCHECK

### Task 2 — GitHub Actions CI/CD
Create `.github/workflows/ci-cd.yml` that:
- Triggers on push to `main` and PRs to `main`
- Installs dependencies and runs tests
- Builds the Docker image
- Pushes image to a container registry of your choice (ECR, Docker Hub, GHCR, etc.)
- Tags image with git SHA

### Task 3 — Bonus
Implement any of the following:
- Trivy/Snyk image scan step
- Dependency caching in CI
- `docker-compose.yml` for local dev
- Environment-based deploy (dev vs prod)

## App
- `GET /` → `{ status: 'ok', message: 'Reditx API running' }`
- `GET /health` → `{ status: 'healthy' }`
- Run locally: `cd app && npm install && npm test`
EOF

echo "✅ Project structure created!"