"use strict";
exports.__esModule = true;
exports.getPageTableOfContents = void 0;
var get_text_content_1 = require("./get-text-content");
var indentLevels = {
    header: 0,
    sub_header: 1,
    sub_sub_header: 2
};
/**
 * Gets the metadata for a table of contents block by parsing the page's
 * H1, H2, and H3 elements.
 */
var getPageTableOfContents = function (recordMap) {
    var _a;
    var toc = ((_a = Object.keys(recordMap === null || recordMap === void 0 ? void 0 : recordMap.block)) !== null && _a !== void 0 ? _a : [])
        .map(function (blockId) {
        var _a, _b;
        var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
        if (block) {
            var type = block.type;
            if (type === 'header' ||
                type === 'sub_header' ||
                type === 'sub_sub_header') {
                return {
                    id: blockId,
                    type: type,
                    text: get_text_content_1.getTextContent((_b = block.properties) === null || _b === void 0 ? void 0 : _b.title),
                    indentLevel: indentLevels[type]
                };
            }
        }
        return null;
    })
        .filter(Boolean);
    var indentLevelStack = [
        {
            actual: -1,
            effective: -1
        }
    ];
    // Adjust indent levels to always change smoothly.
    // This is a little tricky, but the key is that when increasing indent levels,
    // they should never jump more than one at a time.
    for (var _i = 0, toc_1 = toc; _i < toc_1.length; _i++) {
        var tocItem = toc_1[_i];
        var indentLevel = tocItem.indentLevel;
        var actual = indentLevel;
        do {
            var prevIndent = indentLevelStack[indentLevelStack.length - 1];
            var prevActual = prevIndent.actual, prevEffective = prevIndent.effective;
            if (actual > prevActual) {
                tocItem.indentLevel = prevEffective + 1;
                indentLevelStack.push({
                    actual: actual,
                    effective: tocItem.indentLevel
                });
            }
            else if (actual === prevActual) {
                tocItem.indentLevel = prevEffective;
                break;
            }
            else {
                indentLevelStack.pop();
            }
        } while (true);
    }
    return toc;
};
exports.getPageTableOfContents = getPageTableOfContents;
//# sourceMappingURL=get-page-table-of-contents.js.map