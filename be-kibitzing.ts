import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {register} from 'be-hive/register.js';
import {BeKibitzingVirtualProps, BeKibitzingActions, BeKibitzingProps} from './types';
import('css-observe/css-observe.js');
import {CssObserveProps} from 'css-observe/types';

const seqLookup = new WeakMap<Element & CssObserveProps, string[]>();

export class BeKibitzing implements BeKibitzingActions{
    onSelectorSequence({proxy, selectorSequence}: this): void{
        const host = (<any>proxy.getRootNode()).host || document.body;
        this.plantListener(host, selectorSequence, false);
    }

    plantListener(host: Element, selectorSequence: string[], childElement: boolean){
        if(childElement && host.shadowRoot === null){
            //assuming valid sequence, element must not be initialized yet
            setTimeout(() => {
                this.plantListener(host, selectorSequence, childElement);
            }, 50);
            return;
        }
        //const host = relativeElement.getRootNode();
        const head = selectorSequence[0];
        const tail = selectorSequence.slice(1);
        const cssObserve = document.createElement('css-observe') as Element & CssObserveProps;
        seqLookup.set(cssObserve, tail);
        cssObserve.selector = head;
        cssObserve.observe = true;
        cssObserve.addEventListener('latest-match-changed', e => {
            const {latestMatch} = cssObserve;
            if(tail.length > 0){
                this.plantListener(latestMatch as Element, tail, true);
            }else{
                this.proxy.targetElement = latestMatch as Element;
            }
        });
        if(host.shadowRoot === null){
            host.appendChild(cssObserve);
        }else{
            host.shadowRoot.appendChild(cssObserve);
        }
    }

    doStuffToTargetElement({targetElement, proxy}: this){
        const clone = proxy.content.cloneNode(true);
        targetElement!.appendChild(clone);
        proxy.targetElement = undefined;
    }
}

export interface BeKibitzing extends BeKibitzingProps{}

const tagName = 'be-kibitzing';

const ifWantsToBe = 'kibitzing';

const upgrade = 'template';

define<BeKibitzingProps & BeDecoratedProps<BeKibitzingProps, BeKibitzingActions>, BeKibitzingActions>({
    config:{
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            forceVisible: [upgrade],
            virtualProps:[
                'selectorSequence', 'targetElement'
            ]
        },
        actions: {
            onSelectorSequence: 'selectorSequence',
            doStuffToTargetElement: 'targetElement'
        }
    },
    complexPropDefaults:{
        controller: BeKibitzing,
    }
});

register(ifWantsToBe, upgrade, tagName);