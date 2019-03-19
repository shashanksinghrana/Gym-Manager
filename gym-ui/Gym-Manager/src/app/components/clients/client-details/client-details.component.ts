import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  public clientName:string;
  public tabs: Array<Object>;
  constructor(
      private route:ActivatedRoute,
      private clientDetailService: ClientService
      ) { 
    this.tabs = this.clientDetailService.getTabItems();
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      console.log(params.get('clientId'));
      this.clientName = params.get('clientId');
    })
  }

}
