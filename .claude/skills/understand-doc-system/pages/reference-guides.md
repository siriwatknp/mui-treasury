# Reference guides

Reference guides are _technical descriptions of the machinery_ and how to operate it.

Reference guides have one job only: to describe. They are code-determined, because ultimately that's what they describe: key classes, functions, APIs, and so they should list things like functions, fields, attributes and methods, and set out how to use them.

Reference material is **information-oriented**.

By all means technical reference can contain examples to illustrate usage, but it should not attempt to explain basic concepts, or how to achieve common tasks.

Reference material should be **simple and to the point**.

Note that description **does** include basic description of how to use the machinery - how to instantiate a particular class, or invoke a certain method, for example, or precautions that must be taken when passing something to a function. However this is simply part of its function as technical reference, and emphatically **not** to be confused with a how-to guide - _describing correct usage of software_ (technical reference) is not the same as _showing how to use it to achieve a certain end_ (how-to documentation).

For some developers, reference guides are the only kind of documentation they can imagine. They already understand their software, they know how to use it. All they can imagine that other people might need is technical information about it.

Reference material tends to be written well. It can even - to some extent - be generated automatically, but this is never sufficient on its own.

## Analogy from cooking

Consider an encyclopedia article about an ingredient, say ginger.

When you look up _ginger_ in a reference work, what you want is _information_ about the ingredient - information describing its provenance, its behaviour, its chemical constituents, how it can be cooked.

You expect that whatever ingredient you look up, the information will be presented in a similar way. And you expect to be informed of basic facts, such as _ginger is a member of the family that includes turmeric and cardamom_.

This is also where you'd expect to be alerted about potential problems, such as: _ginger is known to provoke heartburn in some individuals_ or: _ginger may interfere with the effects of anticoagulants, such as warfarin or aspirin_.

## How to write good reference guides

### Structure the documentation around the code

**Give reference documentation the same structure as the codebase**, so that the user can navigate both the code and the documentation for it at the same time. This will also help the maintainers see where reference documentation is missing or needs to be updated.

### Be consistent

**In reference guides, structure, tone, format must all be consistent** - as consistent as those of an encyclopaedia or dictionary.

### Do nothing but describe

**The only job of technical reference is to describe**, as clearly and completely as possible. Anything else (explanation, discussion, instruction, speculation, opinion) is not only a distraction, but will make it harder to use and maintain. Provide examples to illustrate the description when appropriate.

Avoid the temptation to use reference material to instruct in how to achieve things, beyond the basic scope of using the software, and don't allow explanations of concepts or discussions of topics to develop. Instead, link to how-to guides, explanation and introductory tutorials as appropriate.

### Be accurate

**These descriptions must be accurate and kept up-to-date.** Any discrepancy between the machinery and your description of it will inevitably lead a user astray.

## Example from Divio's documentation

Have a look at an example from our technical reference section.

This is a typical reference guide (in this case, for our Divio CLI).

Description is all this article does, setting out in a complete and accurate form the functions, commands and options of the tool.

It's hardly a friendly or engaging read, but its purpose is to make looking up information about functionality as swift and distraction-free as possible.
