declare const _sfc_main: import("vue").DefineComponent<{
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
}, {
    styleClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'is-plain': boolean;
        'is-round': boolean;
        'is-disabled': boolean;
    }>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    plain: boolean;
    round: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
