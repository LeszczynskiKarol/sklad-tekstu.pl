// CloudFront Function (viewer-request) for the apex distribution
// (sklad-tekstu.pl -> ESNMHRBQ4APGH). Returns the apex->www 301 directly from
// the edge instead of hopping to the S3 website origin, removing the redirect
// round-trip flagged by PageSpeed Insights. Query string is preserved.
function handler(event) {
  var request = event.request;

  var qs = '';
  var keys = Object.keys(request.querystring);
  if (keys.length > 0) {
    var parts = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = request.querystring[key];
      if (val.multiValue) {
        for (var j = 0; j < val.multiValue.length; j++) {
          parts.push(key + '=' + val.multiValue[j].value);
        }
      } else {
        parts.push(val.value === '' ? key : key + '=' + val.value);
      }
    }
    qs = '?' + parts.join('&');
  }

  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: 'https://www.sklad-tekstu.pl' + request.uri + qs },
      'cache-control': { value: 'max-age=3600' }
    }
  };
}
