class ProductManager {
    constructor() {
        this.products = []
    }

    generadorIds = () => {
        const count = this.products.length
        if (count === 0) {
            return 1
        } else {
            return (this.products[count-1].id) + 1
        }
    }

    getProducts = () => {
        return this.products
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.generadorIds()
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("El producto no puede ser agregado porque faltan datos");
            return
        }
        if (this.products.find(elem => elem.code === code)) {
            console.error("El producto no puede ser agregado porque el CODE ya existe");
            return
        }
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock 
        })
    }
}

const productManager = new ProductManager()
productManager.addProduct('Teclado', 'Teclado Redragon Shiva K512 RGB Español Black', 8000, 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24185_Teclado_Redragon_Shiva_K512_RGB_Espa__ol_Black_970bc239-grn.jpg', '205010', 20)
productManager.addProduct('Mouse', 'Mouse Logitech G PRO Hero Gaming 16000DPI RGB', 9000, 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9518_Mouse_Logitech_G_PRO_Hero_Gaming_16000DPI_RGB_2934063c-grn.jpg', '306807', 10)
productManager.addProduct('Gabinete', 'Gabinete Kolink Void Black ARGB ATX Vidrio Templado ', 24000, 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_Black_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg', '205010', 8)
console.log(productManager.getProducts())
productManager.addProduct('Gabinete', 'Gabinete Kolink Void Black ARGB ATX Vidrio Templado ', 24000, 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_Black_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg', 8)
console.log(productManager.getProducts())