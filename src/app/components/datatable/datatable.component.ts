import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearDataTable } from '@shared/redux/datatable/datatable.action';
import { selectTableData, selectTableHeads } from '@shared/redux/datatable/datatable.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit, OnDestroy {
  tableData$: Observable<any> = of([]);
  tableHeads$: Observable<any> = of([]);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tableHeads$ = this.store.select(selectTableHeads);
    this.tableData$ = this.store.select(selectTableData);
  }
  ngOnDestroy(): void {
    this.store.dispatch(clearDataTable());
  }
}
