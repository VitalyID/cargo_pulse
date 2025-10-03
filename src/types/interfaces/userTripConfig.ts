export interface UserTripConfig {
  date: string;
  mileage: number;
  actualWorkTime: number;
  fuelConsumption: number;
  fuelCost: string;
  primeCost: string;
  taxCost?: string;
  officeCost: string;
  otherCost: string;
  revenue: string;
  margin: string;
  marginality: string;
}
