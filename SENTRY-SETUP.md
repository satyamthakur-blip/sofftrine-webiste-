# Sentry Error Monitoring Integration Guide

## Overview
This guide walks through setting up Sentry for real-time error monitoring and performance tracking.

## Installation

```bash
npm install --save @sentry/react
```

## Configuration

### 1. Create Sentry Configuration File

Create `src/utils/sentry.js`:

```javascript
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const initSentry = () => {
  if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [
        new BrowserTracing(),
        new Sentry.Replay({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring
      
      // Session Replay
      replaysSessionSampleRate: 0.1, // 10% of sessions
      replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
      
      // Environment
      environment: import.meta.env.MODE,
      
      // Release tracking
      release: `softtrine@${import.meta.env.VITE_APP_VERSION || '1.0.0'}`,
      
      // Ignore certain errors
      ignoreErrors: [
        'ResizeObserver loop limit exceeded',
        'Non-Error promise rejection captured',
        'ChunkLoadError',
      ],
      
      // Sanitize data
      beforeSend(event, hint) {
        // Don't send events in development
        if (import.meta.env.DEV) {
          return null;
        }
        
        // Filter out sensitive data
        if (event.request) {
          delete event.request.cookies;
        }
        
        return event;
      },
    });
  }
};

export const captureException = (error, context = {}) => {
  Sentry.captureException(error, {
    extra: context,
  });
};

export const captureMessage = (message, level = 'info', context = {}) => {
  Sentry.captureMessage(message, {
    level,
    extra: context,
  });
};

export const setUser = (user) => {
  Sentry.setUser({
    id: user.id,
    email: user.email,
    username: user.username,
  });
};

export const addBreadcrumb = (breadcrumb) => {
  Sentry.addBreadcrumb(breadcrumb);
};
```

### 2. Update main.jsx

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { registerServiceWorker, promptPWAInstall } from './utils/pwa'
import { initSentry } from './utils/sentry'

// Initialize Sentry
initSentry();

// Register Service Worker for PWA
registerServiceWorker();
promptPWAInstall();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Sentry.ErrorBoundary 
        fallback={<ErrorFallback />}
        showDialog
      >
        <App />
      </Sentry.ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
)

// Error Fallback Component
function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-slate-600 mb-8">
          We've been notified and are working to fix this issue.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
```

### 3. Update .env.example

Add Sentry configuration:

```
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Tawk.to Live Chat
VITE_TAWK_PROPERTY_ID=your_property_id

# Cal.com Calendar
VITE_CAL_USERNAME=your-cal-username

# Sentry Error Monitoring
VITE_SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
VITE_APP_VERSION=1.0.0
```

### 4. Enhanced Error Boundary Component

Update `src/components/ErrorBoundary.jsx`:

```javascript
import React from 'react';
import * as Sentry from "@sentry/react";
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null,
      eventId: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log to Sentry
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Something went wrong
            </h1>
            
            <p className="text-slate-600 mb-8">
              We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-8 text-left">
                <summary className="cursor-pointer text-sm text-slate-500 mb-2">
                  Error Details (Dev Mode)
                </summary>
                <pre className="text-xs bg-slate-100 p-4 rounded-lg overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {this.state.eventId && (
              <button
                onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}
                className="mt-4 text-sm text-blue-600 hover:text-blue-700 underline"
              >
                Report this issue
              </button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 5. Add Performance Tracking

Create `src/utils/performance.js`:

```javascript
import * as Sentry from "@sentry/react";

export const trackPageLoad = (pageName) => {
  const transaction = Sentry.startTransaction({
    name: `Page Load: ${pageName}`,
    op: "pageload",
  });

  return () => transaction.finish();
};

export const trackApiCall = (endpoint, method = 'GET') => {
  const transaction = Sentry.startTransaction({
    name: `API: ${method} ${endpoint}`,
    op: "http.client",
  });

  return () => transaction.finish();
};

export const trackUserAction = (action, data = {}) => {
  Sentry.addBreadcrumb({
    category: "user-action",
    message: action,
    level: "info",
    data,
  });
};
```

## Usage Examples

### In Components

```javascript
import { captureException, addBreadcrumb } from '../utils/sentry';

try {
  // Your code
} catch (error) {
  captureException(error, {
    component: 'ContactForm',
    action: 'submit',
  });
}

// Track user actions
addBreadcrumb({
  category: 'navigation',
  message: 'User navigated to contact page',
  level: 'info',
});
```

### In API Calls

```javascript
import { trackApiCall, captureException } from '../utils/sentry';

const fetchData = async () => {
  const finishTracking = trackApiCall('/api/data', 'GET');
  
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    captureException(error, {
      endpoint: '/api/data',
      method: 'GET',
    });
    throw error;
  } finally {
    finishTracking();
  }
};
```

## Sentry Setup

1. **Create Account**: Go to https://sentry.io and sign up
2. **Create Project**: Select "React" as the platform
3. **Get DSN**: Copy the DSN from project settings
4. **Add to Environment**: Add DSN to `.env.local`:
   ```
   VITE_SENTRY_DSN=your-dsn-here
   ```

## Dashboard Configuration

### Recommended Alerts

1. **Error Rate Alert**
   - Trigger: Error rate > 1% over 5 minutes
   - Notify: Slack/Email

2. **Performance Alert**
   - Trigger: P95 response time > 3 seconds
   - Notify: Slack/Email

3. **User Impact Alert**
   - Trigger: > 10 users affected in 1 hour
   - Notify: Slack/Email/PagerDuty

### Custom Tags

Add custom tags for better filtering:

```javascript
Sentry.setTag("page", window.location.pathname);
Sentry.setTag("user_plan", "enterprise");
Sentry.setTag("feature_flag", "new_ui");
```

## Best Practices

1. **Don't Log Sensitive Data**: Never log passwords, tokens, or PII
2. **Use Context**: Add relevant context to errors
3. **Set User Info**: Identify users (without PII if possible)
4. **Filter Noise**: Ignore known non-critical errors
5. **Monitor Performance**: Track slow API calls and page loads
6. **Review Regularly**: Check Sentry dashboard daily
7. **Set Up Releases**: Track which version introduced errors
8. **Configure Source Maps**: Upload source maps for better stack traces

## Source Maps

Add to `vite.config.js`:

```javascript
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "your-org",
      project: "your-project",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true,
  },
});
```

## Integration with CI/CD

```bash
# In your build script
export SENTRY_AUTH_TOKEN=your-token
export SENTRY_ORG=your-org
export SENTRY_PROJECT=your-project

npm run build

# Sentry will automatically upload source maps
```

## Testing

```javascript
// Test error in development
import { captureException } from './utils/sentry';

captureException(new Error('Test error'), {
  test: true,
  environment: 'development'
});
```

## Maintenance

- Review error trends weekly
- Update ignored errors list as needed
- Monitor performance metrics
- Adjust sampling rates based on volume
- Keep Sentry SDK updated

## Support

- Documentation: https://docs.sentry.io/
- Community: https://forum.sentry.io/
- Status: https://status.sentry.io/
