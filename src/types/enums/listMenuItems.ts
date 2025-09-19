import { Navigation } from 'src/app/shared/components/navigation/navigation';
export enum NavigationItems {
  'DOCUMENTS' = 'documents',
  'ANALYTICS' = 'analytics',
  'COST' = 'cost',
  'MAIL' = 'mail',
  'CALC' = 'calc',
  'STORY' = 'story',
  'TRANSPORT' = 'transport',
  'DRIVER' = 'driver',
}

export const NAVIGATION_ICONS: Record<NavigationItems, string> = {
  [NavigationItems.DOCUMENTS]: 'icon-file-text',
  [NavigationItems.ANALYTICS]: 'icon-stats-dots',
  [NavigationItems.COST]: 'icon-dollar-sign',
  [NavigationItems.MAIL]: 'icon-mail',
  [NavigationItems.CALC]: 'icon-grid',
  [NavigationItems.STORY]: 'icon-layers',
  [NavigationItems.TRANSPORT]: 'icon-truck',
  [NavigationItems.DRIVER]: 'icon-users',
};

export const NAVIGATION_LABELS: Record<NavigationItems, string> = {
  [NavigationItems.DOCUMENTS]: 'Документы',
  [NavigationItems.ANALYTICS]: 'Аналитика',
  [NavigationItems.COST]: 'Затраты',
  [NavigationItems.MAIL]: 'Почта',
  [NavigationItems.CALC]: 'Калькулятор',
  [NavigationItems.STORY]: 'История',
  [NavigationItems.TRANSPORT]: 'Транспорт',
  [NavigationItems.DRIVER]: 'Водители',
};
