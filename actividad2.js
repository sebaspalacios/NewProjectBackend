const fs = Require('fs')
const produc = 'Productos.json'

class Productmanager {
    async consultarProductos(){
        try {
            if (fs.existsSync(produc)) {
                const infoProductos = await fs.promises.readFile(produc, 'utf-8')
                const infoProductosJS = JSON.parse(infoProductos)
                return infoProductosJS
            } else {
                return []
            }
        } catch(error) {
            console.log(error)
        }
    }
    async crearUsuario(usuario){
        try {
            const usuarios = await this.consultarProductos()
            usuarios.push(usuario)
            await fs.promises.writeFile(consultarProductos, JSON.stringify(usuarios))
        } catch (error){
            console.log(error)
        }
    }
}

const manager = new ManagerUsuarios()
//console.log(manager.consultarProductos())
async function ejemplo() {
    const consultaDeProducto = await manager.consultarProodcutos()
    console.log(consultaDeProducto)
    const Propiedad1 = {
        ubicacion: 'Barrio altos del palmar',
        medidas: '500mts x 600mts',
        ciudad: 'La Rioja Capital Argentina',
        codigoPostal: 5300,
        precio: '4500usd',
        dueño: 'Sebastian Palacios'
    }
    await manager.crearUsuario(Propiedad1)
}
ejemplo()
