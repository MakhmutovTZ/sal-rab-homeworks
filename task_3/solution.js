function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    let itemCountText = "";
        itemCountText = itemCountText + item.count;
        itemCountText = itemCountText + " x ";
        itemCountText = itemCountText + item.price;
        itemCountText = itemCountText + " ₽ = ";
        
    let sum = item.count * item.price;
    
        itemCountText = itemCountText + sum;
        itemCountText = itemCountText + " ₽";
  
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
