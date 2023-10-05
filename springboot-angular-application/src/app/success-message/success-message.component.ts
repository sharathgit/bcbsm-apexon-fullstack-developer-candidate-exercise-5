import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { SuccessMessageService } from '../success-message.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  message: string;

  constructor(private successMessageService: SuccessMessageService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.successMessageService.successMessageService().subscribe( (result) => {
      this.message = result.content;
    });
  }

}
