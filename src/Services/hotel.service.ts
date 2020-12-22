import { Injectable } from "@angular/core";
import { IHotel } from "../Models/Hotel";
import { IRoomType } from "../Models/RoomType";
import data from "../MockupData/data.json";




@Injectable(
    {
        providedIn:"root"
    }
)

export class HotelService {
    
    getRoomTypes():IRoomType[]{

        return data[0].roomtypes;
    }

    getHotels():IHotel[] {

     return data[1].entries;
  
    }

    getMinAndMaxPrice():{} {

        let arrayOfPrices:number[] = data[1].entries.map((h) => h.price);
        let min:number = Math.min.apply(Math , arrayOfPrices);
        let max:number = Math.max.apply(Math , arrayOfPrices);

        return { "min":min , "max":max};
    
    }
  

}