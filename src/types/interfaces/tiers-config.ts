import { OtherConfig } from './other-cost-config';

export interface TiersConfig {
  name: string;
  interval: number;
  costTier: number;
  service?: number;
  repair?: OtherConfig[];
}
