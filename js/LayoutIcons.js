/**
 * @file
 * Handles layout grid markups of selected options.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  window.onload = function () {
    var icons = drupalSettings.layout.icons;
    var selected_layout = document.querySelector("select#edit-layout option[selected='selected']").value;
    var wrapper = document.querySelector("#layout-icon-wrapper");
    wrapper.innerHTML = icons[selected_layout];
    document.querySelector("select#edit-layout").onchange = function(){
      wrapper.innerHTML = icons[this.value]
    };
  };
})(Drupal, drupalSettings);
