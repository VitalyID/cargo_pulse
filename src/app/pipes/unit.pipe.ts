import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withUnit',
  standalone: true,
  pure: false,
})
export class WithUnitPipe implements PipeTransform {
  transform(
    value: any,
    unit: string | number | undefined
  ): string {
    if (!value) return '';
    if (!unit) return value;

    if (typeof value === 'number') {
      return value.toFixed(Number(unit));
    }

    return `${value} ${unit}`;
  }
}
