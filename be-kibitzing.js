import { define } from 'be-decorated/be-decorated.js';
export class BeKibitzing {
    onSelectorSequence(self) {
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
            virtualProps: []
        }
    },
    complexPropDefaults: {
        controller: BeKibitzing,
    }
});
