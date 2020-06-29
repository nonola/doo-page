export { default as Brands } from '../../components/Brands.vue'
export { default as CoreValues } from '../../components/CoreValues.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GlobalOffices } from '../../components/GlobalOffices.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyBrands = import('../../components/Brands.vue' /* webpackChunkName: "components/Brands'}" */).then(c => c.default || c)
export const LazyCoreValues = import('../../components/CoreValues.vue' /* webpackChunkName: "components/CoreValues'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer'}" */).then(c => c.default || c)
export const LazyGlobalOffices = import('../../components/GlobalOffices.vue' /* webpackChunkName: "components/GlobalOffices'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header'}" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
