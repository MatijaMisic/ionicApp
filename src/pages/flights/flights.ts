import { Flight } from './../../app/models/flight';
import { LocationService } from './../../app/services/location.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  @ViewChild(Navbar) navbar: Navbar;
  flights: Flight[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private locationSv: LocationService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
    this.navbar.hideBackButton = true;
    console.log(this.locationSv.fetchFlights());
    this.locationSv.fetchFlights()
    .then((res) => {
      this.flights = this.locationSv.getFlights();
    })

  }

}
