interface Subscription {
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