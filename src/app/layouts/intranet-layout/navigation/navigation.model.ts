import {NavigationModelInterface} from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'main',
        title: 'Main',
        translate: 'NAV.MAIN.TITLE',
        type: 'group',
        icon: '',
        children: [
          {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            icon: 'dashboard2',
            url: '/home'
          }
        ]
      }
    ];
  }
}
