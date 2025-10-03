import { AddressConfig } from './address-config';

export interface PersonalConfig {
  name: string;
  lastName: string;
  surname: string;
  address: AddressConfig;
  cost: number;
  phone: number;
  email: string;
  messenger: MessengerConfig;
}

export interface MessengerConfig {
  nameMessenger: string;
  id: string;
}
