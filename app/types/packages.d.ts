import type { Kdp } from './kdp'
import type { KdpPartner } from './KdpPartner'

export interface Subscription {
  packages: {
    [key: string]: Package;
  };
  kdp: Kdp;
  kdpPartner: KdpPartner[];
  partner: Record<string, unknown>;
  promotions: Record<string, unknown>;
  swg: Record<string, unknown>;
  payments: Record<string, unknown>[];
  fnq: Record<string, unknown>[];
  benefits: Record<string, unknown>[];
}

export interface Package {
  id?: number;
  isPremiumPlus?: boolean;
  title?: string;
  description?: string;
  image?: string;
  price?: {
    annual: Price[];
    monthly: Price[];
  };
  terms?: string[];
}

export interface Price {
  normalPrice: number;
  discPrice: number;
  disc: number;
  link: string;
  formatName: string;
  id: string;
  membershipId: string;
  position: number;
  postName: string;
  duration: number;
}
