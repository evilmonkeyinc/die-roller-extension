import { createBridgeHandler } from '@smartsheet-bridge/extension-handler';
import { parse_expression } from './modules/parse_expression';

export const main = createBridgeHandler({
    modules: {
        parse_expression,
    }
}
);
