import {BeDecoratedProps} from 'be-decorated/types';

export interface BeKibitzingVirtualProps{
    selectorSequence: string[],
    transform: any,
}

export interface BeKibitzingProps extends BeKibitzingVirtualProps{
    proxy: HTMLTemplateElement & BeKibitzingVirtualProps,
}

export interface BeKibitzingActions{
    onSelectorSequence(self: this): void,
}