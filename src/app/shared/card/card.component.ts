import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit(): void {
  }

}
