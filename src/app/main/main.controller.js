export class MainController {
    constructor($timeout, webDevTec, toastr) {
        'ngInject'

        let mapStyleArray = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#7a7a7a" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "lightness": "100" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "lightness": "10" }, { "color": "#7a7a7a" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "hue": "#ff0042" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": "100" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [{ "visibility": "off" }, { "color": "#ff0000" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "landscape.natural.landcover", "elementType": "all", "stylers": [{ "visibility": "off" }, { "color": "#ff0000" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [{ "visibility": "off" }, { "color": "#ff0000" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry.fill", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#d0f9d8" }, { "lightness": "0" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "lightness": "-4" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "lightness": "10" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "lightness": "29" }, { "hue": "#ff0000" }, { "weight": "1.00" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "lightness": "67" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#cae7f3" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#a8d8ff" }] }]
                          //[{ featureType: "road", elementType: "labels", stylers: [{ visibility: "on" }] }, { featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "administrative", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { weight: 1 }] }, { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { weight: .8 }] }, { featureType: "landscape", stylers: [{ color: "#ffffff" }] }, { featureType: "water", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }, { elementType: "labels", stylers: [{ visibility: "off" }] }, { elementType: "labels.text", stylers: [{ visibility: "on" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#000000" }] }, { elementType: "labels.icon", stylers: [{ visibility: "on" }] }]

        this.onReady($timeout)
        this.awesomeThings = []
        this.classAnimation = ''
        this.creationDate = 1465675174760
        this.toastr = toastr
        this.activate($timeout, webDevTec)
        this.map = {
            center: {
                latitude: -33.0479873,
                longitude: -71.6156841
            },
            zoom: 16
        }
        this.mapOptions = {
            styles: mapStyleArray
        }

    }

    onReady($timeout) {
        $timeout(() => {
            angular.element(document).ready(() => {
                angular.element(document).on('click', '.sidebar-left .slide-submenu', () => {
                    angular.element('.sidebar').css('left', '-422px')
                    angular.element('.mini-submenu-left').fadeIn('slide')
                    this.applyMargins()
                })
                angular.element(document).on('click', '.mini-submenu-left', () => {
                    angular.element('.sidebar').css('left', '0px')
                    angular.element(this).hide()
                    this.applyMargins()
                })
                this.applyInitialUIState()
                this.applyMargins()

                // ? $(window).on("resize", this.applyMargins)
            })
        }, 100)
    }

    activate($timeout, webDevTec) {
        this.getWebDevTec(webDevTec)
        $timeout(() => {
            this.classAnimation = 'rubberBand'
        }, 4000)
    }

    getWebDevTec(webDevTec) {
        this.awesomeThings = webDevTec.getTec()
        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random()
        })
    }

    showToastr() {
        this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>')
        this.classAnimation = ''
    }

    //map functions
    applyMargins() {
        var leftToggler = angular.element(".mini-submenu-left")
        if (leftToggler.is(":visible")) {
            angular.element("#map .ol-zoom")
                .css("margin-left", 0)
                .removeClass("zoom-top-opened-sidebar")
                .addClass("zoom-top-collapsed")
        } else {
            angular.element("#map .ol-zoom")
                .css("margin-left", angular.element(".sidebar-left").width())
                .removeClass("zoom-top-opened-sidebar")
                .removeClass("zoom-top-collapsed")
        }
    }

    isConstrained() {
        return angular.element(".sidebar").width() == angular.element(window).width()
    }

    applyInitialUIState() {
        if (this.isConstrained()) {
            angular.element(".sidebar-left .sidebar-body").fadeOut('slide')
            angular.element('.mini-submenu-left').fadeIn()
        }
    }

}
