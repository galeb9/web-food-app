import { createRouter, createWebHistory } from 'vue-router';

import IOrder from '@/components/views/IOrder.vue';
import TheWelcome from '@/components/views/TheWelcome.vue';
import OrderList from '@/components/views/OrderList.vue';
import OrderSuccess from '@/components/views/OrderSuccess.vue';
import NotFound from '@/components/views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/welcome'
        },
        {
            path: '/welcome',
            name: "TheWelcome",
            component: TheWelcome
        },
        { 
            path: '/order',
            name: 'IOrder',
            component: IOrder,
        },
        {
            path: '/order-list',
            name: "OrderList",
            component: OrderList,
        },
        {
            path: '/order-success',
            name: "OrderSuccess",
            component: OrderSuccess,
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound,
        }
    ]
})



export default router;
