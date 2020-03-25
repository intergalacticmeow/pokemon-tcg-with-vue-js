import Home from './components/Home.vue';
import Card from './components/Card.vue';
import Sets from './components/Sets.vue';
import Types from './components/Types.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/card/:id', component: Card },
    { path: '/sets', component: Sets },
    { path: '/types', component: Types },
];

export default routes;