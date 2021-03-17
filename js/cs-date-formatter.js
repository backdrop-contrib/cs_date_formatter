/**
 * Provides Backdrop behaviors for this module.
 */
(function ($) {

  Backdrop.behaviors.csDateFormatter = {
    attach: function(context, settings) {
      var uaLangs = [navigator.language];
      if (navigator.languages != undefined) {
        uaLangs = navigator.languages;
      }

      var csSettings = settings.csDateFormatter;
      $(context).find('.cs-date-format').once('cs-date-format').each(function () {
        var settingName = $(this).data('cs-setting-name');
        if (csSettings[settingName] === undefined) {
          return;
        }
        var fieldSetting = csSettings[settingName];
        var dateString = $(this).attr('datetime');
        if (dateString === undefined) {
          return;
        }
        var date = new Date(dateString);
        if (fieldSetting['date_format'] == 'extended') {
          var options = fieldSetting['extended'];
          var dtFormat = new Intl.DateTimeFormat(uaLangs, options);
          $(this).text(dtFormat.format(date));
        }
        else {
          $(this).text(date.toLocaleString());
        }
      });
    }
  };

})(jQuery);
