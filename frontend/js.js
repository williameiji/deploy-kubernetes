$("#button-blue").on("click", function () {
	var txt_nome = $("#name").val();
	var txt_email = $("#email").val();
	var txt_comentario = $("#comment").val();

	$.ajax({
		url: "http://192.168.49.2:30005",

		type: "post",
		data: { nome: txt_nome, comentario: txt_comentario, email: txt_email },
		beforeSend: function () {
			console.log("Tentando enviar os dados....");
		},
	}).done(function (e) {
		alert("Dados Salvos");
	});
});
