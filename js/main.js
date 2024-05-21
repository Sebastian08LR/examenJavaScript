class GetAllInfoFromAbrigos extends HTMLElement{
    constructor(){
        super();
    }
    async connectedCallback(){
        try{
            const product = this.getAttribute('prodctype');
            const data =  await fetch("https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716393600000&signature=Bb0HmuQPMWscjdbGid4BR13UXHCSYN6X6bfhLc2gSN0&downloadName=Documentos_DB.json");
            const response = await data.json();
            let template = '';
            
            if(product == 'abrigo'){
                for (let i = 0; i < 5; i++){
                    template+= `
                    <article>
                            <img src="${response.abrigo[i].imagen}" alt="">
                            <div>
                                <h3>${response.abrigo[i].nombre}</h3>
                                <p>$ ${response.abrigo[i].precio}</p>
                                <a class="addToCart" image="${response.abrigo[i].imagen} productName="${response.abrigo[i].nombre}" price="${response.abrigo[i].precio}">Agregar</a>
                            </div>
                        </article>
                     `
                }
            }
            else if(product == "camiseta"){
                for (let i = 0; i < 5; i++){
                    template+= `
                    <article>
                            <img src="${response.camiseta[i].imagen}" alt="">
                            <div>
                                <h3>${response.camiseta[i].nombre}</h3>
                                <p>$ ${response.camiseta[i].precio}</p>
                                <a class="addToCart" image="${response.camiseta[i].imagen} productName="${response.camiseta[i].nombre}" price="${response.camiseta[i].precio}">Agregar</a>
                            </div>
                        </article>
                     `
                }
            }
            else if(product == "pantalon"){
                for (let i = 0; i < 5; i++){
                    template+= `
                    <article>
                            <img src="${response.pantalon[i].imagen}" alt="">
                            <div>
                                <h3>${response.pantalon[i].nombre}</h3>
                                <p>$ ${response.pantalon[i].precio}</p>
                                <a class="addToCart" image="${response.pantalon[i].imagen} productName="${response.pantalon[i].nombre}" price="${response.pantalon[i].precio}">Agregar</a>
                            </div>
                        </article>
                     `
                }
            }
            else if(product == "shoppingCart"){
                for (let i = 0; i < 1; i++){
                console.log();
                template+= `
                <article class="itemOne" id="first-item">
                    <img src="${response.abrigo[(response.carrito[i].abrigoId)-1].imagen}" alt="">
                    <div class="shop" id="articulo">
                        <h2>Articulo</h2>
                        <p>${response.abrigo[(response.carrito[i].abrigoId)-1].nombre}</p>
                    </div>
                    <div class="shop">
                        <h2>Cantidad</h2>
                        <p>${response.carrito[i].cantidad}</p>
                    </div>
                    <div class="shop">
                        <h2>Precio</h2>
                        <p>$ ${response.abrigo[(response.carrito[i].abrigoId)-1].precio}</p>
                    </div>
                    <div class="shop" id="lastDiv">
                        <h2>Subtotal</h2>
                        <p>$ ${(response.abrigo[(response.carrito[i].abrigoId)-1].precio) * response.carrito[i].cantidad}</p>
                    </div>
                    <a id="cart-icon-1"><img src="../storage/img/trash.png"></a>
                </article>
                <article class="itemTwo" id="first-item">
                    <img src="${response.pantalon[(response.carrito[i+1].pantalonId)-1].imagen}" alt="">
                    <div class="shop" id="articulo">
                        <h2>Articulo</h2>
                        <p>${response.pantalon[(response.carrito[i+1].pantalonId)-1].nombre}</p>
                    </div>
                    <div class="shop">
                        <h2>Cantidad</h2>
                        <p>${response.carrito[i+1].cantidad}</p>
                    </div>
                    <div class="shop">
                        <h2>Precio</h2>
                        <p>$ ${response.pantalon[(response.carrito[i+1].pantalonId)-1].precio}</p>
                    </div>
                    <div class="shop" id="lastDiv">
                        <h2>Subtotal</h2>
                        <p>$ ${(response.pantalon[(response.carrito[i+1].pantalonId)-1].precio) * response.carrito[i+1].cantidad}</p>
                    </div>
                    <a id="cart-icon-2"><img src="../storage/img/trash.png"></a>
                </article>
                <article class="itemThree" id="first-item">
                    <img src="${response.camiseta[(response.carrito[i+2].camisetaId)-1].imagen}" alt="">
                    <div class="shop" id="articulo">
                        <h2>Articulo</h2>
                        <p>${response.camiseta[(response.carrito[i+2].camisetaId)-1].nombre}</p>
                    </div>
                    <div class="shop">
                        <h2>Cantidad</h2>
                        <p>${response.carrito[i+1].cantidad}</p>
                    </div>
                    <div class="shop">
                        <h2>Precio</h2>
                        <p>$ ${response.camiseta[(response.carrito[i+2].camisetaId)-1].precio}</p>
                    </div>
                    <div class="shop" id="lastDiv">
                        <h2>Subtotal</h2>
                        <p>$ ${(response.camiseta[(response.carrito[i+2].camisetaId)-1].precio) * response.carrito[i+1].cantidad}</p>
                    </div>
                    <a id="cart-icon-3"><img src="../storage/img/trash.png"></a>
                </article>
                `
                }   
            }
                this.innerHTML = template;
                const addBtn = document.querySelectorAll('.addToCart');
                const emptyCart = document.getElementById('emptyCart');
                const deleteItemOne = document.getElementById('cart-icon-1');
                const deleteItemTwo = document.getElementById('cart-icon-2');
                const deleteItemThree = document.getElementById('cart-icon-3');
                deleteItemOne.addEventListener('click', ()=>{
                    document.querySelector('.itemOne').style.display = 'none'
                });
                deleteItemTwo.addEventListener('click', ()=>{
                    document.querySelector('.itemTwo').style.display = 'none'
                })
                deleteItemThree.addEventListener('click', ()=>{
                    document.querySelector('.itemThree').style.display = 'none'
                })
                emptyCart.addEventListener('click', () =>{
                    template = `
                        <h1>EMPTY CART</h1>
                    `
                    this.innerHTML = template;
                })
                addBtn.forEach(() =>{
                        addBtn.addEventListener('click', ()=>{
                        const image = addBtn.getAttribute('image');
                        const productName = addBtn.getAttribute('productName');
                        const price = addBtn.getAttribute('price');
                        console.log(productName, price, image); 
                        template += `
                            <article id="first-item">
                                <img src="${image}" alt="">
                                <div class="shop" id="articulo">
                                    <h2>Articulo</h2>
                                    <p>${productName}</p>
                                </div>
                                <div class="shop">
                                    <h2>Cantidad</h2>
                                    <p>1</p>
                                </div>
                                <div class="shop">
                                    <h2>Precio</h2>
                                    <p>$ ${price}</p>
                                </div>
                                <div class="shop" id="lastDiv">
                                    <h2>Subtotal</h2>
                                    <p>$ ${price}</p>
                                </div>
                                <a id="cart-icon" href=""><img src="../storage/img/trash.png"></a>
                            </article>
                        `
                        this.innerHTML = template;
                    })
                })

        }
        catch(error){
            console.log(error);
        }
    }

}
customElements.define('get-product', GetAllInfoFromAbrigos);
