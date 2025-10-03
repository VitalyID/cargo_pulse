export interface OtherCostConfig {
  parkingCost?: number;
  addCost?: number;
  webSiteCost?: number;
  insurance: number;
  softwareCost?: SoftwareConfig[];
  other?: OtherConfig[];
  trackWash?: TrackWash;
}

export interface SoftwareConfig {
  name: string;
  cost: number;
  interval?: number;
}

export interface OtherConfig {
  currentMileage?: number;
  name: string;
  cost: number;
}

export interface TrackWash {
  data: string;
  currentMileAge: number;
  type: 'self' | 'standard';
}
