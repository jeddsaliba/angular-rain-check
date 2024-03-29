import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Shared } from '@shared/redux/shared/shared.model';
import { selectShowLoader } from '@shared/redux/shared/shared.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  loader$: Observable<boolean> = of(false);
  constructor(
    private store: Store<Shared>
  ) {}
  ngOnInit(): void {
    this.loader$ = this.store.select(selectShowLoader);
  }
}
