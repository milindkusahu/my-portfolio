import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://095400e80fc4ce209d3d354160a7e395@o4508241255596032.ingest.us.sentry.io/4508241294983168",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
