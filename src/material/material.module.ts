import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
})
export class MaterialModule { }
