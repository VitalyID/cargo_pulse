import { OtherConfig } from './other-cost-config';

export interface EngineService {
  interval: number;
  timingBeltCost?: TimingBeltServiceCost;
  ignitionPlug?: IgnitionPlugConfig;
  filterCost: FiltersSystem;
  oilsCost: EngineOilsConfig;
  repair?: OtherConfig[];
}

export interface TimingBeltServiceCost {
  interval: number;
  valveAdjustmentCost: number;
  valveCoverGasket: number;
  repair?: OtherConfig[];
}

export interface IgnitionPlugConfig {
  interval: number;
  cost: number;
  name: string;
}

export interface FiltersSystem {
  interval: number;
  oilFilter: FiltersConfig;
  fuelFilter: FiltersConfig;
  airFilter: FiltersConfig;
  repair?: OtherConfig[];
}

export interface FiltersConfig {
  name: string;
  cost: number;
}

export interface EngineOilsConfig {
  interval: number;
  oilCost: number;
  name: string;
}
