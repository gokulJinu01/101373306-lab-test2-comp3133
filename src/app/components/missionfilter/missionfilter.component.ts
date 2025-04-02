import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>();
  
  selectedYear: string = '';
  years: string[] = [];
  
  ngOnInit(): void {
    this.generateYearList();
  }
  
  generateYearList(): void {
    const currentYear = new Date().getFullYear();
    const startYear = 2006; // SpaceX first launch
    
    for (let year = currentYear; year >= startYear; year--) {
      this.years.push(year.toString());
    }
  }
  
  onYearChange(): void {
    this.yearSelected.emit(this.selectedYear);
  }
  
  clearFilter(): void {
    this.selectedYear = '';
    this.yearSelected.emit('');
  }
}
