import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.ani-col', style({ opacity: 0, transform: 'translateY(40px)' })),

        query('.ani-col', stagger('500ms', [
          animate('800ms .5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),
        query('.ani-col', [
          animate(1000, style('*'))
        ])
      ])
    ]),
  ],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

  }
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    effect: 'fade',
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,

  };
}

