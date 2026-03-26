/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.access_token.destroy']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'products.index': {
    methods: ["GET","HEAD"],
    pattern: '/products',
    tokens: [{"old":"/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.index']['types'],
  },
  'products.create': {
    methods: ["GET","HEAD"],
    pattern: '/products/create',
    tokens: [{"old":"/products/create","type":0,"val":"products","end":""},{"old":"/products/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['products.create']['types'],
  },
  'products.store': {
    methods: ["POST"],
    pattern: '/products',
    tokens: [{"old":"/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.store']['types'],
  },
  'products.show': {
    methods: ["GET","HEAD"],
    pattern: '/products/:id',
    tokens: [{"old":"/products/:id","type":0,"val":"products","end":""},{"old":"/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.show']['types'],
  },
  'products.edit': {
    methods: ["GET","HEAD"],
    pattern: '/products/:id/edit',
    tokens: [{"old":"/products/:id/edit","type":0,"val":"products","end":""},{"old":"/products/:id/edit","type":1,"val":"id","end":""},{"old":"/products/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['products.edit']['types'],
  },
  'products.update': {
    methods: ["PUT","PATCH"],
    pattern: '/products/:id',
    tokens: [{"old":"/products/:id","type":0,"val":"products","end":""},{"old":"/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.update']['types'],
  },
  'products.destroy': {
    methods: ["DELETE"],
    pattern: '/products/:id',
    tokens: [{"old":"/products/:id","type":0,"val":"products","end":""},{"old":"/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.destroy']['types'],
  },
  'flavors.index': {
    methods: ["GET","HEAD"],
    pattern: '/flavors',
    tokens: [{"old":"/flavors","type":0,"val":"flavors","end":""}],
    types: placeholder as Registry['flavors.index']['types'],
  },
  'flavors.create': {
    methods: ["GET","HEAD"],
    pattern: '/flavors/create',
    tokens: [{"old":"/flavors/create","type":0,"val":"flavors","end":""},{"old":"/flavors/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['flavors.create']['types'],
  },
  'flavors.store': {
    methods: ["POST"],
    pattern: '/flavors',
    tokens: [{"old":"/flavors","type":0,"val":"flavors","end":""}],
    types: placeholder as Registry['flavors.store']['types'],
  },
  'flavors.show': {
    methods: ["GET","HEAD"],
    pattern: '/flavors/:id',
    tokens: [{"old":"/flavors/:id","type":0,"val":"flavors","end":""},{"old":"/flavors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['flavors.show']['types'],
  },
  'flavors.edit': {
    methods: ["GET","HEAD"],
    pattern: '/flavors/:id/edit',
    tokens: [{"old":"/flavors/:id/edit","type":0,"val":"flavors","end":""},{"old":"/flavors/:id/edit","type":1,"val":"id","end":""},{"old":"/flavors/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['flavors.edit']['types'],
  },
  'flavors.update': {
    methods: ["PUT","PATCH"],
    pattern: '/flavors/:id',
    tokens: [{"old":"/flavors/:id","type":0,"val":"flavors","end":""},{"old":"/flavors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['flavors.update']['types'],
  },
  'flavors.destroy': {
    methods: ["DELETE"],
    pattern: '/flavors/:id',
    tokens: [{"old":"/flavors/:id","type":0,"val":"flavors","end":""},{"old":"/flavors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['flavors.destroy']['types'],
  },
  'products.sync_flavors': {
    methods: ["PUT"],
    pattern: '/products/:id/sync-flavors',
    tokens: [{"old":"/products/:id/sync-flavors","type":0,"val":"products","end":""},{"old":"/products/:id/sync-flavors","type":1,"val":"id","end":""},{"old":"/products/:id/sync-flavors","type":0,"val":"sync-flavors","end":""}],
    types: placeholder as Registry['products.sync_flavors']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
