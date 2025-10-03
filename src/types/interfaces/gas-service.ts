import { FiltersConfig } from './engine-service';
import { OtherConfig } from './other-cost-config';

export interface GasService {
  interval: number;
  diagnostics?: number;
  filters?: FiltersConfig;
  repair?: OtherConfig[];
}
