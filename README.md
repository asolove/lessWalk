# LessWalk

Do useful things walking the Less.js parse tree. (Except, not yet, )

## Status

Currently, it does nothing.

## What will it eventually do?

LessWalk will provide utilities for walking through the Less.js parse tree
and answer interesting questions about a stylesheet. Questions like:

* which variables affect the styling of this selector?
* where was the mixin used in this context defined?
* where does the current value of this variable come from?

If you use Less.js to do interesting things, you will probably be able to
use LessWalk to teach a computer to do the interesting things for you.

## Why?

LessWalk was originally motivated by a UI prototype that let users customize
the colors and fonts on a site build with Less.js via context menus brought up
over the element when they tapped or clicked. I needed an automatic way to ask: 
"which variables affect the styling of this item, even indirectly via color math
or mixins?" 

But it has other uses: You could build a Less IDE with intelligent autocompletion,
inline previews of known variable values, and links to the location of mixin definitions.

## Want to help?

I work in GitHub Normal Form. Feel free to open issues, submit pull requests, and 
ask questions inline in the code.