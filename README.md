# be-kibitzing

Insert a template into a Shadow DOM sequence.

be-kitizing is an attribute-based equivalent of xtal-decorator.

```html
<template be-kibitzing='{
    "selectorSequence": ["ginny-weasly", "book-bag"]
}'>
    <tom-riddles-diary></tom-riddles-diary>
</template>

...
<ginny-weasly>
    #shadow-root#
        <book-bag></book-bag>
</ginny-weasly>
```

Generates:

```html
<template be-kibitzing='{
    "selectorSequence": ["ginny-weasly", "book-bag"]
}'>
    <tom-riddles-diary></tom-riddles-diary>
</template>

...
<ginny-weasly>
    #shadow-root#
        <book-bag>
            #shadow-root#
                <tom-riddles-diary></tom-riddles-diary>
        </book-bag>
</ginny-weasly>
```