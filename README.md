# Cozy the Framework

Cozy is a web UI framework thing in which I made as an infrastructure for [shapes.toys.kary.us](shapes.toys.kary.us) and it was so optimized, natural and easy to use that I decided to extract a basic model of it and have it as a framework/starting base for my next projects.

You see, I love FRP (Functional Reactive Programming). It is just a great software architecure for user-interaction based tools. In the world of web the best tool for doing so is the [Elm](http://elm-lang.org/). Elm is a great language but has two big problems:

1. No good tooling. It is capable of autocomplete for example but there is no such functionality in any editor yet.

2. It has a very bad HTML composition system. You must use functions like `div [ ] [ ]` to compose one element and nested elements always become so hard to read

Cozy is a template app which itself is a framework and architecture for building FRP software based on these stuff:

- Cozy is made using [TypeScript](http://www.typescriptlang.org/) but in a very special way. The whole software is strutured using namespaces and configured to use [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) module architecture. This is a very important decision becasue this style makes it possible for TypeScript to compile the whole software to ___one file___ and therefore ___illuminating any need for webpack/browserify___. One other thing is that TypeScript is configured to downpile to ES5 and also remove comments which makes it fairly easy to to just run TypeScript in watch mode and do the job. No other tool is ever needed.

- Minified versions of [React](https://reactjs.org/) are shipped within this package and linked just to provide you JSX. You can simply code in FRP and use JSX. Don't worry about React Components and just use simple functions instead of fancy Classes with props and states. Just use JSX to have fun and let the ReactDOM optimize the render in the background.

- The app is premade. It has it's own state manger, dispatcher, action center and .... You get a complete Elm architecture software with all the parts expect of VirtualDOM built in. So you do not need to worry about connecting a dozen of frameworks together and more importantly you can change the software to the deepest parts of the core.

## How to use it?
Just read the source code of `main.ts`, `logic/changeHello.ts` and `view/main.tsx` you’ll get it
