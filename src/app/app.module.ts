import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { AppComponent } from './app.component';
import { SendOtpComponent } from './send-otp/send-otp.component';


@NgModule({
  declarations: [
    AppComponent,
    SendOtpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AppModule { }
