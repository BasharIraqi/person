import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { person } from '../interfaces/person';
import { AllPersonService } from '../services/all-person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person:person={
    address: {
      geolocation: {
        lat: 0,
        long: 0
      },
      city: '',
      street: '',
      number: 0,
      zipcode: 0
    },
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    phone: '',
    __v: 0
  };
  constructor(private personService: AllPersonService
    ,private route: ActivatedRoute) {
   
    this.route.params.subscribe((params: any) => {
      this.personService.getPerson(params['id']).subscribe((p: any) => {
        this.person = p;
      })
    })

  }

  ngOnInit(): void {
  }

}
