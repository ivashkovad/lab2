// Класс сущности Клиент
class Client {
  constructor(id, fio, phone, address, balance) {
    this.id = id;
    this.fio = fio;
    this.phone = phone;
    this.address = address;
    this.balance = parseFloat(balance) || 0;
  }
}

// Класс для хранения и обработки данных
class PhoneDatabase {
  constructor() {
    this.clientsMap = new Map(); // Используем Map для хранения по ID
    this.allIds = new Set();    // Используем Set для уникальных ID
  }

  addClient(client) {
    this.clientsMap.set(client.id, client);
    this.allIds.add(client.id);
  }

  deleteClient(id) {
    if (this.clientsMap.has(id)) {
      this.clientsMap.delete(id);
      this.allIds.delete(id);
      return true;
    }
    return false;
  }

  getAll() {
    return Array.from(this.clientsMap.values());
  }

  getById(id) {
    const client = this.clientsMap.get(id);
    return client ? [client] : [];
  }
}