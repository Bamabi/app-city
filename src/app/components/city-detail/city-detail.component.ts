import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { City } from '../../models/city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  // Sidenav
  @Input() sidenav: MatSidenav;
  // Input city (for edition)
  @Input() city: City;

  // Input city (for edition)
  @Output() valueChange = new EventEmitter();
  sidenavTitle: string;
  cityForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sidenavTitle = (this.city == undefined) ? 'Ajouter un ville': 'Modifier une ville';
    // City form
    this.cityForm = this.fb.group({
      title: [(this.city) ? this.city.title: '', [Validators.required, Validators.maxLength(255)]],
      content: [(this.city) ? this.city.content: '', Validators.required],
      lat: [(this.city) ? this.city.lat: ''],
      long: [(this.city) ? this.city.long: ''],
      image_url: [(this.city) ? this.city.image_url: '', Validators.maxLength(255)]
    })
  }

  onSubmit() {
    if(!this.cityForm.valid) {
      return;
    } else {
      this.valueChange.emit(this.cityForm.value);
      this.sidenav.close();
    }
  }

  get title() { return this.cityForm.get('title'); }

  get content() { return this.cityForm.get('content'); }

  get image_url() { return this.cityForm.get('image_url'); }

}
