"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th'); // 1. Searching for specific data of HTML table

search.addEventListener('input', searchTable);

function searchTable() {
  table_rows.forEach(function (row, i) {
    var table_data = row.textContent.toLowerCase(),
        search_data = search.value.toLowerCase();
    row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
    row.style.setProperty('--delay', i / 25 + 's');
  });
  document.querySelectorAll('tbody tr:not(.hide)').forEach(function (visible_row, i) {
    visible_row.style.backgroundColor = i % 2 == 0 ? 'transparent' : '#0000000b';
  });
} // 2. Sorting | Ordering data of HTML table


table_headings.forEach(function (head, i) {
  var sort_asc = true;

  head.onclick = function () {
    table_headings.forEach(function (head) {
      return head.classList.remove('active');
    });
    head.classList.add('active');
    document.querySelectorAll('td').forEach(function (td) {
      return td.classList.remove('active');
    });
    table_rows.forEach(function (row) {
      row.querySelectorAll('td')[i].classList.add('active');
    });
    head.classList.toggle('asc', sort_asc);
    sort_asc = head.classList.contains('asc') ? false : true;
    sortTable(i, sort_asc);
  };
});

function sortTable(column, sort_asc) {
  _toConsumableArray(table_rows).sort(function (a, b) {
    var first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
        second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();
    return sort_asc ? first_row < second_row ? 1 : -1 : first_row < second_row ? -1 : 1;
  }).map(function (sorted_row) {
    return document.querySelector('tbody').appendChild(sorted_row);
  });
}