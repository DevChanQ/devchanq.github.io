import Scrype from 'scrype';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      scrype: Scrype
    }
  }
})