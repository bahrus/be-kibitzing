import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
import('css-observe/css-observe.js');
const seqLookup = new WeakMap();
export class BeKibitzing {
    onSelectorSequence({ proxy, selectorSequence }) {
        const host = proxy.getRootNode().host || document.body;
        this.plantListener(host, selectorSequence, false);
    }
    plantListener(host, selectorSequence, childElement) {
        if (childElement && host.shadowRoot === null) {
            //assuming valid sequence, element must not be initialized yet
            setTimeout(() => {
                this.plantListener(host, selectorSequence, childElement);
            }, 50);
            return;
        }
        //const host = relativeElement.getRootNode();
        const head = selectorSequence[0];
        const tail = selectorSequence.slice(1);
        const cssObserve = document.createElement('css-observe');
        seqLookup.set(cssObserve, tail);
        cssObserve.selector = head;
        cssObserve.observe = true;
        cssObserve.addEventListener('latest-match-changed', e => {
            const { latestMatch } = cssObserve;
            if (tail.length > 0) {
                this.plantListener(latestMatch, tail, true);
            }
            else {
                this.proxy.targetElement = latestMatch;
            }
        });
        if (host.shadowRoot === null) {
            host.appendChild(cssObserve);
        }
        else {
            host.shadowRoot.appendChild(cssObserve);
        }
    }
    doStuffToTargetElement({ targetElement, proxy }) {
        if (targetElement.shadowRoot === null) {
            setTimeout(() => {
                this.doStuffToTargetElement(this);
            }, 50);
            return;
        }
        const clone = proxy.content.cloneNode(true);
        targetElement.shadowRoot.appendChild(clone);
        proxy.targetElement = undefined;
    }
}
const tagName = 'be-kibitzing';
const ifWantsToBe = 'kibitzing';
const upgrade = 'template';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            forceVisible: [upgrade],
            virtualProps: [
                'selectorSequence', 'targetElement'
            ]
        },
        actions: {
            onSelectorSequence: 'selectorSequence',
            doStuffToTargetElement: 'targetElement'
        }
    },
    complexPropDefaults: {
        controller: BeKibitzing,
    }
});
register(ifWantsToBe, upgrade, tagName);
