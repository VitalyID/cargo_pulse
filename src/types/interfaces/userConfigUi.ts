export interface UserConfigUi {
  table: TableConf;
  [key: string]: unknown;
}

export interface TableConf {
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
