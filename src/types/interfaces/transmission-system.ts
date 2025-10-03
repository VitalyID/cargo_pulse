import { OtherConfig } from './other-cost-config';

export interface TransmissionSystem {
  transmission: TransmissionConfig;
  axles: AxlesConfig;
}

export interface TransmissionConfig {
  interval: number;
  name: string;
  cost: number;
  repair?: OtherConfig[];
}

export interface AxlesConfig {
  interval: number;
  name: string;
  cost: number;
  repair?: OtherConfig[];
}
