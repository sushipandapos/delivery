import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ActiveOrdersPage } from '../active-orders/active-orders';
import { OrdersPage } from '../orders/orders';
import { OrdersHistoryPage } from '../orders-history/orders-history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActiveOrdersPage;
  tab2Root = OrdersPage;
  tab3Root = OrdersHistoryPage;
  tab4Root = MapPage;

  constructor() {

  }
}
