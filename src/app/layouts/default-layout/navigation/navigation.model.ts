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
            title: 'Master',
            type: 'collapse',
            icon: 'dashboard2',
           // url: '/home',
            children: [
              {
                id: 'company-list',
                title: 'Company',
                type: 'item',
                icon: '',
                url: 'master/companylist'
              },
              {
                id: 'branch-list',
                title: 'Branches',
                type: 'item',
                icon: '',
                url: 'master/branchlist'
              },
              {
                id: 'department-list',
                title: 'Department',
                type: 'item',
                icon: '',
                url: 'master/deptlist'
              },
              {
                id: 'designation-list',
                title: 'Designation',
                type: 'item',
                icon: '',
                url: 'master/desiglist'
              },
              {
                id: 'holiday-list',
                title: 'Holiday',
                type: 'item',
                icon: '',
                url: 'main/dashboards/real-estate'
              },
            ]
          }
        ]
      }
    ];
  }
}
