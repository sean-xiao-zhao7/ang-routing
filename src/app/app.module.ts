import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// angular material
import { MatButtonModule } from '@angular/material/button';

// custom components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

// custom services
import { ServersService } from './servers/servers.service';

// routes
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    EditServerComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard, ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
