import { readFileSync } from 'node:fs';
const services = JSON.parse(readFileSync(new URL('../src/content/services.json', import.meta.url)));
const categoryIds = new Set(['facials-skincare', 'botox-fillers', 'advanced-skin', 'waxing-lashes', 'body-contouring', 'wellness-injections', 'mental-wellness', 'intimate-wellness']);
const errors = [];
if (services.length !== 95) errors.push(`Expected 95 services; found ${services.length}`);
const seen = new Set();
for (const [i, service] of services.entries()) {
  if (!service.id || seen.has(service.id)) errors.push(`Missing or duplicate ID at row ${i + 1}`);
  seen.add(service.id);
  if (!categoryIds.has(service.categoryId)) errors.push(`Unknown category: ${service.name}`);
  if (!['draft', 'published'].includes(service.publicationStatus)) errors.push(`Invalid publication status: ${service.name}`);
  if (service.publicationStatus === 'published') {
    // A published listing is allowed before booking verification.
    // ServiceCard keeps direct-booking links disabled until bookingStatus === 'verified'.
    if (service.bookingStatus === 'verified' && !service.bookingUrlCandidate) errors.push(`Verified booking without URL: ${service.name}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Catalog valid: ${services.length} records, ${categoryIds.size} categories, ${services.filter(x => x.publicationStatus === 'published').length} published`);
