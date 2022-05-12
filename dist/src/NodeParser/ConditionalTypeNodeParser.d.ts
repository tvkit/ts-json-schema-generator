import ts from "typescript";
import { Context, NodeParser } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class ConditionalTypeNodeParser implements SubNodeParser {
    protected typeChecker: ts.TypeChecker;
    protected childNodeParser: NodeParser;
    constructor(typeChecker: ts.TypeChecker, childNodeParser: NodeParser);
    supportsNode(node: ts.ConditionalTypeNode): boolean;
    createType(node: ts.ConditionalTypeNode, context: Context): BaseType | undefined;
    protected getTypeParameterName(node: ts.TypeNode): string | null;
    protected createSubContext(node: ts.ConditionalTypeNode, checkTypeParameterName: string, narrowedCheckType: BaseType, parentContext: Context): Context;
}
