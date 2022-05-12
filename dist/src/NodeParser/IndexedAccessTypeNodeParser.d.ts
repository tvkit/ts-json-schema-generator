import ts from "typescript";
import { Context, NodeParser } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class IndexedAccessTypeNodeParser implements SubNodeParser {
    protected childNodeParser: NodeParser;
    constructor(childNodeParser: NodeParser);
    supportsNode(node: ts.IndexedAccessTypeNode): boolean;
    createType(node: ts.IndexedAccessTypeNode, context: Context): BaseType | undefined;
}
