import { ModuleFunction, ModuleResponse, serialize } from '@smartsheet-bridge/extension-handler';
import { parse } from '@evilmonkeyinc/die-roller'

type Params = { expression: string };

export const parse_expression: ModuleFunction<Params> = params => {
    if (params.expression === undefined) {
        throw new Error('Required parameter "expression" is undefined.')
    }

    const result = parse(params.expression);

    return ModuleResponse.create({
        value: {
            expression: result.expression,
            expressions: serialize(result.expressions),
            result: result.result
        },
    })
};
