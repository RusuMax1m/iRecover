var call_form = document.getElementById("call-form");
//call_form.tel.focus();

function file_get_contents( url ) { 
    var req = null;

    try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
        try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
            try { req = new XMLHttpRequest(); } catch(e) {}
        }
    }
    if (req == null) throw new Error('XMLHttpRequest not supported');
    req.open("GET", url, false);
    req.send(null);
    return req.responseText;
}


call_form.addEventListener ('submit', function(event) {
	event.preventDefault();
		if (this.tel.value) {
          file_get_contents("http://sms.ru/sms/send?api_id=8768b717-c25e-27b4-8527-f760b3784243&to=79968025361&text=Телефон " + this.tel.value + " Имя "+ this.name.value + "&partner_id=52108");
		} else {
			alert("Введите номер телефона");
		}

});

function afterRequest() {
	var respText = this.responseText;
	var obj = JSON.parse(respText);
	if (obj.result) {
		alert("Заявка принята!\nСпасибо!");
		$('.offer').arcticmodal('close'); 
	} else {
		alert("Ошибка!\nПозвоните нам по телефону +7(987)522-41-00");
	}
};
