const clientTemplate = `
    <h3>Результаты запроса</h3>
    {{#if clients.length}}
        <ol>
            {{#each clients}}
                <li class="client-card">
                    <h4>{{fio}} (ID: {{id}})</h4>
                    <p><strong>Телефон:</strong> {{phone}}</p>
                    <p><strong>Адрес:</strong> {{address}}</p>
                    <p><strong>Баланс:</strong> 
                        <span class="{{#if (isLowBalance balance)}}balance-low{{else}}balance-high{{/if}}">
                            {{balance}} руб.
                        </span>
                    </p>
                </li>
            {{/each}}
        </ol>
    {{else}}
        <p>Данные отсутствуют или клиент не найден.</p>
    {{/if}}
`;

Handlebars.registerHelper('isLowBalance', function (value) {
  return value < 0;
});