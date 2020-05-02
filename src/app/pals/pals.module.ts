import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PalsComponent } from './pals/pals.component';
import { PalsRoutingModule } from './pals.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllComponent, NewComponent, EditComponent, PalsComponent],
  imports: [CommonModule, PalsRoutingModule, SharedModule],
})
export class PalsModule {}
