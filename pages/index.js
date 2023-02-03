export const pages = {
  aboutUs: {...await import('./aboutUs.js')}.aboutUs,
  contactUs: {...await import('./contactUs.js')}.contactUs,
  shop: {...await import('./shop.js')}.shop,
  navHeader : {...await import('./navHeader.js')}.navHeader,
  navFooter : {...await import('./navFooter.js')}.navFooter,
  itemCard : {...await import('./itemCard.js')}.itemCard,
  home : {...await import('./home.js')}.home,
  shoppingCart : {...await import('./cart/shoppingCart.js')}.shoppingCart,
  dbRW : {...await import('./cart/dbQ2Shop.js')}.dbRW,
  cartDialog : {...await import('./cart/cartDialog.js')}.cartDialog, 
  dialogsFns : {...await import('./dialogsFns.js')}.dialogsFns, 
  checkout : {...await import('./cart/checkout.js')}.checkout, 
};