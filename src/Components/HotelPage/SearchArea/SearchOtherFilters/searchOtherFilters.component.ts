import { Component,Input }   from "@angular/core";



@Component({
    selector:"search-other-filters",
    templateUrl:"searchOtherFilters.component.html",
    styleUrls:["searchOtherFilters.component.css"]
})
export class SearchOtherFiltersComponent  {
    
    @Input() minMax;

}