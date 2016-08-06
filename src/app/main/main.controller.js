export class MainController {
    constructor($timeout, webDevTec, toastr) {
        'ngInject'

        angular.element('#page-content-wrapper, .angular-google-map-container').height(angular.element(window).height())
        let mapStyleArray = [{ "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "color": "#ff0000" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#6c6c6c" }] }, { "featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{ "color": "#8d8d8d" }] }, { "featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "color": "#636363" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#eae5db" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#747474" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#eae5db" }] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#ff0000" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "landscape", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ff0000" }, { "visibility": "off" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#555555" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#372f17" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46a6ec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#d2d2d2" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#7d6565" }] }]
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
            lineStyle: {
                color: '#ffc107',
                weight: 15,
                opacity: 0.7
            },
            markers: []
        }

        this.mapOptions = {
            styles: mapStyleArray
        }

        this.locations = [{
            "latitude": -33.043737,
            "longitude": -71.622888
        }, {
            "latitude": -33.044870,
            "longitude": -71.623671
        }, {
            "latitude": -33.046786,
            "longitude": -71.619637
        }, {
            "latitude": -33.046489,
            "longitude": -71.619508
        }, {
            "latitude": -33.047074,
            "longitude": -71.614798
        }]
        this.routeLineVisible = true
        this.setMarkers()
    }

    //out of constructor
    setMarkers() {

        _.mapValues(this.getHours, (point) => {
            console.log(point.hour)
            _.mapValues(point.markers, (mark) => {
                if (mark.lat && mark.lon) {
                    var marker = {
                        id: Date.now(),
                        coords: {
                            latitude: mark.lat,
                            longitude: mark.lon
                        }
                    }
                    this.map.markers.push(marker)
                }
            })
        })
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
                    "hour": "07:00",
                    "markers": [{
                        "type": "Carabineros",
                        "Descripcion": "Efectivos de Carabineros realiza inspección de seguridad en Dependencias del Congreso Nacional antes de la cuenta anual que realizará la presidenta Bachelet. Las puertas del Parlamento se abren a las 8:00 am.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "01-FOTO736.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "07:43",
                    "markers": [{
                        "type": "Carabineros",
                        "Descripcion": "Los preparativos de seguridad en las afueras del Congreso. Cerca de 1.700 efectivos de Carabineros se han desplegado en Valparaíso para la jornada.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "02-FOTO743.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "07:49",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Ministros comienzan a llegar a Cerro Castillo para la foto oficial.Cerca de las 8:15 será la fotografía oficial de la Presidenta Michelle Bachelet y su gabinete.",
                        "lat": -33.02003,
                        "lon": -71.564443,
                        "address": "Palacio Presidencial de Cerro Castillo",
                        "media": "03-FOTO749.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "07:52",
                    "markers": [{
                        "type": "Cortes de tránsito",
                        "Descripcion": "Calles de Valparaíso ya están con cortes de tránsito",
                        "lat": null,
                        "lon": null,
                        "address": "Sin datos",
                        "media": "04-FOTO752.jpg",
                        "redes_sociales": ""
                    }, {
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/tteinformavalpo/status/733986891834462208/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "08:23",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Presidenta Michelle Bachelet se toma la foto oficial junto a su gabinete. La Presidenta mantiene prácticamente su mismo equipo salvo dos excepciones: el ex ministro de la Segpres, Jorge Insunza, quien salió del cargo el 7 de junio de 2015. En su reemplazo asumió Nicolás Eyzaguirre, quien dejó el ministerio de Educación, y Adriana Delpiano ingresó al gabinete.",
                        "lat": -33.02003,
                        "lon": -71.564443,
                        "address": "Palacio Presidencial de Cerro Castillo",
                        "media": "05-FOTO823.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "08:35",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Fuerzas Armadas y Carabineros desfilan fuera del Congreso Nacional a poco de que se inicie la cuenta anual de la Presidenta Bachelet.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "08:36",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/Carabdechile/status/733999779559145473/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "08:44",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/AVergaraJackson/status/734002004138328064?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "08:48",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/UNE_udp/status/734003029691793410?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "08:57",
                    "markers": [{
                        "type": "Manifestantes",
                        "Descripcion": "Comienzan a reunirse manifestantes en Valparaíso. Estudiantes, pescadores y distintas organizaciones sociales convocaron a una marcha que comenzará a las 9:30 horas.",
                        "lat": -33.043839,
                        "lon": -71.623191,
                        "address": "Plaza Cívica de Valparaíso",
                        "media": "",
                        "redes_sociales": ""
                    }, {
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/carcamofelipe/status/734005120174850048?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "09:05",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": null,
                        "lon": null,
                        "address": "Sin asignar",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734007149299412993?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "09:08",
                    "markers": [{
                        "type": "Manifestantes",
                        "Descripcion": "Comienzan a llegar hasta el frontis del Congreso Nacional manifestantes y partidarios de Michelle Bachelet.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "06-FOTO908.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "09:18",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Presidenta Michelle Bachelet llega al Congreso Nacional a bordo del tradicional Ford Galaxy descapotable.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "08-FOTO918.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "09:30",
                    "markers": [{
                        "type": "Manifestantes",
                        "Descripcion": "Centenares de manifestantes comienzan una marcha pacífica hacia el Congreso Nacional. En la movilización participa la Confech, Anef, 'no al TPP Valparaíso', Valparaíso Ciudadano y Cut provincial.",
                        "lat": -33.043764,
                        "lon": -71.622899,
                        "address": "Brasil esquina Bellavista, Valparaíso",
                        "media": "09-FOTO930.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "09:31",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.044007,
                        "lon": -71.62306,
                        "address": "Bellavista",
                        "media": "",
                        "redes_sociales": "https://twitter.com/tteinformavalpo/status/734013265819381760?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "09:35",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Comienza discurso de Presidenta Michelle Bachelet: Presidenta dirige su discurso a los 'ciudadanos y ciudadanas de la patria, a las familias, a los líderes sociales, a los trabajadores, a los empresarios, a los pueblos indígenas'.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "10-FOTO935.jpg",
                        "redes_sociales": ""
                    }, {
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.044137,
                        "lon": -71.623157,
                        "address": "Bellavista",
                        "media": "",
                        "redes_sociales": "https://twitter.com/UNE_Chile/status/734009704934957056?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "10:21",
                    "markers": [{
                        "type": "Manifestantes",
                        "Descripcion": "Así transcurre la marcha convocada por distintos sectores sociales para manifestarse contra la autoridad y demandar mejores condiciones.",
                        "lat": -33.046615,
                        "lon": -71.619096,
                        "address": "Pedro Montt",
                        "media": "11-FOTO1021.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "10:33",
                    "markers": [{
                        "type": "Carabineros",
                        "Descripcion": "Efectivos de Carabineros comienza a retirar a manifestantes que se encuentran frente al Congreso Nacional.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "12-FOTO1033.jpg",
                        "redes_sociales": ""
                    }, {
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/brionesantonio/status/734027936509112321?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "10:34",
                    "markers": [{
                        "type": "Incidentes",
                        "Descripcion": "Se registran los primeros incidentes entre manifestantes que intentan llegar al Congreso Nacional y las fuerzas policiales a cargo de mantener el orden en la ciudad puerto.",
                        "lat": -33.047123,
                        "lon": -71.614307,
                        "address": "Pedro Montt",
                        "media": "13-FOTO1034.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "10:39",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.047213,
                        "lon": -71.613395,
                        "address": "Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734030865764847618"
                    }]
                }, {
                    "hour": "10:53",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046879,
                        "lon": -33.046879,
                        "address": "Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/AlexBajista/status/734034326149582849/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "10:55",
                    "markers": [{
                        "type": "Incidentes",
                        "Descripcion": "Manifestantes encienden barricadas y comienzan actos de violencia y destrucción de la propiedad pública y privada.",
                        "lat": -33.046857,
                        "lon": -71.617044,
                        "address": "Pedro Montt",
                        "media": "14_FOTO1055.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "10:57",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.043805,
                        "lon": -71.605975,
                        "address": "Errázuriz",
                        "media": "",
                        "redes_sociales": "https://twitter.com/thnoman/status/734035269456953344/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:00",
                    "markers": [{
                        "type": "Incendio",
                        "Descripcion": "Manifestantes preden fuego a una farmacia tras marcha del 21 de mayo.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "15-FOTO1100.jpg",
                        "redes_sociales": ""
                    }, {
                        "type": "Incidentes",
                        "Descripcion": "Comienzan a Lanzar gases lacrimógenes en Chacabuco con Las Heras.",
                        "lat": -33.046025,
                        "lon": -71.616969,
                        "address": "Chacabuco esquina Las Heras",
                        "media": "18_FOTO1100.jpg",
                        "redes_sociales": ""
                    }, {
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046007,
                        "lon": -71.616899,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/obsDDHHcl/status/734036087094513664?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:01",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046839,
                        "lon": -71.617071,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734036488971767809?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:02",
                    "markers": [{
                        "type": "Gobierno",
                        "Descripcion": "Finaliza discurso de la Presidenta Bachelet ante el Congreso Pleno.",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "16-FOTO1102.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:04",
                    "markers": [{
                        "type": "Bomberos",
                        "Descripcion": "Bomberos y carros lanza aguas de Carabineros combaten incendio en farmacia saqueada.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "17-FOTO1104.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:14",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Incendio en edificio patrimonial: Primeros antecedentes indican que el lugar no estaba habitado. Concejo Municipal y oficinas del municipio de Valparaíso funcionaban en el edificio.",
                        "lat": -33.04701,
                        "lon": -71.617044,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:20",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.047,
                        "lon": -71.617133,
                        "address": "Las Heras",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734041062872907776/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:26",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "El Alcalde de Valparaíso, Jorge Castro, aseguró que 'las pérdidas son millonarias' tras incendio en edificio municipal. 'Hay tres locales comerciales quemados. Estamos cometiendo un grueso error sobre seguir estas prácticas en Valparaíso', afirmó, reiterando sus críticas a que la cuenta pública se realice en la ciudad",
                        "lat": -33.052548,
                        "lon": -71.602669,
                        "address": "Avenida Argentina 864",
                        "media": "19-FOTO1126.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:32",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Personal de emergencia trabaja en reanimación de hombre afectado tras incidentes",
                        "lat": -33.046766,
                        "lon": -71.617047,
                        "address": "Las Heras",
                        "media": "20-FOTO1132.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:44",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.047782,
                        "lon": -71.6056,
                        "address": "Congreso Nacional,  Pedro Montt 2802",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734045175589150720/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:47",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.045498,
                        "lon": -71.606007,
                        "address": "",
                        "media": "",
                        "redes_sociales": "https://twitter.com/BombaAustria/status/734042876410245120?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "11:54",
                    "markers": [{
                        "type": "Incendio",
                        "Descripcion": "Edificio en calle Carrera con Pedro Montt también se incendia y encapuchados no permiten ingreso de personal de emergencia",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "21-FOTO1154.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:58",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Comandante de Bomberos descarta presencia de nuevos trabajadores en incendios.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "22-FOTO1158.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "11:59",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "",
                        "redes_sociales": "https://twitter.com/obsDDHHcl/status/734051069593059332/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "12:00",
                    "markers": [{
                        "type": "Carabineros",
                        "Descripcion": "Continúan los operativos de Carabineros. En plaza Victoria se registraron detenidos.",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "23-FOTO1200.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:11",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "En la Gobernación de Valparaíso, el Ministerio del Interior confirma muerte de ​Eduardo Lara, trabajador asfixiado en incendio.",
                        "lat": -33.043284,
                        "lon": -71.623729,
                        "address": "Brasil",
                        "media": "24-FOTO1211.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:21",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Fiscal jefe de Valparaíso confirma muerte de trabajador: 'Estamos en la presencia de un incendio intencional. A raíz del mismo habría provocado la muerte de esta persona'.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "25-FOTO1221.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:26",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "",
                        "redes_sociales": "https://twitter.com/presidencia_cl/status/734057791749382144?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "12:31",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Gobierno anuncia acciones legales 'para perseguir la responsabilidad de quienes provocaron estos hechos'.",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "26-FOTO1231.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:38",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Autoridades confirman detenidos por incendio que terminó con muerte de Eduardo Lara.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "27-FOTO1238.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:41",
                    "markers": [{
                        "type": "Incendio",
                        "Descripcion": "Encapuchados atacan comercio en calle Independencia y se inicia incendio en tienda Ripley.",
                        "lat": -33.046816,
                        "lon": -71.619973,
                        "address": "Avenida Independencia",
                        "media": "28-FOTO1243.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "12:42",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046304,
                        "lon": -71.619907,
                        "address": "Plaza Victoria",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734061618859024386/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "12:56",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "",
                        "redes_sociales": "https://twitter.com/Tele13_Radio/status/734065390981140480?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "13:07",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Bomberos controla primer foco de incendio en Calle Carrera con Pedro Montt.",
                        "lat": -33.046743,
                        "lon": -71.618457,
                        "address": "Carrera con Pedro Montt",
                        "media": "29-FOTO1307.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "13:20",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Bomberos se enfrentan a encapuchados mientras intentan sofocar incendio que destruye edificio patrimonial.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "30-FOTO1320.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "13:38",
                    "markers": [{
                        "type": "Incendio",
                        "Descripcion": "Se reactiva incendio en edificio patrimonial de Valparaíso.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "31-FOTO1338.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "13:41",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Alcalde de Valparaíso por muerte de guardia: 'Hay responsabilidades políticas",
                        "lat": -33.052521,
                        "lon": -71.602691,
                        "address": "Avenida Argentina",
                        "media": "",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "13:45",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": "https://twitter.com/dhquezada/status/734077788764921856/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }, {
                    "hour": "13:53",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Intendente de Valparaíso confirma que hay 19 detenidos y se espera que entre ellos se pueda identificar a culpables de iniciar incendio",
                        "lat": -33.042935,
                        "lon": -71.623585,
                        "address": "Brasil",
                        "media": "",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "14:13",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Carabineros entrega cuenta preliminar sobre incidentes en Valparaíso: 26 hombres adultos, 7 mujeres, 4 menores: Total  37",
                        "lat": -33.04686,
                        "lon": -71.619401,
                        "address": "Avenida Independencia",
                        "media": "",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "14:16",
                    "markers": [{
                        "type": "Incendio",
                        "Descripcion": "Sigue el trabajo de Bomberos para controlar el incendio de Montt con Las Heras.",
                        "lat": -33.04701,
                        "lon": -71.617253,
                        "address": "Pedro Montt con Las Heras",
                        "media": "",
                        "redes_sociales": "http://www.24liveblog.com/share/194207831?url=http://www.t13.cl/noticia/nacional/minuto-minuto-sigue-todos-detalles-esta-jornada-21-mayo"
                    }]
                }, {
                    "hour": "15:00",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Carabineros controla los incidentes en el casco antiguo de Valparaíso y paulatinamente retorna el orden.",
                        "lat": -33.047373,
                        "lon": -71.608801,
                        "address": "Pedro Montt",
                        "media": "32-FOTO1500.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "15:30",
                    "markers": [{
                        "type": "Informacion",
                        "Descripcion": "Bomberos controla incendio y comienza con trabajo de remoción de escombros.",
                        "lat": null,
                        "lon": null,
                        "address": "Pedro Montt con Las Heras",
                        "media": "33-FOTO1530.jpg",
                        "redes_sociales": ""
                    }]
                }, {
                    "hour": "13:15",
                    "markers": [{
                        "type": "Redes Sociales",
                        "Descripcion": "",
                        "lat": -33.038681,
                        "lon": -71.629079,
                        "address": "Plaza Sotomayor",
                        "media": "",
                        "redes_sociales": "https://twitter.com/T13/status/734070095744512001/photo/1?ref_src=twsrc%5Etfw"
                    }]
                }


            ]
        }
        return allPoints.points
    }



}
