import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalsComponent } from './pals/pals.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

// :host/pals/:path
const routes: Routes = [
  {
    path: '',
    component: PalsComponent,
    children: [
      {
        path: '',
        component: AllComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalsRoutingModule {}
