import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
// Routing 
import { AppRoutingModule } from './app.routing';
//component
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserListComponent } from './layout/user-list/user-list.component';
import { UserHistoryComponent } from './layout/user-history/user-history.component';
//services
import { CanActivateService } from './services/can-activate.service'
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    LayoutComponent,
    DashboardComponent,
    UserListComponent,
    UserHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CanActivateService,SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
