class ContenedorMemoria {
  constructor() {
    this.elements = [];
  }

  getById(id) {
    return this.elements.find((e) => e.id == id);
  }

  getAll() {
    return this.elements;
  }

  save(elem) {
    const length = this.elements.length;
    const newId = length == 0 ? 1 : this.elements[length - 1].id + 1;
    const newElem = { ...elem, id: newId };

    this.elements.push(newElem);
    return newElem;
  }

  update(itemId, elem) {
    let lista = this.elements;
    //const elUpdate = lista.filter( el => el.id == itemId)
    lista = lista.filter((el) => el.id != itemId);
    const newElem = { ...elem, id: itemId };
    this.elements.push(newElem);
    return newElem;
  }

  delete(itemId) {
    let lista = this.elements;
    lista = lista.filter((el) => el.id != itemId);
    this.elements = lista;
  }
}

export default ContenedorMemoria;
