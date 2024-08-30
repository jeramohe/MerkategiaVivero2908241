var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_HotelesGoogleOtros_2 = new ol.format.GeoJSON();
var features_HotelesGoogleOtros_2 = format_HotelesGoogleOtros_2.readFeatures(json_HotelesGoogleOtros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogleOtros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogleOtros_2.addFeatures(features_HotelesGoogleOtros_2);cluster_HotelesGoogleOtros_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HotelesGoogleOtros_2
});
var lyr_HotelesGoogleOtros_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HotelesGoogleOtros_2, 
                style: style_HotelesGoogleOtros_2,
                popuplayertitle: "Hoteles Google Otros",
                interactive: true,
                title: '<img src="styles/legend/HotelesGoogleOtros_2.png" /> Hoteles Google Otros'
            });
var format_HotelesGoogle3estrellas_3 = new ol.format.GeoJSON();
var features_HotelesGoogle3estrellas_3 = format_HotelesGoogle3estrellas_3.readFeatures(json_HotelesGoogle3estrellas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogle3estrellas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogle3estrellas_3.addFeatures(features_HotelesGoogle3estrellas_3);cluster_HotelesGoogle3estrellas_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HotelesGoogle3estrellas_3
});
var lyr_HotelesGoogle3estrellas_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HotelesGoogle3estrellas_3, 
                style: style_HotelesGoogle3estrellas_3,
                popuplayertitle: "Hoteles Google 3 estrellas",
                interactive: true,
                title: '<img src="styles/legend/HotelesGoogle3estrellas_3.png" /> Hoteles Google 3 estrellas'
            });
var format_HotelesGoogle4estrellas_4 = new ol.format.GeoJSON();
var features_HotelesGoogle4estrellas_4 = format_HotelesGoogle4estrellas_4.readFeatures(json_HotelesGoogle4estrellas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogle4estrellas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogle4estrellas_4.addFeatures(features_HotelesGoogle4estrellas_4);cluster_HotelesGoogle4estrellas_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HotelesGoogle4estrellas_4
});
var lyr_HotelesGoogle4estrellas_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HotelesGoogle4estrellas_4, 
                style: style_HotelesGoogle4estrellas_4,
                popuplayertitle: "Hoteles Google 4 estrellas",
                interactive: true,
                title: '<img src="styles/legend/HotelesGoogle4estrellas_4.png" /> Hoteles Google 4 estrellas'
            });
var format_HotelesGoogle5estrellas_5 = new ol.format.GeoJSON();
var features_HotelesGoogle5estrellas_5 = format_HotelesGoogle5estrellas_5.readFeatures(json_HotelesGoogle5estrellas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelesGoogle5estrellas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelesGoogle5estrellas_5.addFeatures(features_HotelesGoogle5estrellas_5);cluster_HotelesGoogle5estrellas_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HotelesGoogle5estrellas_5
});
var lyr_HotelesGoogle5estrellas_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HotelesGoogle5estrellas_5, 
                style: style_HotelesGoogle5estrellas_5,
                popuplayertitle: "Hoteles Google 5 estrellas",
                interactive: true,
                title: '<img src="styles/legend/HotelesGoogle5estrellas_5.png" /> Hoteles Google 5 estrellas'
            });
var format_6a10personas_6 = new ol.format.GeoJSON();
var features_6a10personas_6 = format_6a10personas_6.readFeatures(json_6a10personas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6a10personas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6a10personas_6.addFeatures(features_6a10personas_6);cluster_6a10personas_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_6a10personas_6
});
var lyr_6a10personas_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_6a10personas_6, 
                style: style_6a10personas_6,
                popuplayertitle: "6 a 10 personas",
                interactive: true,
                title: '<img src="styles/legend/6a10personas_6.png" /> 6 a 10 personas'
            });
var format_11a30personas_7 = new ol.format.GeoJSON();
var features_11a30personas_7 = format_11a30personas_7.readFeatures(json_11a30personas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11a30personas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11a30personas_7.addFeatures(features_11a30personas_7);cluster_11a30personas_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_11a30personas_7
});
var lyr_11a30personas_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_11a30personas_7, 
                style: style_11a30personas_7,
                popuplayertitle: "11 a 30 personas",
                interactive: true,
                title: '<img src="styles/legend/11a30personas_7.png" /> 11 a 30 personas'
            });
var format_31a50personas_8 = new ol.format.GeoJSON();
var features_31a50personas_8 = format_31a50personas_8.readFeatures(json_31a50personas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31a50personas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31a50personas_8.addFeatures(features_31a50personas_8);cluster_31a50personas_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_31a50personas_8
});
var lyr_31a50personas_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_31a50personas_8, 
                style: style_31a50personas_8,
                popuplayertitle: "31 a 50 personas",
                interactive: true,
                title: '<img src="styles/legend/31a50personas_8.png" /> 31 a 50 personas'
            });
