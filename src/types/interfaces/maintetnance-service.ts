import { EngineService } from './engine-service';
import { GasService } from './gas-service';
import {
  OtherConfig,
  OtherCostConfig,
} from './other-cost-config';
import { TiersConfig } from './tiers-config';
import { TransmissionSystem } from './transmission-system';

export interface MaintenanceService {
  interval: number;
  currentMileage: number;
  cost: number;
  brakeSystemCost?: BrakeSystem;
  engineSystemCost: EngineService;
  gazServiceCost?: GasService;
  tiersServiceCost?: TiersConfig;
  trackTransmission?: TransmissionSystem;
  otherCost?: OtherCostConfig;
  electricalCost?: number;
  bodyService?: number;
  repair?: OtherConfig[];
}

export interface BrakeSystem {
  interval: number;
  frontBrakePadsCost?: number;
  backBrakePadsCost?: number;
  serviceCost?: number;
  repair?: OtherConfig[];
}
