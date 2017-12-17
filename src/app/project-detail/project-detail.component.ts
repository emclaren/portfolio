
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
  styleUrls: [ './project-detail.component.scss' ]
})

export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  @ViewChild('shuffleGrid') shuffleGrid: ElementRef;



  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProject();
 


 this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
            console.log("bug test 1");
        }
        console.log("bug test 2");
        document.body.scrollTop = 0;
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    });



  }
    ngAfterViewInit() {
 const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });

 console.log(this.shuffleGrid);
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





// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

// import { Project }         from '../project';
// import { ProjectService }  from '../project.service';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-project-detail',
//   templateUrl: './project-detail.component.html',
//   styleUrls: [ './project-detail.component.scss' ]
// })
// export class ProjectDetailComponent implements OnInit {
//   @Input() project: Project;
 

//   constructor(
//     private route: ActivatedRoute,
//     private projectService: ProjectService,
//     private location: Location,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.getProject();
 


//  this.router.events.subscribe((evt) => {
//         if (!(evt instanceof NavigationEnd)) {
//             return;
//         }
//         // document.body.scrollTop = 0;
//         window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
//     });



//   }

//   getProject(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.projectService.getProject(id)
//       .subscribe(project => this.project = project);
//   }

//   goBack(): void {
//     this.location.back();
//   }



// }


// ]

   
   
