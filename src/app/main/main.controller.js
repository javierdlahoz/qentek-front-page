export class MainController {
  constructor ($timeout, webDevTec, toastr, $mdDialog) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1481577888444;
    this.toastr = toastr;
    this.$mdDialog = $mdDialog;
    this.document = document;

    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  openDialog(ev, key) {
    this.$mdDialog.show({
      controller: 'DialogController',
      controllerAs: 'dialog',
      templateUrl: '../app/components/dialog/dialog.html',
      parent: angular.element(this.document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false,
      locals: {
        key: key
      }
    });
  }
}
