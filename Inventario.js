class Inventario {
    constructor() {
        this.primero = null;
        this.ultimo = null
    }

    agregar(nuevo) {
        if (!this.primero) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else if (this.primero.getCodigo() > nuevo.getCodigo()) {
            let aux = this.primero
            nuevo.next = this.primero;
            this.primero.prev = nuevo;
            this.primero = nuevo;
            this.ultimo = aux;
        }   else if (this.ultimo.getCodigo() < nuevo.getCodigo()) {
            this.ultimo.next = nuevo;
            nuevo.prev = this.ultimo;
            this.ultimo = nuevo;
        } else {
            let aux = this.primero;
            while (aux.next != null) {
                if (aux.next.getCodigo() > nuevo.getCodigo()) {
                    nuevo.next = aux.next;
                    nuevo.prev = aux;
                    aux.next.prev = nuevo;
                    aux.next = nuevo;
                    break;
                } else {
                    aux = aux.next;
                }
            }
        }
    }

    buscar(codigo) {
        let aux = this.primero;

        while (aux != null) {
            if (aux.getCodigo() == codigo) {
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

        while (aux) {
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

        while (aux != null) {
            if (aux.getCodigo() == codigo) {
                if (aux.prev) {
                    aux.prev.next = aux.next;
                } else {
                    this.primero = aux.next;
                }
                if (aux.next) {
                    aux.next.prev = aux.prev;
                } else {
                    this.ultimo = aux.prev;
                }
                return true;
            } else {
                aux = aux.next;
            }
        }
        return false;
    }
}