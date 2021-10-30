import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {LogService} from "../services/log.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  // providers: [DataService]
})
export class MainPageComponent implements OnInit {
  items: string[] = [];
  name: string = "";
  displayedColumns: string[] = ['id', 'name', 'startTime', 'endTime'];
  dataSource: object[] = [];



  constructor(private dataService: DataService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
    this.dataService.GetListTime("fc00c5c8-90dd-46b1-93bf-08d97cec9bcf")
        .subscribe(
            (data: any) => {
              this.dataSource = data;
              this.logService.write("getListTime in main-page ",data);
              this.logService.write("dataSource in main-page ",this.dataSource)
            },
            error => this.logService.write("error main-page ", error)
        );
  }

  addItem(name: string){

    this.dataService.addData(name);
  }
}
