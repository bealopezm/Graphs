import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bar' },
  { path: 'bar', component: ChartBarComponent },
  { path: 'line', component: ChartLineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
