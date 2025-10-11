import {
  Organization,
  PersonalPartner,
  SoleProprietor,
} from './partner';

export interface UserTripConfig {
  id: string;
  date: string;
  mileage: number;
  driver: string;
  licensePlate: string;
  actualWorkTime: number;
  fuelConsumption: number;
  fuelCost: number;
  primeCost: number;
  taxCost?: number;
  officeCost: number;
  otherCost: number;
  revenue: number;
  margin: number;
  marginality: number;
  counterparty:
    | PersonalPartner
<<<<<<< Updated upstream
    | Organization
    | SoleProprietor;
=======
    | SoleProprietor
    | Organization;
>>>>>>> Stashed changes
}
