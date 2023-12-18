import {createRealmContext} from '@realm/react';
import {Carousel, CarouselSkema, Profili} from './CarouselSchema';

export const realmContext = createRealmContext({
  schema: [Profili],
});
