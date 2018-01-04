
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as Shuffle from 'shufflejs';
import { Project }         from '../project';
import { ProjectService }  from '../project.service';
import { Router, NavigationEnd } from '@angular/router';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ],


})






export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  // @ViewChild('shuffleGrid') shuffleGrid: ElementRef;
  // @ViewChild('shuffleGrid2') shuffleGrid: ElementRef;
  // @ViewChild('shuffleGrid3') shuffleGrid: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProject();


 }
    ngAfterViewInit() {
 // const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
 // const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
 //   const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }



}



   
   
