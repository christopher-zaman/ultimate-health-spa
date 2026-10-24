import services from '../content/services.json';
import { categories } from '../content/categories.js';

export { services, categories };
export const getCategory = (id) => categories.find((item) => item.id === id);
export const getServicesByCategory = (categoryId, { includeDrafts = false } = {}) =>
  services.filter((service) => service.categoryId === categoryId &&
    (includeDrafts || service.publicationStatus === 'published'));
export const getServiceById = (id) => services.find((service) => service.id === id);
export const getPublishedServices = () => services.filter((service) => service.publicationStatus === 'published');
