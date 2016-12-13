export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    angular.element(document).ready(() => {
      var navbar = document.getElementById("navbar");
      var logoFixed = document.getElementById("logo-fixed");
      var logo = document.getElementById("logo");

      angular.element(document).on('scroll', () => {
        if(window.pageYOffset == 0){
          angular.element(navbar).removeClass('fixed');
          angular.element(logoFixed).addClass('ng-hide');
          angular.element(logo).removeClass('ng-hide');
        }
        else if(!angular.element(navbar).hasClass('fixed')){
          angular.element(navbar).addClass('fixed');
          angular.element(logoFixed).removeClass('ng-hide');
          angular.element(logo).addClass('ng-hide');
        }
      });
    });
  }
}