var format_51a100personas_9 = new ol.format.GeoJSON();
var features_51a100personas_9 = format_51a100personas_9.readFeatures(json_51a100personas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51a100personas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51a100personas_9.addFeatures(features_51a100personas_9);cluster_51a100personas_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_51a100personas_9
});
var lyr_51a100personas_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_51a100personas_9, 
                style: style_51a100personas_9,
                popuplayertitle: "51 a 100 personas",
                interactive: true,
                title: '<img src="styles/legend/51a100personas_9.png" /> 51 a 100 personas'
            });
var format_101a250personas_10 = new ol.format.GeoJSON();
var features_101a250personas_10 = format_101a250personas_10.readFeatures(json_101a250personas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101a250personas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101a250personas_10.addFeatures(features_101a250personas_10);cluster_101a250personas_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_101a250personas_10
});
var lyr_101a250personas_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_101a250personas_10, 
                style: style_101a250personas_10,
                popuplayertitle: "101 a 250 personas",
                interactive: true,
                title: '<img src="styles/legend/101a250personas_10.png" /> 101 a 250 personas'
            });
var format_251ymspersona_11 = new ol.format.GeoJSON();
var features_251ymspersona_11 = format_251ymspersona_11.readFeatures(json_251ymspersona_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_251ymspersona_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_251ymspersona_11.addFeatures(features_251ymspersona_11);cluster_251ymspersona_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_251ymspersona_11
});
var lyr_251ymspersona_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_251ymspersona_11, 
                style: style_251ymspersona_11,
                popuplayertitle: "251 y más persona",
                interactive: true,
                title: '<img src="styles/legend/251ymspersona_11.png" /> 251 y más persona'
            });
var format_ResidenceManagement_12 = new ol.format.GeoJSON();
var features_ResidenceManagement_12 = format_ResidenceManagement_12.readFeatures(json_ResidenceManagement_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidenceManagement_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidenceManagement_12.addFeatures(features_ResidenceManagement_12);cluster_ResidenceManagement_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ResidenceManagement_12
});
var lyr_ResidenceManagement_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ResidenceManagement_12, 
                style: style_ResidenceManagement_12,
                popuplayertitle: "Residence Management",
                interactive: true,
                title: '<img src="styles/legend/ResidenceManagement_12.png" /> Residence Management'
            });
var format_Property_Management_13 = new ol.format.GeoJSON();
var features_Property_Management_13 = format_Property_Management_13.readFeatures(json_Property_Management_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Property_Management_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Property_Management_13.addFeatures(features_Property_Management_13);cluster_Property_Management_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Property_Management_13
});
var lyr_Property_Management_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Property_Management_13, 
                style: style_Property_Management_13,
                popuplayertitle: "Property_Management",
                interactive: true,
                title: '<img src="styles/legend/Property_Management_13.png" /> Property_Management'
            });
var format_HOA_14 = new ol.format.GeoJSON();
var features_HOA_14 = format_HOA_14.readFeatures(json_HOA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOA_14.addFeatures(features_HOA_14);cluster_HOA_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HOA_14
});
var lyr_HOA_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HOA_14, 
                style: style_HOA_14,
                popuplayertitle: "HOA",
                interactive: true,
                title: '<img src="styles/legend/HOA_14.png" /> HOA'
            });
var format_Viveros_15 = new ol.format.GeoJSON();
var features_Viveros_15 = format_Viveros_15.readFeatures(json_Viveros_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viveros_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viveros_15.addFeatures(features_Viveros_15);
var lyr_Viveros_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viveros_15, 
                style: style_Viveros_15,
                popuplayertitle: "Viveros",
                interactive: true,
                title: '<img src="styles/legend/Viveros_15.png" /> Viveros'
            });
var format_Contratistas_16 = new ol.format.GeoJSON();
var features_Contratistas_16 = format_Contratistas_16.readFeatures(json_Contratistas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_16.addFeatures(features_Contratistas_16);
var lyr_Contratistas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contratistas_16, 
                style: style_Contratistas_16,
                popuplayertitle: "Contratistas",
                interactive: true,
                title: '<img src="styles/legend/Contratistas_16.png" /> Contratistas'
            });
