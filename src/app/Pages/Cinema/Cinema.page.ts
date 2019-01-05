import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { Movie } from '../../Models/Movie.model';
import { MovieTitle } from '../../Pips/MovieTitle';
import { Loader } from '../../Modals/Loader';
import { Success } from '../../Modals/Success';
import { Route } from '../../Models/Route.model';
import { Failure } from '../../Modals/Failure';
import { Dialog } from '../../Modals/Dialog';

@Component({
  selector: 'cinema',
  templateUrl: './Cinema.page.html',
  styleUrls: ['./Cinema.page.scss'],
  providers: [ MovieTitle, ]
})

export class Cinema implements OnInit {
  
  constructor(private router: Router,
              private movieTitlePipe: MovieTitle) {
    
  }

  ngOnInit() {
    
  }

  
  
}
