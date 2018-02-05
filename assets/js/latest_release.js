(function() {
  var apiUrl = "https://api.github.com/repos/ganggo/ganggo/releases/latest";
  $.getJSON(apiUrl).done(function (release) {
    $.each(release.assets, function(index, asset) {
      var name = asset.name.split(".");
      var a = $("<a>").attr("class", "dropdown-item")
        .attr("href", asset.browser_download_url).append("Download " + name[1]);
      // append download link to the menu
      $(".dropdown-menu").append(a);
    });
  });
})();
