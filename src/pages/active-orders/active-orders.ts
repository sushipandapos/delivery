import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-active-orders',
  templateUrl: 'active-orders.html',
})
export class ActiveOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveOrdersPage');
  }

  openSettings() {
    this.navCtrl.push(SettingsPage)
  }

}
