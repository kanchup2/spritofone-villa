import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FloorPageComponent } from './pages/floor/floor-page.component';
import { SidebarNavComponent } from './shared/sidebar/sidebar-nav.component';
import { OptionCardComponent } from './shared/option-card/option-card.component';
import { ImageUploaderComponent } from './shared/image-uploader/image-uploader.component';
import { ImagePopupViewerComponent } from './shared/image-popup/image-popup-viewer.component';
import { PriceEditorComponent } from './shared/price-editor/price-editor.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SummaryWidgetComponent } from './shared/summary-widget/summary-widget.component';
import { TeamSettingsComponent } from './pages/team/team-settings.component';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FloorPageComponent,
    SidebarNavComponent,
    OptionCardComponent,
    ImageUploaderComponent,
    ImagePopupViewerComponent,
    PriceEditorComponent,
    ProgressBarComponent,
    SummaryWidgetComponent,
    TeamSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
