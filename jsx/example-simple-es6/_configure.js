import importHello from './hello.jsx';
import importMain from './main.jsx';
import importWorld from './world.jsx';

export default {
  'exampleSimpleApp': [
    {
      name: 'hello',
      type: importHello,
      deps: ['app', 'window', '$', 'React']
    },
    {
      name: 'main',
      type: importMain,
      deps: ['app', 'window', '$', 'React', 'hello', 'world']
    },
    {
      name: 'world',
      type: importWorld,
      deps: ['app', 'window', '$', 'React']
    }
  ]
};