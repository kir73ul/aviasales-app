/* eslint-disable no-unused-expressions */
export default class IdBase {
  volume = 1000000;

  idCollection = new Set();

  create = () => {
    let newId = Math.floor(Math.random() * this.volume);
    !this.idCollection.has(newId) ? this.idCollection.add(newId) : (newId = this.create());
    return newId;
  };

  delete = (id) => {
    this.idCollection.delete(id);
  };
}
