import { TypeClients } from '../enums/typeCliets';
import { AddressConfig } from './address-config';
import { PersonalConfig } from './personal-config';

export interface Partner {
  type: PersonalPartner | SoleProprietor | Organization;
}

export interface PersonalPartner {
  type: TypeClients.PersonalPartner;
  name: string;
  lastName: string;
  surname: string;
  tel: string;
}

export interface SoleProprietor {
  type: TypeClients.SoleProprietor;
  personalInfo: PersonalConfig;
  taxId: string;
  ogrnip: string;
  okpo: string;
  currentAcc: string;
  bank: string;
  correspondentAcc: string;
}

export interface Organization {
  type: TypeClients.Organization;
  title: string;
  officialAddress: AddressConfig;
  postAddress: AddressConfig;
  taxID: string;
  kpp: string;
  currentAcc: string;
  bank: string;
  correspondentAcc: string;
  bik: string;
  ogrn: string;
  director: string;
  directorInShort: string;
}
