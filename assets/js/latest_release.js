(function() {
  var apiUrl = "https://api.github.com/repos/ganggo/ganggo/releases/latest";
  $.getJSON(apiUrl).done(function (release) {
    var tagName = release.tag_name;
    $.each(release.assets, function(index, asset) {
      var btn = $(".github-link");
      btn.text(btn.text() + tagName);
      btn.click(function() {
        window.location.href = asset.browser_download_url;
      });
    });
  });
})();