var group_Hoteles = new ol.layer.Group({
                                layers: [lyr_HotelesGoogleOtros_2,lyr_HotelesGoogle3estrellas_3,lyr_HotelesGoogle4estrellas_4,lyr_HotelesGoogle5estrellas_5,lyr_6a10personas_6,lyr_11a30personas_7,lyr_31a50personas_8,lyr_51a100personas_9,lyr_101a250personas_10,lyr_251ymspersona_11,],
                                fold: "open",
                                title: "Hoteles"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_HotelesGoogleOtros_2.setVisible(false);lyr_HotelesGoogle3estrellas_3.setVisible(false);lyr_HotelesGoogle4estrellas_4.setVisible(false);lyr_HotelesGoogle5estrellas_5.setVisible(false);lyr_6a10personas_6.setVisible(false);lyr_11a30personas_7.setVisible(false);lyr_31a50personas_8.setVisible(false);lyr_51a100personas_9.setVisible(false);lyr_101a250personas_10.setVisible(false);lyr_251ymspersona_11.setVisible(false);lyr_ResidenceManagement_12.setVisible(false);lyr_Property_Management_13.setVisible(false);lyr_HOA_14.setVisible(false);lyr_Viveros_15.setVisible(true);lyr_Contratistas_16.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,group_Hoteles,lyr_ResidenceManagement_12,lyr_Property_Management_13,lyr_HOA_14,lyr_Viveros_15,lyr_Contratistas_16];
lyr_HotelesGoogleOtros_2.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_HotelesGoogle3estrellas_3.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_HotelesGoogle4estrellas_4.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_HotelesGoogle5estrellas_5.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_6a10personas_6.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_11a30personas_7.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_31a50personas_8.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_51a100personas_9.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_101a250personas_10.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_251ymspersona_11.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Nivel de Jardin': 'Nivel de Jardin', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_ResidenceManagement_12.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', });
lyr_Property_Management_13.set('fieldAliases', {'Fuente': 'Fuente', 'Google Map': 'Google Map', 'Ciudad': 'Ciudad', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'telefono': 'telefono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', });
lyr_HOA_14.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', });
lyr_Viveros_15.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Personal': 'Personal', 'lat': 'lat', 'Long': 'Long', });
lyr_Contratistas_16.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'lat': 'lat', 'Long': 'Long', });
lyr_HotelesGoogleOtros_2.set('fieldImages', {'Fuente': '', 'Ciudad': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Pagina Web': '', 'Email': '', 'Nivel de Jardin': '', 'Estrellas': '', 'Personal': '', 'lat': '', 'Long': '', });
lyr_HotelesGoogle3estrellas_3.set('fieldImages', {'Fuente': '', 'Ciudad': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Pagina Web': '', 'Email': '', 'Nivel de Jardin': '', 'Estrellas': '', 'Personal': '', 'lat': '', 'Long': '', });
lyr_HotelesGoogle4estrellas_4.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_HotelesGoogle5estrellas_5.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_6a10personas_6.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_11a30personas_7.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_31a50personas_8.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_51a100personas_9.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_101a250personas_10.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_251ymspersona_11.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Nivel de Jardin': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_ResidenceManagement_12.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', });
lyr_Property_Management_13.set('fieldImages', {'Fuente': 'TextEdit', 'Google Map': 'TextEdit', 'Ciudad': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'telefono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', });
lyr_HOA_14.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', });
lyr_Viveros_15.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Personal': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Contratistas_16.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_HotelesGoogleOtros_2.set('fieldLabels', {'Fuente': 'no label', 'Ciudad': 'no label', 'Google Maps': 'no label', 'Nombre de Empresa': 'no label', 'Razon Social': 'no label', 'Direccion': 'no label', 'Teléfono': 'no label', 'Pagina Web': 'no label', 'Email': 'no label', 'Nivel de Jardin': 'no label', 'Estrellas': 'no label', 'Personal': 'no label', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_HotelesGoogle3estrellas_3.set('fieldLabels', {'Fuente': 'no label', 'Ciudad': 'no label', 'Google Maps': 'no label', 'Nombre de Empresa': 'no label', 'Razon Social': 'no label', 'Direccion': 'no label', 'Teléfono': 'no label', 'Pagina Web': 'no label', 'Email': 'no label', 'Nivel de Jardin': 'no label', 'Estrellas': 'no label', 'Personal': 'no label', 'lat': 'no label', 'Long': 'no label', });
lyr_HotelesGoogle4estrellas_4.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_HotelesGoogle5estrellas_5.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_6a10personas_6.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_11a30personas_7.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_31a50personas_8.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_51a100personas_9.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_101a250personas_10.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_251ymspersona_11.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Nivel de Jardin': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_ResidenceManagement_12.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', });
lyr_Property_Management_13.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'telefono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', });
lyr_HOA_14.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', });
lyr_Viveros_15.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_Contratistas_16.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'lat': 'hidden field', 'Long': 'hidden field', });
lyr_Contratistas_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});