// angular-projects/project-a/.eslintrc.js
// @ts-check

import angularConfig from '../../../.vscode/configs/.eslintrc.angular.js'; // Новый путь
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Важно: ESLint ищет tsconfig.json относительно текущего .eslintrc.js
    // Поэтому здесь нужно указать путь к tsconfig.json данного проекта.
    // Если tsconfig.json находится в корне project-a, то project: ['tsconfig.json']
    // Если tsconfig.json находится в src/tsconfig.json, то project: ['src/tsconfig.json']
    linterOptions: {
      parserOptions: {
        project: ['tsconfig.json'], // Или ['src/tsconfig.json']
        tsconfigRootDir: import.meta.dirname, // Указываем корневую директорию для tsconfig.json
      },
    },
  },
  angularConfig, // Используем общую Angular конфигурацию
  {
    // Здесь можно добавить правила, специфичные ТОЛЬКО для project-a
    // Например, если project-a использует другой префикс для компонентов
    // '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'pa', style: 'kebab-case' }],
  },
  {
    // Игнорирования, специфичные ТОЛЬКО для project-a
    ignores: [
      'e2e/',
      'src/test.ts',
    ],
  }
);
