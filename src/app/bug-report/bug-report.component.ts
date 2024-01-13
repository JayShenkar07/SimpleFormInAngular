import { Component } from '@angular/core';


@Component({
  selector: 'app-bug-report',
  standalone: true,
  imports: [],
  templateUrl: './bug-report.component.html',
  styleUrl: './bug-report.component.css'
})
export class BugReportComponent {
  selectedOption: string = '';

  onOptionSelected(event: any): void {
    // Access the selected value using event.target.value
    this.selectedOption = event.target.value;
}
}
