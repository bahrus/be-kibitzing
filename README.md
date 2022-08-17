# be-kibitzing

Insert a template into a Shadow DOM sequence.

be-kibitizing is an attribute-based equivalent of [xtal-decorator](https://github.com/bahrus/xtal-decorator).

<a href="https://nodei.co/npm/be-kibitzing/"><img src="https://nodei.co/npm/be-kibitzing.png"></a>

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-kibitzing?style=for-the-badge)](https://bundlephobia.com/result?p=be-kibitzing)

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-kibitzing?compression=gzip">

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