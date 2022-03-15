import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {register} from 'be-hive/register.js';
import {BeKibitzingVirtualProps, BeKibitzingActions, BeKibitzingProps} from './types';
import { addCSSListener } from 'xtal-element/lib/observeCssSelector.js';

export class BeKibitizing implements BeKibitzingActions{
    onSelectorSequence(self: this): void{
        
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
                
            ]
        }
    }
});