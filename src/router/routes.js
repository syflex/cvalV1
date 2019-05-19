
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/Index.vue') },
      { name: 'Crop', path: 'crops', component: () => import('pages/Crops.vue') },
      { name: 'Crops', path: 'viewcrops', component: () => import('pages/Crops.vue') },
      { name: 'Structure', path: 'Structure', component: () => import('pages/Structures.vue') },
      { name: 'Structures', path: 'viewStructure', component: () => import('pages/Structures.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
