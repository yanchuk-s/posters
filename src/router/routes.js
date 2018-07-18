
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '', component: () => import('pages/Header') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/home') }
    ]
  },
  {
    path: '/create',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/create') }
    ]
  },
  {
    path: '/edit',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/edit') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
