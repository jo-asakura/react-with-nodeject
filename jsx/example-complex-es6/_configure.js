import importCoffeeHello from './coffee-hello.jsx';
import importCoffeeMain from './coffee-main.jsx';
import importCoffeeWorld from './coffee-world.jsx';
import importTeaMain from './tea-main.jsx';
import importMegaMain from './mega-main.jsx';

export default {
  'coffeeApp': [
    {
      name: 'coffee-hello',
      type: importCoffeeHello,
      deps: ['app', 'window', '$', 'React']
    },
    {
      name: 'coffee-main',
      type: importCoffeeMain,
      deps: ['app', 'window', '$', 'React', 'coffee-hello', 'coffee-world']
    },
    {
      name: 'coffee-world',
      type: importCoffeeWorld,
      deps: ['app', 'window', '$', 'React']
    }
  ],
  'teaApp': [
    {
      name: 'tea-main',
      type: importTeaMain,
      deps: ['app', 'window', '$', 'React']
    }
  ],
  'megaApp': [
    {
      name: 'mega-main',
      type: importMegaMain,
      deps: ['app', 'window', '$', 'coffee-main', 'tea-main'] // <-- external dependencies, \o/
    }
  ]
};