// src/utils/metadataHelpers.ts

import { servicesList } from '@/data/servicesData';

export function getServiceMetadata(serviceName: string) {
  const service = servicesList.find(s => s.slug === serviceName);
  return {
    title: service ? `${service.title} - UKB Plumbing Services` : 'Service Not Found - UKB',
  };
}
