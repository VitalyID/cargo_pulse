import { UserTripConfig } from './userTripConfig';

export interface TableColumnConfig {
  key: string;
  title: string;
  pipe?: string;
  pipeArg?: any;
  cell: (element: UserTripConfig) => string;
}
