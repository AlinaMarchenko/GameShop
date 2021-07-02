class Header {
	handlerOpenShoppingPage() {
		shoppingPage.render();
	} // открывает окно с выбранными товарами
	render(count) {
		const html = `
           <div class="header-container">
                <div class="header-counter" >
                     <ul class="hr">
   <li class="curs"><a href="index.html">Каталог</a></li>
   <li class="curs"><a href="text.html">О нас</a></li>
   <li class="curs" "hr onclick="headerPage.handlerOpenShoppingPage();" >Корзина</li>
  
 
  </ul>
					
                </div>
           </div>
        `;
		ROOT_HEADER.innerHTML = html;
	}
}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length); // отображение количества товаров в корзине