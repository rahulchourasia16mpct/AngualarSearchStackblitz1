import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  searchText: string;
  employeList = [];
  constructor() {
    this.employeList = [
      {
        firstName: "Celestine",
        lastName: "Schimmel",
        address: "7687 Jadon Port"
      },
      {
        firstName: "Johan",
        lastName: "Ziemann PhD",
        address: "156 Streich Ports"
      },
      {
        firstName: "Lizzie",
        lastName: "Schumm",
        address: "5203 Jordon Center"
      }
    ];
  }
}
