export interface Request {
  id: number;
  title: string;
  desc: string;
  from: string;
  img: string;
  status: string;
  createdAt: string;
}

export interface Status {
  id: string;
  status: string;
}

export interface Asset {
  id: string;
  assetName: string;
  assetOwner: string;
  address: string;
}

export interface Provider {
  id: string;
  providerName: string;
  category: string;
}
