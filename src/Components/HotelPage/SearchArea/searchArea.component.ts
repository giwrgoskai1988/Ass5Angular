import { Component,Input } from "@angular/core";



@Component({
    selector:"search-area",
    templateUrl:"searchArea.component.html",
    styleUrls:["searchArea.component.css"]
})
export class SearchAreaComponent {
    @Input() minMax;
}