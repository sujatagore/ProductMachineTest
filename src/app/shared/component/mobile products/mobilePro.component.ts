import { Component } from "@angular/core";
import { Imobile } from "../../module/data.interface";
import { mobileProducts } from "../../const/data";


@Component({
    selector : 'app-mobile',
    templateUrl : './mobilePro.component.html',
    styleUrls : ['./mobilePro.component.scss']
})

export class MobileProductComponent{
    mobileArr : Array<Imobile> = mobileProducts;
}