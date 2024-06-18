var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Reproyectada_1 = new ol.format.GeoJSON();
var features_Reproyectada_1 = format_Reproyectada_1.readFeatures(json_Reproyectada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reproyectada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reproyectada_1.addFeatures(features_Reproyectada_1);
var lyr_Reproyectada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reproyectada_1, 
                style: style_Reproyectada_1,
                interactive: true,
                title: '<img src="styles/legend/Reproyectada_1.png" /> Reproyectada'
            });
var format_Reproyectada_2 = new ol.format.GeoJSON();
var features_Reproyectada_2 = format_Reproyectada_2.readFeatures(json_Reproyectada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reproyectada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reproyectada_2.addFeatures(features_Reproyectada_2);
var lyr_Reproyectada_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reproyectada_2, 
                style: style_Reproyectada_2,
                interactive: true,
                title: '<img src="styles/legend/Reproyectada_2.png" /> Reproyectada'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Reproyectada_1.setVisible(true);lyr_Reproyectada_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Reproyectada_1,lyr_Reproyectada_2];
lyr_Reproyectada_1.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'CSP': 'CSP', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', });
lyr_Reproyectada_2.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'CSP': 'CSP', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', });
lyr_Reproyectada_1.set('fieldImages', {'ID_RECINTO': '', 'CD_PROV': '', 'CD_MUN': '', 'CD_POL': '', 'CD_PARCELA': '', 'CD_RECINTO': '', 'CD_USO': '', 'NU_AREA': '', 'CSP': '', 'COEF_REG': '', 'PDTE_MEDIA': '', 'INCIDENCIA': '', 'REGION': '', 'GC': '', 'VER': '', });
lyr_Reproyectada_2.set('fieldImages', {'ID_RECINTO': '', 'CD_PROV': '', 'CD_MUN': '', 'CD_POL': '', 'CD_PARCELA': '', 'CD_RECINTO': '', 'CD_USO': '', 'NU_AREA': '', 'CSP': '', 'COEF_REG': '', 'PDTE_MEDIA': '', 'INCIDENCIA': '', 'REGION': '', 'GC': '', 'VER': '', });
lyr_Reproyectada_1.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'CSP': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', });
lyr_Reproyectada_2.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'inline label', 'CSP': 'inline label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'inline label', });
lyr_Reproyectada_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});