import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [MatToolbarModule,MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MaterialComponents],
  exports: [HttpClientModule, MaterialComponents],
})
export class ShareModule {}
