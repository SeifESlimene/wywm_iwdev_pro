export const pages = {
  aboutUs: {...await import('./aboutUs.js')}.aboutUs,
  // contactUs: {...await import('./contactUs.js')}.contactUs,
  shop: {...await import('./shop.js')}.shop,
  navHeader : {...await import('./navHeader.js')}.navHeader,
  navFooter : {...await import('./navFooter.js')}.navFooter,
  itemCard : {...await import('./itemCard.js')}.itemCard,
  home : {...await import('./home.js')}.home,
};