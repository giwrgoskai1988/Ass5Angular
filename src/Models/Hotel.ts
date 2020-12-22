import { IRating } from "./Rating";
import { IFilter } from "./Filter";
import { IRoomType } from "./RoomType";



export interface IHotel {
    hotelName:string;
    rating:number;
    city:string;
    thumbnail:string;
    guestrating:number;
    ratings:IRating;
    mapurl:string;
    filters:IFilter[];
    price:number;
}