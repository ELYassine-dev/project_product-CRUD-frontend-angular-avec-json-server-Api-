import { Component } from '@angular/core';
import { Appstate } from '../services/appstate';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-apperrors',
  imports: [],
  templateUrl: './apperrors.html',
  styleUrl: './apperrors.css',
})
export class Apperrors {
  constructor(public appstate: Appstate) {}
}
