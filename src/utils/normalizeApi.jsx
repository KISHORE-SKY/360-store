function NormalizeProducts(product) {
    return{
        id:product.id,
        title:product.title,
        description:product.description,
        price:product.price,
        image:product.image
        ? product.image:
        product.images?.[0],
        rating:product.rating?.rate
        ? product.rating.rate
        :product.rating,
    }
}


export default NormalizeProducts;