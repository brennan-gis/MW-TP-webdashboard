var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraydark_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_2 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PublicTransitRoute_3 = new ol.format.GeoJSON();
var features_PublicTransitRoute_3 = format_PublicTransitRoute_3.readFeatures(json_PublicTransitRoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicTransitRoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicTransitRoute_3.addFeatures(features_PublicTransitRoute_3);
var lyr_PublicTransitRoute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicTransitRoute_3, 
                style: style_PublicTransitRoute_3,
                popuplayertitle: 'Public Transit Route',
                interactive: false,
                title: '<img src="styles/legend/PublicTransitRoute_3.png" /> Public Transit Route'
            });
var format_eBikeRoute_4 = new ol.format.GeoJSON();
var features_eBikeRoute_4 = format_eBikeRoute_4.readFeatures(json_eBikeRoute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eBikeRoute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eBikeRoute_4.addFeatures(features_eBikeRoute_4);
var lyr_eBikeRoute_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eBikeRoute_4, 
                style: style_eBikeRoute_4,
                popuplayertitle: 'eBike Route',
                interactive: false,
                title: '<img src="styles/legend/eBikeRoute_4.png" /> eBike Route'
            });
var format_Work_5 = new ol.format.GeoJSON();
var features_Work_5 = format_Work_5.readFeatures(json_Work_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Work_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Work_5.addFeatures(features_Work_5);
var lyr_Work_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Work_5, 
                style: style_Work_5,
                popuplayertitle: 'Work',
                interactive: false,
                title: '<img src="styles/legend/Work_5.png" /> Work'
            });
var format_Home_6 = new ol.format.GeoJSON();
var features_Home_6 = format_Home_6.readFeatures(json_Home_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Home_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Home_6.addFeatures(features_Home_6);
var lyr_Home_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Home_6, 
                style: style_Home_6,
                popuplayertitle: 'Home',
                interactive: false,
                title: '<img src="styles/legend/Home_6.png" /> Home'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: '',
                interactive: false,
    title: '<br />\
    <img src="styles/legend/_7_0.png" /> Home<br />\
    <img src="styles/legend/_7_1.png" /> Work<br />' });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: '',
                interactive: false,
    title: '<br />\
    <img src="styles/legend/_8_0.png" /> Home<br />\
    <img src="styles/legend/_8_1.png" /> Work<br />' });
var group_CaltrainPassForwardConstellation = new ol.layer.Group({
                                layers: [lyr__8,],
                                fold: 'open',
                                title: 'Caltrain Pass Forward Constellation'});
var group_EssentialKicksConstellation = new ol.layer.Group({
                                layers: [lyr__7,],
                                fold: 'open',
                                title: 'Essential Kicks™ Constellation'});
var group_EssentialWheelsCommuteConstellation = new ol.layer.Group({
                                layers: [lyr_PublicTransitRoute_3,lyr_eBikeRoute_4,lyr_Work_5,lyr_Home_6,],
                                fold: 'open',
                                title: 'Essential Wheels™ Commute Constellation'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_ESRIGraydark_1,lyr_ESRIBoundariesPlaces_2,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_ESRISatellite_0.setVisible(false);lyr_ESRIGraydark_1.setVisible(true);lyr_ESRIBoundariesPlaces_2.setVisible(true);lyr_PublicTransitRoute_3.setVisible(true);lyr_eBikeRoute_4.setVisible(true);lyr_Work_5.setVisible(true);lyr_Home_6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [group_Basemaps,group_EssentialWheelsCommuteConstellation,group_EssentialKicksConstellation,group_CaltrainPassForwardConstellation];
lyr_PublicTransitRoute_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Donor': 'Donor', 'Name': 'Name', 'Status': 'Status', });
lyr_eBikeRoute_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Donor': 'Donor', 'Name': 'Name', 'Status': 'Status', });
lyr_Work_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Donor': 'Donor', 'Address': 'Address', 'Name': 'Name', 'Status': 'Status', });
lyr_Home_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Donor': 'Donor', 'Address': 'Address', 'Name': 'Name', 'Status': 'Status', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Company': 'Company', 'Address': 'Address', 'Program': 'Program', 'Type': 'Type', 'EW/EK?': 'EW/EK?', });
lyr_PublicTransitRoute_3.set('fieldImages', {'fid': '', 'id': '', 'Type': '', 'Donor': '', 'Name': '', 'Status': '', });
lyr_eBikeRoute_4.set('fieldImages', {'fid': '', 'id': '', 'Type': '', 'Donor': '', 'Name': '', 'Status': '', });
lyr_Work_5.set('fieldImages', {'fid': '', 'id': '', 'Type': '', 'Donor': '', 'Address': '', 'Name': '', 'Status': '', });
lyr_Home_6.set('fieldImages', {'fid': '', 'id': '', 'Type': '', 'Donor': '', 'Address': '', 'Name': '', 'Status': '', });
lyr__7.set('fieldImages', {'fid': '', 'Type': '', });
lyr__8.set('fieldImages', {'fid': '', 'Name': '', 'Company': '', 'Address': '', 'Program': '', 'Type': '', 'EW/EK?': '', });
lyr_PublicTransitRoute_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Type': 'no label', 'Donor': 'no label', 'Name': 'no label', 'Status': 'no label', });
lyr_eBikeRoute_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Type': 'no label', 'Donor': 'no label', 'Name': 'no label', 'Status': 'no label', });
lyr_Work_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Type': 'no label', 'Donor': 'no label', 'Address': 'no label', 'Name': 'no label', 'Status': 'no label', });
lyr_Home_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Type': 'no label', 'Donor': 'no label', 'Address': 'no label', 'Name': 'no label', 'Status': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', });
lyr__8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Company': 'no label', 'Address': 'no label', 'Program': 'no label', 'Type': 'no label', 'EW/EK?': 'no label', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});