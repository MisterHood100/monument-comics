import "./shop.css";

function Shop() {
    return (
        <div className="shop">
            <h1 className="shopTitle">SHOP MONUMENT COMICS!</h1>
            <div className="shopBtns">
                <a href="https://monumentcomicsworld.com/collections/all" target="_blank" rel="noreferrer"><button className="shopBtn">GO TO SHOP</button></a>
            </div>
            <h2 className="shopComicsTitle">FEATURED COMIC BOOKS</h2>
            <div className="shopComics">
                <a href="https://monumentcomicsworld.com/products/king-digital" target="_blank" rel="noreferrer"><img className="shopComic" src="https://monumentcomicsworld.com/cdn/shop/products/MonumentComics-KING.jpg?v=1664513673&width=823" alt="Comic 1" /></a>
                <a href="https://monumentcomicsworld.com/products/solfire-digital" target="_blank" rel="noreferrer"><img className="shopComic" src="https://monumentcomicsworld.com/cdn/shop/products/MonumentComics-Solfire.jpg?v=1664513843&width=823" alt="Comic 2" /></a>
                <a href="https://monumentcomicsworld.com/products/reflex-digital" target="_blank" rel="noreferrer"><img className="shopComic" src="https://monumentcomicsworld.com/cdn/shop/products/MonumentComics-ReFlex.jpg?v=1664513770&width=823" alt="Comic 3" /></a>
            </div>
            <h2 className="shopMerchTitle">FEATURED MERCHANDISE</h2>
            <div className="shopMerchandise">
                <a href="https://monumentcomicsworld.com/products/monument-comics-logo-short-sleeve-t-shirt-a?variant=41828328341561" target="_blank" rel="noreferrer"><img className="shopMerch" src="https://monumentcomicsworld.com/cdn/shop/files/mens-classic-tee-dark-heather-front-656d42cb123ae.jpg?v=1701659357&width=823" alt="Merch 1" /></a>
                <a href="https://monumentcomicsworld.com/products/monument-comics-logo-short-sleeve-t-shirt-a?variant=41828328570937" target="_blank" rel="noreferrer"><img className="shopMerch" src="https://monumentcomicsworld.com/cdn/shop/files/mens-classic-tee-sport-grey-front-656d42cb13f58.jpg?v=1701659363&width=823" alt="Merch 2" /></a>
                <a href="https://monumentcomicsworld.com/products/monument-comics-logo-short-sleeve-t-shirt-b?variant=41828336566329" target="_blank" rel="noreferrer"><img className="shopMerch" src="https://monumentcomicsworld.com/cdn/shop/files/mens-classic-tee-black-front-656d436e53e47.jpg?v=1701659827&width=823" alt="Merch 3" /></a>
            </div>

        </div>
    )
}

export default Shop;