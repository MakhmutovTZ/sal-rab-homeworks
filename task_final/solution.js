
function sendRequest(name, phone, address, goods, sum) {
    let data = {
        client: name + " " + phone, 
        goods: [], 
        order: {address: "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв. " + address.flat, 
        sum: sum},};
        for (let i = 0; i < goods.length; i ++) {
            data.goods.push({"title": goods[i].title, "count": goods[i].count});
        }

    let jsonData = JSON.stringify({data});

    return jsonData;
}
