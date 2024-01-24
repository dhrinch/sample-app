import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ServiceComponent } from "./service/service.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ReviewComponent } from "./review/review.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
    {path: 'education', component: EducationComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'review', component: ReviewComponent},
    {path: 'contact', component: ContactComponent},    
    {path: '**', component: HeaderComponent, pathMatch: 'full'},
    {path: '', redirectTo: '/header', pathMatch: 'full'}
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]    
})
export class AppRoutingModule {}
