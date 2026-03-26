/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
      destroy: typeof routes['auth.access_token.destroy']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
  products: {
    index: typeof routes['products.index']
    create: typeof routes['products.create']
    store: typeof routes['products.store']
    show: typeof routes['products.show']
    edit: typeof routes['products.edit']
    update: typeof routes['products.update']
    destroy: typeof routes['products.destroy']
    syncFlavors: typeof routes['products.sync_flavors']
  }
  flavors: {
    index: typeof routes['flavors.index']
    create: typeof routes['flavors.create']
    store: typeof routes['flavors.store']
    show: typeof routes['flavors.show']
    edit: typeof routes['flavors.edit']
    update: typeof routes['flavors.update']
    destroy: typeof routes['flavors.destroy']
  }
}
