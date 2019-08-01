import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DvdService } from '../../services/dvd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.scss']
})
export class DvdFormComponent implements OnInit {

  formDvd = this.fb.group({
    'title': [''],
    'year': [''],
    'genre': ['']
  });

  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.dvdService.add(this.formDvd.value);
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }
}
