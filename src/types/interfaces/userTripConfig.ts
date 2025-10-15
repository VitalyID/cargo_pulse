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
  counterpart_type:
    | 'Organization'
    | 'SoleProprietor'
    | 'PersonalPartner';
  counterpart_name?: string;
  counterpart_lastName?: string;
  counterpart_surname?: string;
  counterpart_tel: string;
  counterpart_title: string;
  counterpart_taxID: string;
  counterpart_kpp: string;
  counterpart_currentAcc: string;
  counterpart_bank: string;
  counterpart_correspondentAcc: string;
  counterpart_bik: string;
  counterpart_ogrn_ogrnip: string;
  counterpart_director: string;
  counterpart_directorInShort: string;
  counterpart_officialAddress_country?: string;
  counterpart_officialAddress_region: string;
  counterpart_officialAddress_city: string;
  counterpart_officialAddress_street: string;
  counterpart_officialAddress_house: number;
  counterpart_officialAddress_office?: number;
  counterpart_postAddress_country?: string;
  counterpart_postAddress_region: string;
  counterpart_postAddress_city: string;
  counterpart_postAddress_street: string;
  counterpart_postAddress_house: number;
  counterpart_postAddress_office?: number;
}
