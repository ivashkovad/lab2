class Renderer {
  constructor(containerId, templateSource) {
    this.container = document.getElementById(containerId);
    this.template = Handlebars.compile(templateSource);
  }

  render(data) {
    // Обертываем массив данных в объект для Handlebars
    this.container.innerHTML = this.template({ clients: data });
  }

  updateDropdown(idsSet) {
    const selector = document.getElementById('idSelector');
    selector.innerHTML = '<option value="">-- ID не выбран --</option>';
    idsSet.forEach(id => {
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = id;
      selector.appendChild(opt);
    });
  }
}