import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@components/dialog/dialog.component';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { getLoggedInUser, logout } from '@shared/redux/auth/auth.action';
import { Auth, AuthUserModel } from '@shared/redux/auth/auth.model';
import { selectLoggedInUser } from '@shared/redux/auth/auth.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  user$: Observable<AuthUserModel> = of();
  appName: any = environment.appName;
  constructor(
    public dialog: MatDialog,
    private store: Store<Auth>
  ) {}
  ngOnInit(): void {
    this.getLoggedInUser();
  }
  getLoggedInUser() {
    this.store.dispatch(getLoggedInUser());
    this.user$ = this.store.select(selectLoggedInUser);
  }
  onLogout(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes',
      },
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.store.dispatch(logout());
    });
  }
}
