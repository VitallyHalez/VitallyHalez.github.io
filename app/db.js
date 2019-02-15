define([], function () {
	var config =  {
		methods: {
			get: function(schema) {
				var response = [];
				$.ajax({
					//http://localhost:60873/api/CRUD/Select/SchemaName
					//url: 'https://myapp.ua/CRUD/SelectQuery/' + schema + "/" + columns[],
                    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
                    //url: 'http://localhost:60873/crud/get',
                    type: 'GET',
                    async: false,
                    success: function (data) {
 						response = data
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
						console.error("Ошибка запроса. Код ошибки: " + errorThrown.code 
										+ ". Имя ошибки: " + errorThrown.name 
										+ ". Сообщение ошибки: " + errorThrown.message)     
                    }
                });
                if (response) {
                	return response
                }
			},
			create: function() {

			},
			update: function() {

			},
			delete: function() {

			}
		},
		// Для демонстрации
		collection: {
			product: [
				{
					name: "DddfdD",
					header: "Продукт 1412",
					body: "Описание продукта должно быть тут"
				},
				{
					name: "dsfd",
					header: "Продукт 21421",
					body: "Описание продукта должно быть тут"
				},
				{
					name: "dddfds",
					header: "Продукт 33141",
					body: "Описание продукта должно быть тут"
				},
			]
		}
	}
	return config
})