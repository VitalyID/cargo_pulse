import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { SwitcherConfig } from './switcherConfig';

@Component({
  selector: 'app-switcher-component',
  imports: [],
  templateUrl: './switcher-component.html',
  styleUrl: './switcher-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent implements OnInit {
  id: string = '';
  @Input() name: string = '';
  @Input() set initialActive(value: boolean) {
    this.isActive.set(value);
  }

  isActive: WritableSignal<boolean> = signal(false);
  @Output() stateCheckbox =
    new EventEmitter<SwitcherConfig>();

  ngOnInit() {
    this.id = uuidv4();
  }

  userClick(name: string) {
    this.isActive.update(value => !value);
    this.stateCheckbox.emit({
      isActive: this.isActive(),
      name,
    });
  }
}
