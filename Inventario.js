class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        if (this.primero === null) {
            this.primero = producto;
        } else {
            producto.next = this.primero;
            this.primero.prev = producto;
            this.primero = producto;
        }
    }

    buscar(codigo) {
        let aux = this.primero;

        while (aux != null) {
            if (aux.codigo == codigo) {
                return aux;
            } else {
                aux = aux.next;
            }
        }
        return false;
    }

    listar() {
        let aux = this.primero;
        let lista = '';

        while (aux != null) {
            lista += ProductRow(aux);
            aux = aux.next;
        }
        return lista;
    }

    listarInverso() {
        let aux = this.primero;
        let lista = '';

        while (aux != null) {
            lista = ProductRow(aux) + lista;
            aux = aux.next;
        }
        return lista;
    }

    eliminar(codigo) {
        let aux = this.primero;

        if (aux == null) {
            return false;
        } else {
            if (aux.codigo == codigo) {
                this.primero = aux.next;
                return true;
            } else {
                while (aux.next != null) {
                    if (aux.next.codigo == codigo) {
                        aux.next = aux.next.next;
                        return true;
                    } else {
                        aux = aux.next;
                    }
                }
            }
        }
        return false;
    }
}