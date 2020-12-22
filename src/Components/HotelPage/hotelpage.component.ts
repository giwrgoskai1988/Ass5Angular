import {  Component,OnInit }  from "@angular/core";
import { IHotel } from "src/Models/Hotel";
import { IRoomType } from "src/Models/RoomType";
import { HotelService } from "../../Services/hotel.service";




@Component({
    selector:"hotel-page",
    templateUrl:"hotelpage.component.html",
    styleUrls:["hotelpage.component.css"]
    
})
export class HotelPageComponent implements OnInit  {
    

    constructor(private hotelSerive:HotelService){}

    ngOnInit(): void {
       this.roomTypes = this.hotelSerive.getRoomTypes();
       this.hotels = this.hotelSerive.getHotels();
       this.minMax = this.hotelSerive.getMinAndMaxPrice();
    }

    roomTypes:IRoomType[] = [];
    hotels:IHotel[] = [];

    minMax = {};

}