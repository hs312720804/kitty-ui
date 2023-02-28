import { ExtractPropTypes } from 'vue';
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        value: string[];
    };
    size: {
        type: StringConstructor;
        value: string[];
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
