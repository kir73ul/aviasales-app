/* eslint-disable no-unused-expressions */
class IdBase {
  volume = 1000000;

  idCollection = new Set();

  create = () => {
    let newId = Math.floor(Math.random() * this.volume);
    !this.idCollection.has(newId)
      ? this.idCollection.add(newId)
      : (newId = this.create());
    return newId;
  };

  delete = (id) => {
    this.idCollection.delete(id);
  };
}

const idBase = new IdBase();
export default idBase;
