"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAnnotationsReader = void 0;
const json5_1 = __importDefault(require("json5"));
const symbolAtNode_1 = require("../Utils/symbolAtNode");
class BasicAnnotationsReader {
    constructor(extraTags) {
        this.extraTags = extraTags;
    }
    getAnnotations(node) {
        const symbol = (0, symbolAtNode_1.symbolAtNode)(node);
        if (!symbol) {
            return undefined;
        }
        const jsDocTags = symbol.getJsDocTags();
        if (!jsDocTags || !jsDocTags.length) {
            return undefined;
        }
        const annotations = jsDocTags.reduce((result, jsDocTag) => {
            const value = this.parseJsDocTag(jsDocTag);
            if (value !== undefined) {
                if (BasicAnnotationsReader.requiresDollar.has(jsDocTag.name)) {
                    result["$" + jsDocTag.name] = value;
                }
                else {
                    result[jsDocTag.name] = value;
                }
            }
            return result;
        }, {});
        return Object.keys(annotations).length ? annotations : undefined;
    }
    parseJsDocTag(jsDocTag) {
        var _a, _b, _c, _d;
        const isTextTag = BasicAnnotationsReader.textTags.has(jsDocTag.name);
        const defaultText = isTextTag ? "" : "true";
        const text = ((_a = jsDocTag.text) === null || _a === void 0 ? void 0 : _a.map((part) => part.text).join("")) || defaultText;
        if (isTextTag) {
            return text;
        }
        else if (BasicAnnotationsReader.jsonTags.has(jsDocTag.name)) {
            return (_b = this.parseJson(text)) !== null && _b !== void 0 ? _b : text;
        }
        else if ((_c = this.extraTags) === null || _c === void 0 ? void 0 : _c.has(jsDocTag.name)) {
            return (_d = this.parseJson(text)) !== null && _d !== void 0 ? _d : text;
        }
        else {
            return undefined;
        }
    }
    parseJson(value) {
        try {
            return json5_1.default.parse(value);
        }
        catch (e) {
            return undefined;
        }
    }
}
exports.BasicAnnotationsReader = BasicAnnotationsReader;
BasicAnnotationsReader.requiresDollar = new Set(["id", "comment", "ref"]);
BasicAnnotationsReader.textTags = new Set([
    "title",
    "description",
    "id",
    "format",
    "pattern",
    "ref",
    "comment",
    "contentMediaType",
    "contentEncoding",
]);
BasicAnnotationsReader.jsonTags = new Set([
    "minimum",
    "exclusiveMinimum",
    "maximum",
    "exclusiveMaximum",
    "multipleOf",
    "minLength",
    "maxLength",
    "minProperties",
    "maxProperties",
    "minItems",
    "maxItems",
    "uniqueItems",
    "propertyNames",
    "contains",
    "const",
    "examples",
    "default",
    "if",
    "then",
    "else",
    "readOnly",
    "writeOnly",
    "deprecated",
    "allOf",
]);
//# sourceMappingURL=BasicAnnotationsReader.js.map