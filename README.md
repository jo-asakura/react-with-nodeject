# React JS with nodeject dependency injection manager usage

An example of how you can use [React JS framework](http://facebook.github.io/react/) with [nodeject dependency injection manager](https://github.com/LlamaSantos/Nodeject) to build applications.

This is the default approach that I implemented back in Summer 2014 for all the [redditgifts](http://redditgifts.com) React applications.

The advantages of this approach are:

 - Cleaner and more readable code;
 - Easily share React JS components between your React applications;
 - Include different npm modules into your React application;
 - One js file per application: compiled, bundled and minified;
 - Unit tests are much easier with dependency injection.

There are two demo applications:

 - [example-simple](/jsx/example-simple) - A simple demo app with only 3 React modules;
 - [example-complex](/jsx/example-simple) - A more complex demo app with 5 React modules and 2 sub apps.

In order to get compiled js files run `grunt` command form a command line.

Remember, it's just an example. Feel free to modify and expand it based on your project's needs.

## Author

**Alexandr Marinenko**

+ [http://twitter.com/jo_asakura](http://twitter.com/jo_asakura)
+ [http://github.com/jo-asakura](http://github.com/jo-asakura)
+ [http://codepen.io/jo-asakura](http://codepen.io/jo-asakura/popular/)

## Copyright and license

[MIT](LICENSE.md)