import { Component, OnInit } from '@angular/core';
import { person } from '../interfaces/person';
import { AllPersonService } from '../services/all-person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number = 0;
  persons: person[] = [];
  constructor(private personService: AllPersonService,
    private route: ActivatedRoute,
    private router: Router) {
    personService.getAll().subscribe((p: any) => {
      this.persons = p;
    })
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.personService.getPerson(this.id).subscribe((p: any) => {
      this.router.navigate(['/person', p.id]);
    })
  }
}
