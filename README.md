# Aldra | SSO Web

[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Description

Main entry point for Single Sign-On (SSO).

## Installation and Usage

- Required tools to run this project:
  - Node.js and npm to run locally on a host machine

#### Running application locally on a host machine

- Install dependencies by running `npm install`
- Run one of the following commands:
  - `npm start` to start local development server
  - `npm run debug` to start local development server in debug mode

## Environment Variables

- `OIDC_ISSUER` - OIDC issuer URI
  - `http://localhost:8001` (default in development mode)
  - `https://www.id.{env}.alra.no` (must be used in production-like environments)
  - `https://www.id.alra.no` (must be used in production)
- `OIDC_CLIENT_ID` - OIDC client ID
- `OIDC_SCOPES` - OIDC scopes
- `LANDING_PAGE_WEB_URL` - landing-page-web URL

## Contributing

#### Branching Strategy

Whenever a new change is to be implemented, follow these steps:
  - Create a new branch from the `master` branch
  - Implement and commit changes
  - Create a pull request for code review

#### Commits

This repository uses conventional commmit format. In order to commit, follow these steps:
  - Stage files to be committed
  - Run `npm run commit` script

Avoid using `--no-verify` flag when making commits.
