const db = new PhoneDatabase();
const view = new Renderer('outputContainer', clientTemplate);

// 1. Кнопка "Ввести данные"
document.getElementById('btnAdd').addEventListener('click', () => {
  const id = document.getElementById('clientId').value;
  const fio = document.getElementById('clientFio').value;
  const phone = document.getElementById('clientPhone').value;
  const addr = document.getElementById('clientAddress').value;
  const bal = document.getElementById('clientBalance').value;

  if (!id || !fio) return alert("Заполните ID и ФИО");

  const newClient = new Client(id, fio, phone, addr, bal);
  db.addClient(newClient);

  view.updateDropdown(db.allIds);
  alert("Клиент добавлен");
});

// 2. Кнопка "Очистить форму"
document.getElementById('btnClear').addEventListener('click', () => {
  document.getElementById('clientForm').reset();
});

// 3. Кнопка "Удалить по ID"
document.getElementById('btnDelete').addEventListener('click', () => {
  const selectedId = document.getElementById('idSelector').value;
  if (db.deleteClient(selectedId)) {
    view.updateDropdown(db.allIds);
    view.render([]); // Очистить вывод
    alert("Запись удалена");
  }
});

// 4. Кнопка "Показать все данные"
document.getElementById('btnShowAll').addEventListener('click', () => {
  view.render(db.getAll());
});

// 5. Кнопка "Показать элемент по ID"
document.getElementById('btnShowOne').addEventListener('click', () => {
  const selectedId = document.getElementById('idSelector').value;
  view.render(db.getById(selectedId));
});