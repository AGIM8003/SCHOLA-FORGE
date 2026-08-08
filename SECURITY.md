# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 15.0 | Yes |

## Reporting a Vulnerability

1. Do not open a public issue.
2. Send a description to agim@vertogroup.ai.
3. Include steps to reproduce the issue.
4. Allow reasonable time for a fix before public disclosure.

## Security Model

ScholaForge operates as a Node.js application running locally. The system does not expose network services, does not require elevated privileges and does not transmit data to external endpoints. All data processing occurs within the local runtime environment.

## Threat Model

The intended deployment environment is a local development or research workstation. The system processes test data only. Threats relating to production deployment, multi-user access, network-facing services and real student data are out of scope for this pre-release version.
