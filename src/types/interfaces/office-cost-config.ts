import { AddressConfig } from './address-config';

export interface OfficeCostConfig {
  premises: PremisesConfig;
  equipment: EquipmentConfig[];
  correspondence: number;
}

export interface EquipmentConfig {
  name: string;
  cost: number;
  serviceLive: number;
}

export interface PremisesConfig {
  address: AddressConfig;
  utilityCosts?: number;
}
