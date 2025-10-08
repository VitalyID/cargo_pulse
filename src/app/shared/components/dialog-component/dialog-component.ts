import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
} from '@angular/core';

@Component({
  selector: 'app-dialog-component',
  imports: [CommonModule],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @Input() title: string = '';
  @Input() nameComponent!: Type<any>;

  closeDialog() {
    console.log('close dialog');
  }
}
