export interface UserConfigUi {
  id: string;
  date: boolean;
  mileage: boolean;
  driver: boolean;
  licensePlate: boolean;
  actualWorkTime: boolean;
  fuelConsumption: boolean;
  fuelCost: boolean;
  primeCost: boolean;
  taxCost?: boolean;
  officeCost: boolean;
  otherCost: boolean;
  revenue: boolean;
  margin: boolean;
  marginality: boolean;
  counterparty: boolean;
}
