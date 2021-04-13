import {NavigationModelInterface} from '@gaxon/components';

export class HeaderMenuModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'menu-sample-page',
        title: 'Sample Page',
        type: 'item',
        icon: 'dashboard2',
        url: '/home'
      }
    ];
  }
}
