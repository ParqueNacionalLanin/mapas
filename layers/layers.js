ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5343").setExtent([1226074.120351, 5433433.833270, 1918930.815328, 5774012.546373]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_catastroPNL_2023_posgar2007f1_1 = new ol.format.GeoJSON();
var features_catastroPNL_2023_posgar2007f1_1 = format_catastroPNL_2023_posgar2007f1_1.readFeatures(json_catastroPNL_2023_posgar2007f1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5343'});
var jsonSource_catastroPNL_2023_posgar2007f1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_catastroPNL_2023_posgar2007f1_1.addFeatures(features_catastroPNL_2023_posgar2007f1_1);
var lyr_catastroPNL_2023_posgar2007f1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_catastroPNL_2023_posgar2007f1_1, 
                style: style_catastroPNL_2023_posgar2007f1_1,
                interactive: true,
                title: '<img src="styles/legend/catastroPNL_2023_posgar2007f1_1.png" /> catastroPNL_2023_posgar2007f1'
            });
var format_Poligono_Parque_Lanin_2 = new ol.format.GeoJSON();
var features_Poligono_Parque_Lanin_2 = format_Poligono_Parque_Lanin_2.readFeatures(json_Poligono_Parque_Lanin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5343'});
var jsonSource_Poligono_Parque_Lanin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligono_Parque_Lanin_2.addFeatures(features_Poligono_Parque_Lanin_2);
var lyr_Poligono_Parque_Lanin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poligono_Parque_Lanin_2, 
                style: style_Poligono_Parque_Lanin_2,
                interactive: false,
                title: '<img src="styles/legend/Poligono_Parque_Lanin_2.png" /> Poligono_Parque_Lanin'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_catastroPNL_2023_posgar2007f1_1.setVisible(true);lyr_Poligono_Parque_Lanin_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_catastroPNL_2023_posgar2007f1_1,lyr_Poligono_Parque_Lanin_2];
lyr_catastroPNL_2023_posgar2007f1_1.set('fieldAliases', {'NRO_DPTO': 'NRO_DPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'NRO_LOC': 'NRO_LOC', 'LOCALIDAD': 'LOCALIDAD', 'NOMENCLATU': 'NOMENCLATU', 'DESIG_LOTE': 'DESIG_LOTE', 'TIPO_PARCE': 'TIPO_PARCE', 'PH': 'PH', 'VIGENCIA': 'VIGENCIA', 'TRAMITE': 'TRAMITE', 'FECHA_REG': 'FECHA_REG', 'SUP_MENSUR': 'SUP_MENSUR', 'COND_REG': 'COND_REG', 'PAR_ID': 'PAR_ID', 'OBJECTID': 'OBJECTID', 'ESRI_OID': 'ESRI_OID', 'link': 'link', 'catastro_link': 'catastro_link', });
lyr_Poligono_Parque_Lanin_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_catastroPNL_2023_posgar2007f1_1.set('fieldImages', {'NRO_DPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'NRO_LOC': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'NOMENCLATU': 'TextEdit', 'DESIG_LOTE': 'TextEdit', 'TIPO_PARCE': 'TextEdit', 'PH': 'TextEdit', 'VIGENCIA': 'TextEdit', 'TRAMITE': 'TextEdit', 'FECHA_REG': 'TextEdit', 'SUP_MENSUR': 'TextEdit', 'COND_REG': 'TextEdit', 'PAR_ID': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESRI_OID': 'TextEdit', 'link': 'TextEdit', 'catastro_link': 'TextEdit', });
lyr_Poligono_Parque_Lanin_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_catastroPNL_2023_posgar2007f1_1.set('fieldLabels', {'NRO_DPTO': 'inline label', 'DEPARTAMEN': 'inline label', 'NRO_LOC': 'inline label', 'LOCALIDAD': 'inline label', 'NOMENCLATU': 'inline label', 'DESIG_LOTE': 'inline label', 'TIPO_PARCE': 'inline label', 'PH': 'inline label', 'VIGENCIA': 'inline label', 'TRAMITE': 'inline label', 'FECHA_REG': 'inline label', 'SUP_MENSUR': 'inline label', 'COND_REG': 'inline label', 'PAR_ID': 'inline label', 'OBJECTID': 'inline label', 'ESRI_OID': 'inline label', 'link': 'inline label', 'catastro_link': 'inline label', });
lyr_Poligono_Parque_Lanin_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Poligono_Parque_Lanin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});