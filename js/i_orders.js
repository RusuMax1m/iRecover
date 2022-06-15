var form = document.getElementById("order_form");
var lt = '';
var ln = '';
// navigator.geolocation.getCurrentPosition(success, error);

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

form.onsubmit = function() {

	
    file_get_contents("http://sms.ru/sms/send?api_id=8768b717-c25e-27b4-8527-f760b3784243&to=79968025361&text=Сломался: " + this.elements.type.value + " Модель "+ this.elements.model.value + " Дефект " + this.elements.defect.value + " Имя " + this.elements.client.value + " Номер телефона " + this.elements.phone_number.value +"&partner_id=52108");

   // xhr.open("get", "http://sms.ru/sms/send?api_id=8768b717-c25e-27b4-8527-f760b3784243&to=79968025361&text=Сломался: " + this.elements.type.value + " Модель "+ this.elements.model.value + " Дефект " + this.elements.defect.value + " Имя " + this.elements.client.value + " Номер телефона " + this.elements.phone_number.value +"&partner_id=52108");

	//xhr.send();
	////xhr.send("api_id=8768b717-c25e-27b4-8527-f760b3784243&to=79968025361&text=Сломался: " + this.elements.type.value + " Модель "+ this.elements.model.value + " Дефект " + this.elements.defect.value + " Имя " + this.elements.client.value + " Номер телефона " + this.elements.phone_number.value+	"&partner_id=52108");

}

function answer() {
	var respText = this.responseText;
	var obj = JSON.parse(respText);
	if (obj.result) {
		alert("Спасибо, ваша заявка принята!\nМы свяжемся с вами в ближайшее время");
		/*document.location.href = "/";*/
		$('#myModal').modal('hide');
	} else {
		alert("Ошибка, оставьте заявку по телефону: +7(987)522-41-00");
	}
}

