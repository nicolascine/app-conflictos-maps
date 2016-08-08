export function TimeContentDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/timeContent/timeContent.html',
        scope: {
            arrayData: '=',
            creationDate: '='
        },
        controller: timeContentController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class timeContentController {
    constructor(moment) {
        'ngInject';

        // "this.creationDate" is available by directive option "bindToController: true"
        this.relativeDate = moment(this.creationDate).fromNow();
    }
}
