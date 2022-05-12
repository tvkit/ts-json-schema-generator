import ts from "typescript";
import { Context, NodeParser } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class TypeReferenceNodeParser implements SubNodeParser {
    protected typeChecker: ts.TypeChecker;
    protected childNodeParser: NodeParser;
    constructor(typeChecker: ts.TypeChecker, childNodeParser: NodeParser);
    supportsNode(node: ts.TypeReferenceNode): boolean;
    createType(node: ts.TypeReferenceNode, context: Context): BaseType | undefined;
    protected createSubContext(node: ts.TypeReferenceNode, parentContext: Context): Context;
}
