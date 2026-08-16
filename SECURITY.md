# Security policy

Report vulnerabilities through the repository's private security advisory channel. Do not open a public issue containing exploit details, credentials, personal data, contact-form submissions, customer information, or investigative material.

The public website must not expose server-only environment variables, CRM webhook secrets, internal API credentials, session material, or source data. Contact endpoints require strict validation, bounded payloads, abuse controls, safe error responses, and secret-authenticated outbound integrations. Analytics and cookies must follow the published privacy position and applicable consent requirements.

Security reports should identify the affected route or component, sanitized reproduction steps, impact, and a safe remediation suggestion. Removing a committed secret from the current tree is not sufficient; revoke and rotate it and assess Git history and deployment logs.
