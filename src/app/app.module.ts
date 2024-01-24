import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ServiceComponent,
    PortfolioComponent,
    ReviewComponent,
    ContactComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
