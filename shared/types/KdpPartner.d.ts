interface KdpPartnerPrice {
  normalPrice: number;
  savingPrice: number;
  link: string;
  formatName: string;
  id: string;
  membershipId: string;
  position: number;
  postName: string;
  duration: number;
  durationType: number;
  productVariantPrice: number[] | null;
}

interface KdpPartner {
  id: number;
  isPremiumPlus: boolean;
  description: string;
  code: string;
  title: string;
  image: string;
  isShow: boolean;
  smallestPkgPrice: number;
  smallestPkgPeriod: number;
  smallestPkgPeriodLabel: string;
  price: KdpPartnerPrice[];
}
