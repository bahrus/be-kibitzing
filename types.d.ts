import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface EndUserProps {
    selectorSequence?: string[],
    transform?: any,
}
export interface VirtualProps extends EndUserProps, MinimalProxy<HTMLTemplateElement>{

    targetElement: Element | undefined,
}

export type Proxy = HTMLTemplateElement & VirtualProps;

export interface ProxyProps extends VirtualProps {
    proxy: Proxy;
}

export type PP = ProxyProps;

export interface Actions{
    onSelectorSequence(pp: PP): void,
    doStuffToTargetElement(pp: PP): void,
}

export interface Controller{
    proxy: Proxy;
}