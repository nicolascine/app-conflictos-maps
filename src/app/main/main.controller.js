export class MainController {
    constructor($timeout, webDevTec, toastr) {
        'ngInject'

        angular.element('#page-content-wrapper, .angular-google-map-container').height(angular.element(window).height())
            //let mapStyleArray = [{ "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#6c6c6c" }] }, { "featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{ "color": "#8d8d8d" }] }, { "featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "color": "#636363" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#eae5db" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#747474" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#eae5db" }] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#ff0000" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "landscape", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ff0000" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#555555" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#372f17" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46a6ec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#d2d2d2" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#7d6565" }] }]

        let mapStyleArray = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
            //[{ featureType: "road", elementType: "labels", stylers: [{ visibility: "on" }] }, { featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "administrative", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { weight: 1 }] }, { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { weight: .8 }] }, { featureType: "landscape", stylers: [{ color: "#ffffff" }] }, { featureType: "water", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }, { elementType: "labels", stylers: [{ visibility: "off" }] }, { elementType: "labels.text", stylers: [{ visibility: "on" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#000000" }] }, { elementType: "labels.icon", stylers: [{ visibility: "on" }] }]
        this.onReady($timeout)
        this.awesomeThings = []
        this.classAnimation = ''
        this.creationDate = 1465675174760
        this.toastr = toastr
        this.activate($timeout, webDevTec)
        this.getHours = this.getPoints()
        this.map = {
            center: {
                latitude: -33.0479873,
                longitude: -71.6156841
            },
            zoom: 16,
            lineaRecorrido: {
                color: '#76b585',
                weight: 5,
                opacity: 0.7
            },
            lineaCorteCalles: {
                color: '#337ab7',
                weight: 5,
                opacity: 0.7
            },
            markers: []
        }

        // < ui - gmap - polyline visible = "main.routeLineVisible"
        // path = "main.recorridoMarcha"
        // draggable = "false"
        // geodesic = "true"
        // stroke = "main.map.lineaRecorrido"
        // fit = "true" >

        //     < ui - gmap - polyline visible = "main.routeCorteVisible"
        // path = "main.corteCalles"
        // draggable = "false"
        // geodesic = "true"
        // stroke = "main.map.lineCorteCalles"
        // fit = "true" >


        this.mapOptions = {
            styles: mapStyleArray,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        }

        // Recorrido Marcha <----------------------------|
        this.recorridoMarcha = [
            { "latitude": -33.043737, "longitude": -71.622888 },
            { "latitude": -33.044870, "longitude": -71.623671 },
            { "latitude": -33.045339, "longitude": -71.622689 },
            { "latitude": -33.045816, "longitude": -71.622063 },
            { "latitude": -33.046216, "longitude": -71.621448 },
            { "latitude": -33.046781, "longitude": -71.619582 },
            { "latitude": -33.046515, "longitude": -71.619482 },
            { "latitude": -33.046752, "longitude": -71.618417 },
            { "latitude": -33.047086, "longitude": -71.614781 }
        ]

        // Linea corte calles <----------------------------|
        this.corteCalles = [
            { "latitude": -33.045616, "longitude": -71.612320 },
            { "latitude": -33.045670, "longitude": -71.608093 },
            { "latitude": -33.045634, "longitude": -71.607149 },
            { "latitude": -33.045454, "longitude": -71.605840 },
            { "latitude": -33.045202, "longitude": -71.605067 },
            { "latitude": -33.045454, "longitude": -71.605003 },
            { "latitude": -33.051209, "longitude": -71.602664 },
            { "latitude": -33.048745, "longitude": -71.612878 },
            { "latitude": -33.047253, "longitude": -71.612749 },
            { "latitude": -33.045634, "longitude": -71.612341 }
        ]

        this.routeLineVisible = true
        this.routeCorteVisible = true
        this.setMarkers()
        this.timelineContentData = []

    }


    // if( hour == point.hourInit || point.hourInit <= hour && hour <= point.hourEnd )

    //out of constructor
    setDataInfo(info) {
        console.log(info)
        this.timelineContentData = info
    }
    setMarkers() {
        _.mapValues(this.getHours, (point) => {
            _.mapValues(point.markers, (mark) => {
                if (mark.lat && mark.lon) {
                    var marker = {
                            id: Date.now(),
                            coords: {
                                latitude: mark.lat,
                                longitude: mark.lon
                            },
                            options: {
                                icon: {
                                    url: 'assets/images/' + mark.type + '.png',
                                    anchor: new google.maps.Point(25, 50),
                                    scaledSize: new google.maps.Size(50, 50)
                                },
                                typeName: mark.type,
                                subTypeName: mark.subtype,
                                title: mark.desc,
                                hour: point.Hora_ini,
                                image: mark.media
                            },
                            events: {
                                click: (marker, eventName, model) => {
                                    // console.log(model.$parent.$parent.$parent.$parent.main.timelineContentData)
                                    // model.$parent.$parent.$parent.$parent.main.timelineContentData = []
                                    let info = [{
                                        'type': model.options.typeName,
                                        'subType': model.options.subTypeName,
                                        'hour': model.options.hour,
                                        'image': model.options.image,
                                        'link': 'http://google.com',
                                        'text': model.options.title
                                    }]
                                    this.setDataInfo(info)
                                }
                            }
                        }
                        //console.log(marker)
                    this.map.markers.push(marker)
                }
            })
        })
    }

    setPointOnMap(hour) {
        this.map.markers = []

        function toSeconds(t) {
            var bits = t.split(':')
            return bits[0] * 3600 + bits[1] * 60 + bits[2] * 1
        }
        _.mapValues(this.points, (point) => {
            _.mapValues(point.markers, (mark) => {
                if (mark.lat && mark.lon) {
                    let horaClick = toSeconds(hour + ':00')
                    let horaInicial = toSeconds(point.Hora_ini + ':00')
                    let horaFinal = toSeconds(mark.Hora_fin + ':00')
                    if (horaClick == horaInicial || (horaInicial <= horaClick && horaClick <= horaFinal)) {
                        var marker = {
                            id: Date.now(),
                            coords: {
                                latitude: mark.lat,
                                longitude: mark.lon
                            },
                            options: {
                                icon: {
                                    url: 'assets/images/' + mark.type + '.png',
                                    anchor: new google.maps.Point(25, 50),
                                    scaledSize: new google.maps.Size(50, 50)
                                },
                                typeName: mark.type,
                                subTypeName: mark.subtype,
                                title: mark.desc,
                                hour: point.Hora_ini,
                                image: mark.media
                            },
                            events: {
                                click: (marker, eventName, model) => {
                                    // console.log(model.$parent.$parent.$parent.$parent.main.timelineContentData)
                                    // model.$parent.$parent.$parent.$parent.main.timelineContentData = []
                                    let info = [{
                                        'type': model.options.typeName,
                                        'subType': model.options.subTypeName,
                                        'hour': model.options.hour,
                                        'image': model.options.image,
                                        'link': 'http://google.com',
                                        'text': model.options.title
                                    }]
                                    console.log(model.options.image)
                                    this.setDataInfo(info)
                                }
                            }
                        }
                        this.map.markers.push(marker)
                    }
                    //-------->
                }
            })

        })

    }

    removeAllPoints() {
        this.map.markers = []
    }

    toggleRoute() {
        this.routeLineVisible = this.routeLineVisible ? false : true
    }

    onReady($timeout) {
        $timeout(() => {
            angular.element(document).ready(() => {

                angular.element("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    angular.element("#wrapper").toggleClass("toggled");
                })
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

    getPoints() {

        let allPoints = {
            "points": [

                {
                    "Hora_ini": "07:00",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Efectivos de Carabineros realiza inspección de seguridad en Dependencias del Congreso Nacional antes de la cuenta anual que realizará la presidenta Bachelet. Las puertas del Parlamento se abren a las 8:00 am.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "01-FOTO736.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "08:35",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "07:43",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Los preparativos de seguridad en las afueras del Congreso. Cerca de 1.700 efectivos de Carabineros se han desplegado en Valparaíso para la jornada.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "02-FOTO743.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "08:30",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "07:49",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Ministros comienzan a llegar a Cerro Castillo para la foto oficial.Cerca de las 8:15 será la fotografía oficial de la Presidenta Michelle Bachelet y su gabinete.",
                        "lat": -33.02003,
                        "lon": -71.564443,
                        "address": "Palacio Presidencial de Cerro Castillo",
                        "media": "03-FOTO749.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "08:00",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "07:52",
                    "markers": [{
                        "type": "oficial",
                        "subtype": "cortes de tránsito",
                        "desc": "Calles de Valparaíso ya están con cortes de tránsito",
                        "lat": null,
                        "lon": null,
                        "address": "Sin datos",
                        "media": "04-FOTO752.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "08:52",
                        "intensidad": 1
                    }, {
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/tteinformavalpo/status/733986891834462208/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "08:52",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "08:00",
                    "markers": [{
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada (Francia con Yungay).",
                        "lat": -33.045616,
                        "lon": -71.612299,
                        "address": "",
                        "media": "33-FOTO8000.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada (Yungay con Avenida España).",
                        "lat": -33.045229,
                        "lon": -71.605025,
                        "address": "",
                        "media": "34-FOTO0800.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada (Avenida España con Independencia).",
                        "lat": -33.051227,
                        "lon": -71.602708,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada (Independencia con Avenida Francia).",
                        "lat": -33.04879,
                        "lon": -71.6129,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.04728,
                        "lon": -71.612771,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.047091,
                        "lon": -71.614638,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.049294,
                        "lon": -71.61511,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.048305,
                        "lon": -71.619037,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.042828,
                        "lon": -71.623715,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }, {
                        "type": "oficial",
                        "subtype": "disposición policial",
                        "desc": "Piquetes de Carabineros toman posición a la espera de las actividades dispuestas para esta jornada.",
                        "lat": -33.044995,
                        "lon": -71.615947,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:23",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Presidenta Michelle Bachelet se toma la foto oficial junto a su gabinete. La Presidenta mantiene prácticamente su mismo equipo salvo dos excepciones: el ex ministro de la Segpres, Jorge Insunza, quien salió del cargo el 7 de junio de 2015. En su reemplazo asumió Nicolás Eyzaguirre, quien dejó el ministerio de Educación, y Adriana Delpiano ingresó al gabinete.",
                        "lat": -33.02003,
                        "lon": -71.564443,
                        "address": "Palacio Presidencial de Cerro Castillo",
                        "media": "05-FOTO823.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "09:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:25",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Equipo motorizado de Carabineros se rehúne para coordinar operativos de seguridad.",
                        "lat": -33.047262,
                        "lon": -71.605967,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:35",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Fuerzas Armadas y Carabineros desfilan fuera del Congreso Nacional a poco de que se inicie la cuenta anual de la Presidenta Bachelet.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "09:10",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:36",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/Carabdechile/status/733999779559145473/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "09:36",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:44",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/AVergaraJackson/status/734002004138328064?ref_src=twsrc%5Etfw",
                        "Hora_fin": "09:44",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:48",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/UNE_udp/status/734003029691793410?ref_src=twsrc%5Etfw",
                        "Hora_fin": "09:48",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "08:57",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "marcha",
                        "desc": "Comienzan a reunirse manifestantes en Valparaíso. Estudiantes, pescadores y distintas organizaciones sociales convocaron a una marcha que comenzará a las 9:30 horas.",
                        "lat": -33.043839,
                        "lon": -71.623191,
                        "address": "Plaza Cívica de Valparaíso",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "10:21",
                        "intensidad": 3
                    }, {
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/carcamofelipe/status/734005120174850048?ref_src=twsrc%5Etfw",
                        "Hora_fin": "09:57",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:00",
                    "markers": [{
                        "type": "",
                        "subtype": "",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "00:00",
                        "intensidad": null
                    }]
                }, {
                    "Hora_ini": "09:05",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734007149299412993?ref_src=twsrc%5Etfw",
                        "Hora_fin": "10:05",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:08",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Comienzan a llegar hasta el frontis del Congreso Nacional manifestantes y partidarios de Michelle Bachelet.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "06-FOTO908.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "10:10",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:18",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Presidenta Michelle Bachelet llega al Congreso Nacional a bordo del tradicional Ford Galaxy descapotable.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "08-FOTO918.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "09:35",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:30",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "marcha",
                        "desc": "Centenares de manifestantes comienzan una marcha pacífica hacia el Congreso Nacional. En la movilización participa la Confech, Anef, 'no al TPP Valparaíso', Valparaíso Ciudadano y Cut provincial.",
                        "lat": -33.043764,
                        "lon": -71.622899,
                        "address": "Brasil esquina Bellavista, Valparaíso",
                        "media": "09-FOTO930.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "10:21",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:31",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.044007,
                        "lon": -71.62306,
                        "address": "Bellavista",
                        "media": "",
                        "redes_sociales": "https://twitter.com/tteinformavalpo/status/734013265819381760?ref_src=twsrc%5Etfw",
                        "Hora_fin": "10:31",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "09:35",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.044137,
                        "lon": -71.623157,
                        "address": "Bellavista",
                        "media": "",
                        "redes_sociales": "https://twitter.com/UNE_Chile/status/734009704934957056?ref_src=twsrc%5Etfw",
                        "Hora_fin": "10:35",
                        "intensidad": 3
                    }, {
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Comienza discurso de Presidenta Michelle Bachelet: Presidenta dirige su discurso a los 'ciudadanos y ciudadanas de la patria, a las familias, a los líderes sociales, a los trabajadores, a los empresarios, a los pueblos indígenas'.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "10-FOTO935.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "11:00",
                        "intensidad": 3
                    }]
                }, {
                    "Hora_ini": "10:00",
                    "markers": [{
                        "type": "",
                        "subtype": "",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "00:00",
                        "intensidad": null
                    }]
                }, {
                    "Hora_ini": "10:21",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "marcha",
                        "desc": "Marcha llega a esta hora a calle Pedro Montt y aparecen las primeras barricadas.",
                        "lat": -33.046535,
                        "lon": -71.619386,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:37",
                        "intensidad": 3
                    }, {
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Grupos minoritarios de manifestantes comienzan a encender barricadas durante la marcha convocada por distintos sectores sociales.",
                        "lat": -33.046535,
                        "lon": -71.619386,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:33",
                        "intensidad": 3
                    }, {
                        "type": "incidentes",
                        "subtype": "marcha",
                        "desc": "Así transcurre la marcha convocada por distintos sectores sociales para manifestarse contra la autoridad y demandar mejores condiciones.",
                        "lat": -33.046615,
                        "lon": -71.619096,
                        "address": "Pedro Montt",
                        "media": "11-FOTO1021.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "11:37",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "10:33",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "información prensa",
                        "desc": "Efectivos de Carabineros comienza a retirar a manifestantes que se encuentran frente al Congreso Nacional.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "12-FOTO1033.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "11:00",
                        "intensidad": 4
                    }, {
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/brionesantonio/status/734027936509112321?ref_src=twsrc%5Etfw",
                        "Hora_fin": "11:33",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "10:34",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamiento",
                        "desc": "Se registran nuevos incidentes entre manifestantes que intentan llegar al Congreso Nacional y las fuerzas policiales a cargo de mantener el orden en la ciudad puerto.",
                        "lat": -33.047123,
                        "lon": -71.614307,
                        "address": "Pedro Montt",
                        "media": "13-FOTO1034.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "11:50",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "10:37",
                    "markers": [{
                        "type": "Incidentes",
                        "subtype": "marcha",
                        "desc": "Marcha llega a su punto final. Calle Freire con Pedro Montt y comienzan a registrarse incidentes con la policía.",
                        "lat": -33.047084,
                        "lon": -71.614789,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:37",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "10:39",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.047213,
                        "lon": -71.613395,
                        "address": "Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734030865764847618",
                        "Hora_fin": "11:39",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "10:52",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Tras la marcha un pequeño grupo de encapachados encendió barricadas en la Pedro Montt.",
                        "lat": -33.046525,
                        "lon": -71.619483,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Tras la marcha un pequeño grupo de encapachados encendió barricadas en la Pedro Montt.",
                        "lat": -33.046741,
                        "lon": -71.618442,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Tras la marcha un pequeño grupo de encapachados encendió barricadas en la Pedro Montt.",
                        "lat": -33.046866,
                        "lon": -71.617087,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "10:53",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046879,
                        "lon": -33.046879,
                        "address": "Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/AlexBajista/status/734034326149582849/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "11:53",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "10:55",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Encapchados intentan saquiar Farmacia de calle Montt y preden fuego al local comercial.",
                        "lat": -33.046845,
                        "lon": -71.617106,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Manifestantes encienden barricadas y comienzan actos de violencia y destrucción de la propiedad pública y privada.",
                        "lat": -33.046857,
                        "lon": -71.617044,
                        "address": "Pedro Montt",
                        "media": "14_FOTO1055.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "10:57",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.043805,
                        "lon": -71.605975,
                        "address": "Errázuriz",
                        "media": "",
                        "redes_sociales": "https://twitter.com/thnoman/status/734035269456953344/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "11:57",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:00",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Bomberos llegan al lugar del siniestro, enfrentan a los encapchados, e inician el combate de las llamas.",
                        "lat": -33.046869,
                        "lon": -71.617227,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "15:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Manifestantes preden fuego a una farmacia tras marcha del 21 de mayo.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "15-FOTO1100.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "11:30",
                        "intensidad": 5
                    }, {
                        "type": "",
                        "subtype": "",
                        "desc": "Comienzan a Lanzar gases lacrimógenes en Chacabuco con Las Heras.",
                        "lat": -33.046025,
                        "lon": -71.616969,
                        "address": "Chacabuco esquina Las Heras",
                        "media": "18_FOTO1100.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "12:00",
                        "intensidad": 5
                    }, {
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046007,
                        "lon": -71.616899,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/obsDDHHcl/status/734036087094513664?ref_src=twsrc%5Etfw",
                        "Hora_fin": "12:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:01",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046839,
                        "lon": -71.617071,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734036488971767809?ref_src=twsrc%5Etfw",
                        "Hora_fin": "12:01",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:02",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamientos",
                        "desc": "Finaliza discurso de la Presidenta Bachelet ante el Congreso Pleno.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "16-FOTO1102.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:04",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Bomberos y carros lanza aguas de Carabineros combaten incendio en farmacia saqueada.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "17-FOTO1104.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:10",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Voluntarios del Cuerpo de Bomberos de Valparaíso logran acceder al edificio siniestrado.",
                        "lat": -33.046817,
                        "lon": -71.617136,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:30",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:14",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Incendio en edificio patrimonial: Primeros antecedentes indican que el lugar no estaba habitado. Concejo Municipal y oficinas del municipio de Valparaíso funcionaban en el edificio.",
                        "lat": -33.04701,
                        "lon": -71.617044,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:30",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:20",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.047,
                        "lon": -71.617133,
                        "address": "Las Heras",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734041062872907776/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "11:20",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:26",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "El Alcalde de Valparaíso, Jorge Castro, aseguró que 'las pérdidas son millonarias' tras incendio en edificio municipal. 'Hay tres locales comerciales quemados. Estamos cometiendo un grueso error sobre seguir estas prácticas en Valparaíso', afirmó, reiterando sus críticas a que la cuenta pública se realice en la ciudad",
                        "lat": -33.052548,
                        "lon": -71.602669,
                        "address": "Avenida Argentina 864",
                        "media": "19-FOTO1126.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "12:30",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:30",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Bomberos rescata desde el edificio siniestrado a una persona que se encontraba atrapada en el inmueble.",
                        "lat": -33.046839,
                        "lon": -71.617123,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "11:50",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:32",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Personal de emergencia trabaja en reanimación de hombre afectado tras incidentes",
                        "lat": -33.046766,
                        "lon": -71.617047,
                        "address": "Las Heras",
                        "media": "20-FOTO1132.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "12:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:44",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Efectivos de Carabineros llega al lugar para intentar sofocar los actos de violencia de los encapuchados mientras Bomberos sigue en el combate de las llamas.",
                        "lat": -33.047022,
                        "lon": -71.617117,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Efectivos de Carabineros llega al lugar para intentar sofocar los actos de violencia de los encapuchados mientras Bomberos sigue en el combate de las llamas.",
                        "lat": -33.046822,
                        "lon": -71.617549,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734045175589150720/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "12:44",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:47",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.045498,
                        "lon": -71.606007,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/BombaAustria/status/734042876410245120?ref_src=twsrc%5Etfw",
                        "Hora_fin": "12:47",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:52",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Como el funcionario municipal Eduardo Lara fue identificada la personas rescatada por bomberos desde el edificio siniestrado en calle Montt.",
                        "lat": -33.04686,
                        "lon": -71.616961,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:53",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamientos",
                        "desc": "Continúan los violentos enfrentanmientos entre manifestantes y policías.",
                        "lat": -33.046739,
                        "lon": -71.618412,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:54",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamientos",
                        "desc": "Encapuchados intenta saquiar tienda Ripley frente a plaza Victoria y le prenden fuego.",
                        "lat": -33.04673,
                        "lon": -71.620017,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }, {
                        "type": "incidentes",
                        "subtype": "enfrentamiento",
                        "desc": "Edificio en calle Carrera con Pedro Montt también se incendia y encapuchados no permiten ingreso de personal de emergencia",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "21-FOTO1154.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:58",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "Comandante de Bomberos descarta presencia de nuevos trabajadores en incendios.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "22-FOTO1158.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "12:20",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "11:59",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "",
                        "redes_sociales": "https://twitter.com/obsDDHHcl/status/734051069593059332/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "12:58",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:00",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamientos",
                        "desc": "Continúan los operativos de Carabineros. En plaza Victoria se registraron detenidos.",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "23-FOTO1200.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:08",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Guardia municipal es traladado hasta el hospital Van Buren donde continúan los trabajos de reanimación.",
                        "lat": -33.050728,
                        "lon": -71.610771,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "12:11",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:11",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "En la Gobernación de Valparaíso, el Ministerio del Interior confirma muerte de ​Eduardo Lara, trabajador asfixiado en incendio.",
                        "lat": -33.043284,
                        "lon": -71.623729,
                        "address": "Brasil",
                        "media": "24-FOTO1211.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:19",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "Autoridades del Hospital Carlos van Buren informan del fallecimiento del guardia municipal Eduardo Lara como consecuencia de las lesiones sufridas en el incendio que fue iniciado por encapuchados.",
                        "lat": -33.050728,
                        "lon": -71.610771,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:21",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Fiscal jefe de Valparaíso confirma muerte de trabajador: 'Estamos en la presencia de un incendio intencional. A raíz del mismo habría provocado la muerte de esta persona'.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "25-FOTO1221.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:30",
                        "intensidad": 5
                    }]
                }, {
                    "Hora_ini": "12:26",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "",
                        "redes_sociales": "https://twitter.com/presidencia_cl/status/734057791749382144?ref_src=twsrc%5Etfw",
                        "Hora_fin": "13:26",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "12:31",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "Gobierno anuncia acciones legales 'para perseguir la responsabilidad de quienes provocaron estos hechos'.",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "26-FOTO1231.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:30",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "12:38",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Autoridades confirman detenidos por incendio que terminó con muerte de Eduardo Lara.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "27-FOTO1238.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "14:00",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "12:41",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "barricadas",
                        "desc": "Encapuchados atacan comercio en calle Independencia",
                        "lat": -33.046816,
                        "lon": -71.619973,
                        "address": "Avenida Independencia",
                        "media": "28-FOTO1243.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "13:00",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "12:42",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734061618859024386/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "13:42",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "12:56",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/Tele13_Radio/status/734065390981140480?ref_src=twsrc%5Etfw",
                        "Hora_fin": "13:56",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "13:00",
                    "markers": [{
                        "type": "",
                        "subtype": "",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "00:00",
                        "intensidad": null
                    }]
                }, {
                    "Hora_ini": "13:07",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Bomberos controla primer foco de incendio en Calle Carrera con Pedro Montt.",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "29-FOTO1307.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "14:00",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "13:15",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734070095744512001/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "14:15",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "13:38",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Se reactiva incendio en edificio patrimonial de Valparaíso.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "31-FOTO1338.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "15:00",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "13:41",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Alcalde de Valparaíso por muerte de guardia: 'Hay responsabilidades políticas'",
                        "lat": -33.052521,
                        "lon": -71.602691,
                        "address": "Avenida Argentina",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 4
                    }]
                }, {
                    "Hora_ini": "13:45",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion ciudadana",
                        "desc": "",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734077788764921856/photo/1?ref_src=twsrc%5Etfw",
                        "Hora_fin": "14:35",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "13:53",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "informacion prensa",
                        "desc": "Intendente de Valparaíso confirma que hay 19 detenidos y se espera que entre ellos se pueda identificar a culpables de iniciar incendio",
                        "lat": -33.042935,
                        "lon": -71.623585,
                        "address": "Brasil",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "14:00",
                    "markers": [{
                        "type": "",
                        "subtype": "",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "00:00",
                        "intensidad": null
                    }]
                }, {
                    "Hora_ini": "14:13",
                    "markers": [{
                        "type": "informacion",
                        "subtype": "oficial",
                        "desc": "Carabineros entrega cuenta preliminar sobre incidentes en Valparaíso: 26 hombres adultos, 7 mujeres, 4 menores: Total  37",
                        "lat": -33.04686,
                        "lon": -71.619401,
                        "address": "Avenida Independencia",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "14:16",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Sigue el trabajo de Bomberos para controlar el incendio de Montt con Las Heras.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": "http://www.24liveblog.com/share/194207831?url=http://www.t13.cl/noticia/nacional/minuto-minuto-sigue-todos-detalles-esta-jornada-21-mayo",
                        "Hora_fin": "16:00",
                        "intensidad": 2
                    }]
                }, {
                    "Hora_ini": "15:00",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "enfrentamiento",
                        "desc": "Carabineros controla los incidentes en el casco antiguo de Valparaíso y paulatinamente retorna el orden.",
                        "lat": -33.047373,
                        "lon": -71.608801,
                        "address": "Pedro Montt",
                        "media": "32-FOTO1500.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "15:30",
                    "markers": [{
                        "type": "incidentes",
                        "subtype": "incendio",
                        "desc": "Bomberos controla incendio y comienza con trabajo de remoción de escombros.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "33-FOTO1530.jpg",
                        "redes_sociales": "",
                        "Hora_fin": "16:00",
                        "intensidad": 1
                    }]
                }, {
                    "Hora_ini": "16:00",
                    "markers": [{
                        "type": "",
                        "subtype": "",
                        "desc": "",
                        "lat": null,
                        "lon": null,
                        "address": "",
                        "media": "",
                        "redes_sociales": "",
                        "Hora_fin": "00:00",
                        "intensidad": null
                    }]
                }
            ] >>> >>> > feat(): udpate map
        }




        return allPoints.points
    }

}
