import { Component } from "@angular/core";

//building and exporting a component
@Component({//this is a component decorator
 selector: "app-server", //this is the component tag <app-server>
 templateUrl: "./server.component.html"
}) 
export class ServerComponent {
    serverId : number = 10 ;
    serverStatus: string = "offLine";
    allowsNewServer : boolean = false;

    constructor(){
        setTimeout(() => {
            this.allowsNewServer = true;
        }, 2000)
    }
}