"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe("valid-data-annotations", () => {
    it("annotation-custom", (0, utils_1.assertValidSchema)("annotation-custom", "MyObject", "basic", [
        "customBooleanProperty",
        "customNumberProperty",
        "customStringProperty",
        "customComplexProperty",
        "customMultilineProperty",
        "customUnquotedProperty",
    ]));
    it("annotation-empty-basic", (0, utils_1.assertValidSchema)("annotation-empty", "MyObject", "basic", ["customEmptyAnnotation"]));
    it("annotation-empty-extended", (0, utils_1.assertValidSchema)("annotation-empty", "MyObject", "extended", ["customEmptyAnnotation"]));
    it("annotation-deprecated-basic", (0, utils_1.assertValidSchema)("annotation-deprecated", "MyObject", "basic", ["deprecationMessage"]));
    it("annotation-deprecated-extended", (0, utils_1.assertValidSchema)("annotation-deprecated", "MyObject", "extended", ["deprecationMessage"]));
    it("annotation-description-override", (0, utils_1.assertValidSchema)("annotation-description-override", "MyObject", "extended", ["markdownDescription"]));
    it("annotation-comment", (0, utils_1.assertValidSchema)("annotation-comment", "MyObject", "extended"));
    it("annotation-example", (0, utils_1.assertValidSchema)("annotation-example", "MyObject", "extended"));
    it("annotation-id", (0, utils_1.assertValidSchema)("annotation-id", "MyObject", "extended", [], "Test"));
    it("annotation-readOnly", (0, utils_1.assertValidSchema)("annotation-readOnly", "MyObject", "basic"));
    it("annotation-ref", (0, utils_1.assertValidSchema)("annotation-ref", "MyObject", "extended"));
    it("annotation-writeOnly", (0, utils_1.assertValidSchema)("annotation-writeOnly", "MyObject", "basic"));
});
//# sourceMappingURL=valid-data-annotations.test.js.map