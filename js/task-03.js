class Storage {
    constructor(items) {
      this.items = items;
    }
    
    getItems() {
      return this.items;
    }
    
    addItem(item) {
      this.items.push(item);
    }
    
    removeItem(item) {
      this.items = this.items.filter(itemName => itemName !== item);
    }
    
  }
  
  console.log(typeof Storage);
  
  
  const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ];
  
  const storage = new Storage(goods);
  
  console.log(storage.getItems());

  
  storage.addItem('Дроид');
  console.log(storage.getItems());

  
  storage.removeItem('Пролонгер');
  console.log(storage.getItems());