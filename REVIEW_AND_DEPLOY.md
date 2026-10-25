# Ultimate Health Spa — 95-service review and booking release

## What changed
- All 95 catalog records remain available in Vite development preview (`npm run dev`), grouped by category and split into treatments/add-ons.
- Development cards now expose a **Test GlossGenius destination** link. This is for manual verification only; it does not publish a service.
- Production still hides draft entries. Direct booking is enabled only when **both** `publicationStatus: "published"` and `bookingStatus: "verified"` are set on an entry in `src/content/services.json`.
- Verified published booking buttons emit GA4 event `select_service_booking` with service ID, name, category, booking provider, link URL, and page path.
- Short-page footer now reaches the bottom of the viewport.

## Verification workflow
1. Open `review/service-verification.csv`. It contains all 95 candidates with their original booking URLs and any catalog review notes.
2. In the local development preview, open each category, click **Test GlossGenius destination**, and check that it opens the exact intended treatment at the intended Leesburg location. Confirm the name, availability, current price, duration, and add-on status with Amanda. If the destination differs, obtain the correct deep link from GlossGenius.
3. Record each outcome in the CSV. Do not assume a generated token URL is verified solely because it loads.
4. For each fully approved entry, update `src/content/services.json` with its verified URL, `bookingStatus: "verified"`, `reviewStatus: "approved"`, and `publicationStatus: "published"`. Keep unapproved entries as drafts. The CSV is a review worksheet, not an automatic publishing input.
5. Run `npm run build`, check the category page in production preview, and test booking links again before deploying.

## Analytics
- Create a GA4 web data stream and obtain its Measurement ID (format `G-...`).
- Put `VITE_GA_MEASUREMENT_ID=G-...` in `.env.local` for development and in Vercel Environment Variables for production. Do not put it in a source file.
- Confirm `select_service_booking` in GA4 DebugView or Realtime after clicking a verified published service.
- Configure GA4 custom dimensions for `service_id`, `service_name`, `service_category` if needed for detailed reporting.
- This event tracks outbound booking **clicks**, not completed appointments or purchases. Review cookie/consent and privacy policy requirements before enabling GA4 publicly.

## Design
Existing colors, typography, and service-page routing were preserved. A standardized visual theme can be implemented later.
