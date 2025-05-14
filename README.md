[![Docker CI/CD](https://github.com/${{github.repository_owner}}/glowup/actions/workflows/docker-deploy.yml/badge.svg)](https://github.com/${{github.repository_owner}}/glowup/actions)

# GlowUp

> _This line was added in a feature branch to demonstrate PR previews and CI/CD automation._

A spiritual growth application built with React, TypeScript, and Chakra UI.

## Environment Variables

- Copy `.env.example` to `.env` and fill in your values.
- Example variables:
  - `API_URL=https://api.example.com`
  - `NODE_ENV=production`
  - `REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXX-X`

### Using Environment Variables in Docker
- Build-time variables can be passed with `--build-arg` in the Dockerfile if needed.
- Runtime variables can be injected using cloud provider settings or Docker `-e` flags.

### Using Environment Variables in Cloud
- Set environment variables in your cloud provider's dashboard or deployment settings.
- For GitHub Actions, add secrets in your repository settings and reference them in workflows.

## Project Structure

The project follows an MVC architecture:
- Models: Data structures and business logic
- Views: React components for UI
- Controllers: Logic that connects models and views

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

This will start the development server at http://localhost:3000

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `build` directory.

## Deployment

You can preview the production build locally with:

```bash
npm install -g serve
serve -s build
```

For deployment, upload the contents of the `build` directory to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages, Firebase Hosting, etc.).

More info: [Create React App Deployment Guide](https://cra.link/deployment)

## Docker Deployment

This project includes a `Dockerfile` and Nginx configuration for production deployment.

### Build and Run Locally

```bash
docker build -t glowup-app .
docker run -p 80:80 glowup-app
```

### GitHub Actions CI/CD

A GitHub Actions workflow is provided at `.github/workflows/docker-deploy.yml` to automatically build and push the Docker image to GitHub Container Registry (GHCR) on every push to `main`.

#### How it works:
- On every push to `main`, the workflow builds the Docker image and pushes it to `ghcr.io/<your-username>/glowup:latest`.
- You can use this image for cloud deployment.

## Cloud Deployment

You can deploy the Docker image to any cloud provider that supports Docker containers, such as:
- **Azure Web App for Containers**
- **AWS Elastic Beanstalk / ECS**
- **Google Cloud Run**
- **DigitalOcean App Platform**

### Example: Deploy to Azure Web App for Containers

1. Create a Web App for Containers in Azure Portal.
2. Set the image source to `ghcr.io/<your-username>/glowup:latest`.
3. Configure startup command if needed (default is handled by Nginx).

### Example: Deploy to AWS ECS

1. Create an ECS cluster and task definition.
2. Use the image `ghcr.io/<your-username>/glowup:latest`.
3. Set up service and load balancer as needed.

## Preview Deployments (PR Previews)

- Every pull request automatically gets a preview deployment on DigitalOcean App Platform.
- **Automatic database provisioning:** Each preview gets its own managed PostgreSQL database, which is cleaned up when the PR closes.
- **Slack notifications:** Deploy and cleanup events are sent to your Slack channel.
- **Custom domains:** You can automate preview subdomains (e.g., `pr-123.glowup-preview.com`) using DigitalOcean or Route53 APIs in the workflow.
- See `.github/workflows/preview-deploy.yml` and `.do/app-preview.yaml` for details.
- **Secrets required:**
  - `DIGITALOCEAN_ACCESS_TOKEN`, `DOCR_REGISTRY`, `DOCR_USERNAME`, `DOCR_PASSWORD`, `SLACK_WEBHOOK_URL` (add in GitHub repo settings)

## Granular Environment Matrix (Staging, QA, Production)

- You can extend the main deploy workflow to use a matrix for `staging`, `qa`, and `production` environments.
- Use environment-specific secrets and manifests (e.g., `.env.staging`, `.env.qa`).
- Example matrix strategy in GitHub Actions:
  ```yaml
  strategy:
    matrix:
      environment: [staging, qa, production]
  ```
- Each environment can have its own cloud resources, secrets, and domains.

## Multi-Cloud Deployment

- **AWS ECS:** See `aws-ecs-task-definition.json` for a ready-to-use task definition.
- **Azure Web App for Containers:** Use the Docker image from GHCR or DOCR.
- **Google Cloud Run:** Deploy the Docker image directly from GHCR or DOCR.
- **DigitalOcean App Platform:** Use `.do/app-preview.yaml` for both preview and production deployments.

## Advanced Secrets & Multi-Environment Support

- Use GitHub Actions secrets for all sensitive data (API keys, DB URLs, etc.).
- Use `.env` files for local development and cloud provider dashboards for production/preview env vars.
- The workflows and manifests are designed to support multiple environments (production, preview, etc.).

## Code Quality & Linting

This project uses ESLint with TypeScript rules for code quality. To check and automatically fix lint issues, run:

```bash
npx eslint --fix src
```

All unused variables and imports should be removed for a clean codebase.

## Features

- Onboarding flow for new users
- Daily spiritual routines and habits
- Prayer timer and reflection journal
- Community engagement and challenges
- Content discovery for spiritual growth
- Personalized spiritual journey

## Tech Stack

- React 18.2.0
- TypeScript
- Chakra UI 2.10.6
- React Router
- React ApexCharts
- Framer Motion
- Swiper

## Note

This code was autogenerated by [Krisspy](https://krisspy.ai)
