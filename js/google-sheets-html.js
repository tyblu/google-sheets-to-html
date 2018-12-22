/*!
 *
 * Google Sheets To HTML v0.9a
 *
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 *
 * The Google document's sharing must be set to public
 *
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualizationKOS, visualizationNAP;

function drawVisualizationKOS() {
    /* https://docs.google.com/spreadsheets/d/1D5zjEnzyDeMjj3E1X4wAntsFreVnfmeBcPUMAW21VdU/edit?usp=sharing */
    var query = new google.visualization.Query(
      'https://spreadsheets.google.com/tq?key=1D5zjEnzyDeMjj3E1X4wAntsFreVnfmeBcPUMAW21VdU'
    );
    query.setQuery(
      'SELECT A, B, C, D order by B asc label A "#", B "Clan", C "Names", D "Time Left"'
    );
    query.send(handleQueryResponseKOS);
}

function drawVisualizationNAP() {
    /* https://docs.google.com/spreadsheets/d/1kXnnqXNvcs1G28R0vTKm3KHNMd34lWuouELYTjqXL58/edit?usp=sharing */
    var opts = {gid: 167030910};
    var query = new google.visualization.Query(
      'https://spreadsheets.google.com/tq?key=1kXnnqXNvcs1G28R0vTKm3KHNMd34lWuouELYTjqXL58&gid=167030910'
    );
    query.setQuery(
      'SELECT A, B, C order by A asc label A "Status", B "Clan Tag", C "Clan Name"'
    );
    query.send(handleQueryResponseNAP);
}

function handleQueryResponseKOS(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualizationKOS = new google.visualization.Table(document.getElementById('kos'));
    visualizationKOS.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}

function handleQueryResponseNAP(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualizationNAP = new google.visualization.Table(document.getElementById('nap'));
    visualizationNAP.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}

google.setOnLoadCallback(drawVisualizationKOS);
google.setOnLoadCallback(drawVisualizationNAP);
