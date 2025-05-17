import './bootstrap';

import { createApp, h } from 'vue';
import { createInertiaApp, Link  } from '@inertiajs/vue3';
import MainLayout from './Layouts/MainLayout.vue';
import { ZiggyVue } from 'ziggy';  // Correction du package
import { Ziggy } from './ziggy';     // Correction du package

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    const page = pages[`./Pages/${name}.vue`].default;
    
    page.layout = page.layout || MainLayout;
    
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .component("Link", Link)
      .mixin({ methods: { route }})  // Passage de la configuration Ziggy
      .mount(el);
  },
});