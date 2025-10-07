import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomPaginatorLocale extends MatPaginatorIntl {
  override itemsPerPageLabel: string =
    'Элементов на странице';
}
