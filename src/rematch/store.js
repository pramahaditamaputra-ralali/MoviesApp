import {init} from '@rematch/core';
import * as models from './models';
import Reactotron from './../../ReactotronConfig';

const store = init({
  models,
  redux: {
    enhancers: [Reactotron.createEnhancer()],
    // If using typescript/flow, enhancers: [Reactotron.createEnhancer!()]
  },
});

export default store;
