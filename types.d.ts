import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface BeKibitzingVirtualProps extends MinimalProxy{
    selectorSequence: string[],
    transform: any,
    targetElement: Element | undefined,
}

export interface BeKibitzingProps extends BeKibitzingVirtualProps{
    proxy: HTMLTemplateElement & BeKibitzingVirtualProps,
}

export interface BeKibitzingActions{
    onSelectorSequence(self: this): void,
    doStuffToTargetElement(self: this): void,
}