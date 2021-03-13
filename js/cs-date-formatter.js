/**
 * @todo.
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
        var fieldSetting = csSettings[settingName];
        var timestamp = $(this).data('cs-timestamp');
        var date = new Date(timestamp * 1000);

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
