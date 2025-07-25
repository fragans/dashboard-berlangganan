interface KdpPrice {
  normalPrice: number;
  discPrice: number;
  savingPrice: number;
  link: string;
  formatName: string;
  id: string;
  membershipId: string;
  position: number;
  postName: string;
  duration: number;
  durationType: number;
  isDefaultSelected: boolean;
  isDiscPriceShown: boolean;
  title: string;
  productVariantPrice: number[] | null;
}

interface KdpItem {
  id: number;
  isPremiumPlus: boolean;
  title: string;
  description: string;
  image: string;
  price: KdpPrice[];
  terms: string[];
}

interface Kdp {
  [key: string]: KdpItem;
}
