import { Component } from '@angular/core';
import { Apperrors } from '../apperrors/apperrors';
import { Dashboard } from '../dashboard/dashboard';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admintemplate',
  imports: [Apperrors, Dashboard, Navbar, RouterOutlet],
  templateUrl: './admintemplate.html',
  styleUrl: './admintemplate.css',
})
export class Admintemplate {}
