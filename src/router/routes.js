
const routes = [
  {
    path: '/',
    component: () => import('layouts/OnlyFooter.vue'),
    children: [
      { name: "Login", path: '', component: () => import('pages/Index.vue') },
      { name: "CadastroUser", path: 'Cadastro/User', component: () => import('pages/User/CadastroUser.vue') },
      { name: "CadastroUniversidade", path: 'Cadastro/Universidade', component: () => import('pages/Universidade/CadastroUniversidade.vue') },
      { name: "CadastroPsicologo", path: 'Cadastro/Psicologo', component: () => import('pages/Psicologo/CadastroPsicologo.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: "LobbyUser", path: 'User/LobbyUser/:id?', component: () => import('pages/User/LobbyUser.vue') },
      { name: "LobbyPsicologo", path: 'Psicologo/LobbyPsicologo/:id?', component: () => import('pages/Psicologo/LobbyPsicologo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
