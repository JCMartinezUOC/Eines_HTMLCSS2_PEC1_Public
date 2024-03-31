/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import Glide from '@glidejs/glide';

/**
 * Write any other JavaScript below
 */

const carousels = 6;

for (let i = 1; i < carousels+1; i++) {
  if (document.querySelector('#carousel-'+i)) {
    let glide = new Glide('#carousel-'+i, {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      focusAt: 'center',
      autoplay: 3500
    })
  
    glide.mount();
  }
}


