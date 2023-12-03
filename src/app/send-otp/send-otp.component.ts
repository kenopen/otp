import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-send-otp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css'
})
export class SendOtpComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }
}
