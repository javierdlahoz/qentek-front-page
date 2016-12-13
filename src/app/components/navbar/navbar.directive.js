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
  constructor (moment, $scope, $timeout, $location, $mdSidenav) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.isScrolled = false;
    this.init();
    this.$mdSidenav = $mdSidenav;

    $scope.$watch('$location.$$hash', () => {
      if($location.hash() == ''){ this.hideFixed(); }
      else { this.showFixed(); }
    });
  }

  toogleMenu() {
    if(this.isOpenRight()){
      this.$mdSidenav('right').close()
    }
    else {
      this.$mdSidenav('right').open()
    }
  }

  isOpenRight() {
    return this.$mdSidenav('right').isOpen();
  };

  getElements() {
    this.navbar = document.getElementById("navbar");
    this.logoFixed = document.getElementById("logo-fixed");
    this.logo = document.getElementById("logo");
  }

  init() {
    angular.element(document).on('scroll', () => {
      if(window.pageYOffset == 0){
        this.hideFixed();
      }
      else{
        this.showFixed();
      }
    });
  }

  hideFixed(){
    this.getElements();
    angular.element(this.navbar).removeClass('fixed');
    angular.element(this.logoFixed).addClass('ng-hide');
    angular.element(this.logo).removeClass('ng-hide');
  }

  showFixed(){
    this.getElements();
    angular.element(this.navbar).addClass('fixed');
    angular.element(this.logoFixed).removeClass('ng-hide');
    angular.element(this.logo).addClass('ng-hide');
  }
}
