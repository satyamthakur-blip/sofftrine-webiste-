# Security Headers Configuration Guide

## Overview
This document outlines recommended security headers for production deployment of the Softtrine website.

## Required Security Headers

### 1. Content Security Policy (CSP)
Prevents XSS attacks by controlling which resources can be loaded.

```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to https://cal.com; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https: blob:; 
  connect-src 'self' https://www.google-analytics.com https://va.tawk.to; 
  frame-src https://embed.tawk.to https://cal.com; 
  object-src 'none'; 
  base-uri 'self'; 
  form-action 'self';
```

### 2. Strict-Transport-Security (HSTS)
Forces HTTPS connections.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 3. X-Frame-Options
Prevents clickjacking attacks.

```
X-Frame-Options: SAMEORIGIN
```

### 4. X-Content-Type-Options
Prevents MIME type sniffing.

```
X-Content-Type-Options: nosniff
```

### 5. Referrer-Policy
Controls referrer information.

```
Referrer-Policy: strict-origin-when-cross-origin
```

### 6. Permissions-Policy
Controls browser features and APIs.

```
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
```

### 7. X-XSS-Protection
Enables XSS filter (legacy browsers).

```
X-XSS-Protection: 1; mode=block
```

### 8. Cross-Origin-Embedder-Policy (COEP)
Controls cross-origin resource loading.

```
Cross-Origin-Embedder-Policy: require-corp
```

### 9. Cross-Origin-Opener-Policy (COOP)
Isolates browsing context.

```
Cross-Origin-Opener-Policy: same-origin
```

### 10. Cross-Origin-Resource-Policy (CORP)
Controls cross-origin resource sharing.

```
Cross-Origin-Resource-Policy: cross-origin
```

## Implementation by Platform

### Netlify
Create `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://va.tawk.to; frame-src https://embed.tawk.to https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self';"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
    X-XSS-Protection = "1; mode=block"
```

### Vercel
Create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://va.tawk.to; frame-src https://embed.tawk.to https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self';"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://va.tawk.to; frame-src https://embed.tawk.to https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self';"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

### Nginx
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://embed.tawk.to https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://va.tawk.to; frame-src https://embed.tawk.to https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self';" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" always;
add_header X-XSS-Protection "1; mode=block" always;
```

## Testing Security Headers

### Online Tools
1. **Security Headers**: https://securityheaders.com/
2. **Mozilla Observatory**: https://observatory.mozilla.org/
3. **CSP Evaluator**: https://csp-evaluator.withgoogle.com/

### Browser DevTools
1. Open DevTools (F12)
2. Go to Network tab
3. Select any request
4. Check Response Headers

## Important Notes

1. **CSP 'unsafe-inline' and 'unsafe-eval'**: 
   - Currently required for React and third-party scripts
   - Consider using nonces or hashes in production for stricter CSP
   - Vite can generate CSP hashes during build

2. **HSTS Preloading**:
   - Submit to https://hstspreload.org/ after 24 hours of header deployment
   - Ensure all subdomains support HTTPS before preloading

3. **Testing Before Production**:
   - Use `Content-Security-Policy-Report-Only` header first
   - Monitor CSP violation reports
   - Gradually tighten policies

4. **Third-Party Scripts**:
   - Current CSP allows Google Analytics, Tawk.to, and Cal.com
   - Update CSP when adding new third-party services

5. **Frame-Ancestors**:
   - Add `frame-ancestors 'self'` to CSP if you want more control than X-Frame-Options

## Maintenance

- Review headers quarterly
- Update when adding new third-party services
- Monitor for new security best practices
- Test after any infrastructure changes

## Compliance

These headers help meet requirements for:
- PCI-DSS
- SOC 2
- ISO 27001
- GDPR
- HIPAA (with additional measures)
