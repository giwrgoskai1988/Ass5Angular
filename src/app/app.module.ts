import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelPageComponent } from "../Components/HotelPage/hotelpage.component";
import { SearchAreaComponent } from "../Components/HotelPage/SearchArea/searchArea.component";
import { SearchTextComponent } from "../Components/HotelPage/SearchArea/SearchText/searchText.component";
import { SearchDatesRoomsComponent }  from "../Components/HotelPage/SearchArea/SearchDatesRooms/searchDatesRooms.component";
import { SearchOtherFiltersComponent}  from "../Components/HotelPage/SearchArea/SearchOtherFilters/searchOtherFilters.component";
import { MapSortingAreaComponent }  from "../Components/HotelPage/MapSortingArea/mapSortingArea.component";
import { HotelListComponent } from "../Components/HotelPage/HotelList/hotelList.component";
import { HotelService } from 'src/Services/hotel.service';



@NgModule({
  declarations: [
    AppComponent,HotelPageComponent,SearchAreaComponent,SearchTextComponent,SearchDatesRoomsComponent,SearchOtherFiltersComponent,
    MapSortingAreaComponent,HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
