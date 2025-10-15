import { AddressConfig } from './address-config';
import { PersonalConfig } from './personal-config';

export interface PersonalPartner {
  type: 'PersonalPartner';
  name: string;
  lastName: string;
  surname: string;
  tel: string;
}

export interface SoleProprietor {
  type: 'SoleProprietor';
  personalInfo: PersonalConfig;
  taxId: string;
  ogrnip: string;
  okpo: string;
  currentAcc: string;
  bank: string;
  correspondentAcc: string;
}

export interface Organization {
  type: 'Organization';
  title: string;
  taxID: string;
  kpp: string;
  currentAcc: string;
  bank: string;
  correspondentAcc: string;
  bik: string;
  ogrn: string;
  director: string;
  directorInShort: string;
  officialAddress: AddressConfig;
  postAddress: AddressConfig;
}

export interface Partners {
  type:
    | 'Organization'
    | 'SoleProprietor'
    | 'PersonalPartner';
  name?: string;
  lastName?: string;
  surname?: string;
  tel: string;
  title: string;
  taxID: string;
  kpp: string;
  currentAcc: string;
  bank: string;
  correspondentAcc: string;
  bik: string;
  ogrn_ogrnip: string;
  director: string;
  directorInShort: string;
  officialAddress: AddressConfig;
  postAddress: AddressConfig;
}
