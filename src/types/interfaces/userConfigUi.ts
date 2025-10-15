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
  counterpart_type: boolean;
  counterpart_name: boolean;
  counterpart_lastName: boolean;
  counterpart_surname: boolean;
  counterpart_tel: boolean;
  counterpart_title: boolean;
  counterpart_taxID: boolean;
  counterpart_kpp: boolean;
  counterpart_currentAcc: boolean;
  counterpart_bank: boolean;
  counterpart_correspondentAcc: boolean;
  counterpart_bik: boolean;
  counterpart_ogrn_ogrnip: boolean;
  counterpart_director: boolean;
  counterpart_directorInShort: boolean;
  counterpart_officialAddress_country: boolean;
  counterpart_officialAddress_region: boolean;
  counterpart_officialAddress_city: boolean;
  counterpart_officialAddress_street: boolean;
  counterpart_officialAddress_house: boolean;
  counterpart_officialAddress_office: boolean;
  counterpart_postAddress_country: boolean;
  counterpart_postAddress_region: boolean;
  counterpart_postAddress_city: boolean;
  counterpart_postAddress_street: boolean;
  counterpart_postAddress_house: boolean;
  counterpart_postAddress_office: boolean;
}
