import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Sales',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'purchases',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'store',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'finance',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }

}
