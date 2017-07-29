'use strict';
import { Template } from 'meteor/templating';

Template.registerHelper('formatDateText', function(date) {
  if (! date) {
    return '????/??/?? ??:??:??';
  }

  return (
    date.getFullYear() +
    '/' +
    padZero(date.getMonth() + 1) +
    '/' +
    padZero(date.getDate()) +
    ' ' +
    padZero(date.getHours()) +
    ':' +
    padZero(date.getMinutes()) +
    ':' +
    padZero(date.getSeconds())
  );
});

function padZero(n) {
  if (n < 10) {
    return '0' + n;
  }
  else {
    return '' + n;
  }
}
