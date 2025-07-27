

interface Package {
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

interface Price {
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
