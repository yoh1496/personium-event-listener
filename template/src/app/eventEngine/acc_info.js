exports.accInfo = (function() {
  /*
   * Begin of your Personium app configurations
   */
  var rootUrl = 'https://<PERSONIUM_CELL_FQDN>'; // for example: https://demo.personium.io
  var appCellName = '<PERSONIUM_CELL_NAME>'; // for example: app-minimal
  var appUserId = '<PERSONIUM_ADMIN_USER>';
  var appUserPass = '<PERSONIUM_ADMIN_PASS>';
  /*
   * End of your Personium app configurations
   */

  /*
   * Don't modify anything from here on
   */
  var accInfo = {};
  var appCellUrl = [rootUrl, ''].join('/'); // always with ending slash
  accInfo.APP_CELL_URL = appCellUrl;
  accInfo.APP_CELL_ADMIN_INFO = {
    cellUrl: appCellName,
    userId: appUserId,
    password: appUserPass,
  };

  return accInfo;
})();
