var wms_layers = [];

var lyr_24j_True_color_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "24j_True_color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/24j_True_color_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-750382.306676, 4421574.101029, -632975.031230, 4485322.582619]
                            })
                        });
var format_derecha_hasta_14_06_1 = new ol.format.GeoJSON();
var features_derecha_hasta_14_06_1 = format_derecha_hasta_14_06_1.readFeatures(json_derecha_hasta_14_06_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_derecha_hasta_14_06_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_derecha_hasta_14_06_1.addFeatures(features_derecha_hasta_14_06_1);
var lyr_derecha_hasta_14_06_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_derecha_hasta_14_06_1, 
                style: style_derecha_hasta_14_06_1,
                popuplayertitle: "derecha_hasta_14_06",
                interactive: true,
                title: '<img src="styles/legend/derecha_hasta_14_06_1.png" /> derecha_hasta_14_06'
            });
var format_izquierda_hasta_14_06_2 = new ol.format.GeoJSON();
var features_izquierda_hasta_14_06_2 = format_izquierda_hasta_14_06_2.readFeatures(json_izquierda_hasta_14_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_izquierda_hasta_14_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_izquierda_hasta_14_06_2.addFeatures(features_izquierda_hasta_14_06_2);
var lyr_izquierda_hasta_14_06_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_izquierda_hasta_14_06_2, 
                style: style_izquierda_hasta_14_06_2,
                popuplayertitle: "izquierda_hasta_14_06",
                interactive: true,
                title: '<img src="styles/legend/izquierda_hasta_14_06_2.png" /> izquierda_hasta_14_06'
            });
var format_derecha_24_06_3 = new ol.format.GeoJSON();
var features_derecha_24_06_3 = format_derecha_24_06_3.readFeatures(json_derecha_24_06_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_derecha_24_06_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_derecha_24_06_3.addFeatures(features_derecha_24_06_3);
var lyr_derecha_24_06_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_derecha_24_06_3, 
                style: style_derecha_24_06_3,
                popuplayertitle: "derecha_24_06",
                interactive: true,
                title: '<img src="styles/legend/derecha_24_06_3.png" /> derecha_24_06'
            });

lyr_24j_True_color_0.setVisible(true);lyr_derecha_hasta_14_06_1.setVisible(true);lyr_izquierda_hasta_14_06_2.setVisible(true);lyr_derecha_24_06_3.setVisible(true);
var layersList = [lyr_24j_True_color_0,lyr_derecha_hasta_14_06_1,lyr_izquierda_hasta_14_06_2,lyr_derecha_24_06_3];
lyr_derecha_hasta_14_06_1.set('fieldAliases', {'id': 'id', 'margen': 'margen', 'ha': 'ha', });
lyr_izquierda_hasta_14_06_2.set('fieldAliases', {'id': 'id', 'margen': 'margen', 'ha': 'ha', });
lyr_derecha_24_06_3.set('fieldAliases', {'id': 'id', 'margen': 'margen', 'ha': 'ha', });
lyr_derecha_hasta_14_06_1.set('fieldImages', {'id': 'TextEdit', 'margen': 'TextEdit', 'ha': 'TextEdit', });
lyr_izquierda_hasta_14_06_2.set('fieldImages', {'id': 'TextEdit', 'margen': 'TextEdit', 'ha': 'TextEdit', });
lyr_derecha_24_06_3.set('fieldImages', {'id': 'TextEdit', 'margen': 'TextEdit', 'ha': 'TextEdit', });
lyr_derecha_hasta_14_06_1.set('fieldLabels', {'id': 'no label', 'margen': 'header label - always visible', 'ha': 'header label - always visible', });
lyr_izquierda_hasta_14_06_2.set('fieldLabels', {'id': 'no label', 'margen': 'header label - always visible', 'ha': 'header label - always visible', });
lyr_derecha_24_06_3.set('fieldLabels', {'id': 'no label', 'margen': 'header label - always visible', 'ha': 'header label - always visible', });
lyr_derecha_24_06_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});