angular.module('smartTable.templates', ['partials/defaultCell.html', 'partials/defaultHeader.html', 'partials/editableCell.html', 'partials/globalSearchCell.html', 'partials/pagination.html', 'partials/selectAllCheckbox.html', 'partials/selectionCheckbox.html', 'partials/smartTable.html']);

angular.module("partials/defaultCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultCell.html",
    "{{formatedValue}}");
}]);

angular.module("partials/defaultHeader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultHeader.html",
    "{{column.label}}");
}]);

angular.module("partials/editableCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/editableCell.html",
    "<div ng-dblclick=\"toggleEditMode($event)\">\n" +
    "    <span ng-hide=\"isEditMode\">{{value | format:column.formatFunction:column.formatParameter}}</span>\n" +
    "\n" +
    "    <form ng-submit=\"submit()\" ng-show=\"isEditMode\" name=\"myForm\">\n" +
    "        <input name=\"myInput\" ng-model=\"value\" type=\"type\" input-type/>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("partials/globalSearchCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/globalSearchCell.html",
    "<label>Search :</label>\n" +
    "<input type=\"text\" ng-model=\"searchValue\"/>");
}]);

angular.module("partials/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/pagination.html",
    "<div class=\"pagination\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a\n" +
    "                ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "    </ul>\n" +
    "</div> ");
}]);

angular.module("partials/selectAllCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectAllCheckbox.html",
    "<input class=\"smart-table-select-all\"  type=\"checkbox\" ng-model=\"holder.isAllSelected\"/>");
}]);

angular.module("partials/selectionCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectionCheckbox.html",
    "<input type=\"checkbox\" ng-model=\"dataRow.isSelected\" stop-event=\"click\"/>");
}]);

angular.module("partials/smartTable.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/smartTable.html",
    "<table class=\"smart-table\">\n" +
    "    <thead>\n" +
    "    <tr class=\"smart-table-header-row\">\n" +
    "        <th ng-repeat=\"column in columns\" ng-include=\"column.headerTemplateUrl\" scope=\"col\" class=\"smart-table-header-cell {{column.headerClass}}\" ng-class=\"{'sort-ascent':column.reverse==true, 'sort-descent':column.reverse==false}\"></th>\n" +
    "    </tr>\n" +
    "    <tr class=\"smart-table-subheader-row\" ng-repeat=\"subHeaderRow in subHeaders\">\n" +
    "        <th ng-repeat=\"column in columns\" scope=\"column\" class=\"smart-table-subheader-cell {{subHeaderCellClass}}\"></th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"dataRow in displayedCollection\" ng-class=\"{selected:dataRow.isSelected}\"\n" +
    "        class=\"smart-table-data-row\">\n" +
    "        <td ng-repeat=\"column in columns\" class=\"smart-table-data-cell {{column.cellClass}}\"></td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "    <tfoot ng-show=\"isPaginationEnabled\">\n" +
    "    <tr class=\"smart-table-footer-row\">\n" +
    "        <td colspan=\"{{columns.length}}\">\n" +
    "            <div pagination-smart-table=\"\" num-pages=\"numberOfPages\" max-size=\"maxSize\" current-page=\"currentPage\"></div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tfoot>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "");
}]);
