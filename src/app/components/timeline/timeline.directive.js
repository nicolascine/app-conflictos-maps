export function TimelineDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/timeline/timeline.html',
    scope: {
        creationDate: '='
    },
    controller: timelineController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class timelineController {
  constructor (moment) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
