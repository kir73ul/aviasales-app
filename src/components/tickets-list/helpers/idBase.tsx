class IdBase {
  volume = 1000000;

  idCollection = new Set();

  create = () => {
    let newId = Math.floor(Math.random() * this.volume);
    if(!this.idCollection.has(newId)) {
      this.idCollection.add(newId)
    } else newId = this.create()
    return newId;
  };

  delete = (id :number ) => {
    this.idCollection.delete(id);
  };
}

export const idBase = new IdBase();
