(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('San_Marino', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"Acquaviva"},"geometry":{"type":"Polygon","coordinates":["@@HMOIBGeOQRCV`JbA"],"encodeOffsets":[[12735,45012]]}},{"type":"Feature","properties":{"name":"Borgo Maggiore"},"geometry":{"type":"Polygon","coordinates":["@@\\TXEFKKWdQLESWeID\\KLcPPJGN"],"encodeOffsets":[[12735,45012]]}},{"type":"Feature","properties":{"name":"Chiesanuova"},"geometry":{"type":"Polygon","coordinates":["@@`O@QHWgEMjNV"],"encodeOffsets":[[12714,44986]]}},{"type":"Feature","properties":{"name":"Città di San Marino"},"geometry":{"type":"Polygon","coordinates":["@@fPAHdOLKC[mE@R_PAD"],"encodeOffsets":[[12713,44988]]}},{"type":"Feature","properties":{"name":"Domagnano"},"geometry":{"type":"Polygon","coordinates":["@@ZJNKRL^DHWOOYF]UcRLX"],"encodeOffsets":[[12764,45013]]}},{"type":"Feature","properties":{"name":"Faetano"},"geometry":{"type":"Polygon","coordinates":["@@TXKF^VZEPPJWeeGMcJGD"],"encodeOffsets":[[12772,44977]]}},{"type":"Feature","properties":{"name":"Fiorentino"},"geometry":{"type":"Polygon","coordinates":["@@nFfJHC@cKKgAOTOEGX"],"encodeOffsets":[[12730,44969]]}},{"type":"Feature","properties":{"name":"Montegiardino"},"geometry":{"type":"Polygon","coordinates":["@@LL@ddIKgcB"],"encodeOffsets":[[12770,44951]]}},{"type":"Feature","properties":{"name":"Serravalle"},"geometry":{"type":"Polygon","coordinates":["@@jXnJ\\RLgIO]CQKMLYIELWF"],"encodeOffsets":[[12749,45022]]}}],"UTF8Encoding":true});}));
