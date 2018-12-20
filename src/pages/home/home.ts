import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlightsServices } from '../../services/flights-services';
import { Flight } from '../../models/Flight';
import { SingleFlightPage } from '../single-flight/single-flight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  flightList : Flight[];

  constructor(public navCtrl: NavController,
              public flightsServices : FlightsServices) {



  }


  ionViewDidLoad(){
    this.flightList = this.flightsServices.flights;
  }

  onLoadFlight(){
      this.navCtrl.push(SingleFlightPage);
  }

}
