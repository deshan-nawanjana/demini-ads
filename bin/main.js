window.addEventListener('scroll', function(){
	var p = document.documentElement.scrollTop;
	if(p > 30) {
		cl('ribbon')[0].setAttribute('id', 'rbn_on');
	} else {
		cl('ribbon')[0].removeAttribute('id');
	}
});

var counts = {
	"c" : { "c" : 0.0, "v" : 35000 },
	"m"	: { "c" : 0.0, "v" : 500 },
	"y"	: { "c" : 0.0, "v" : 27 }
};

window.addEventListener('load', function(){
	setTimeout(function(){
		counts["c"]["g"] = counts.c.v / 50;
		counts["m"]["g"] = counts.m.v / 50;
		counts["y"]["g"] = counts.y.v / 50;
		setInterval(counter, 25);
	}, 0);
});

var c = 0;

function counter() {
	if(cl('counter')[0].innerText.split('+').length > 3) {
		return;
	}
	var arr = Array.from("cmy");
	var err = cl('cnt_box_count');
	arr.forEach(function(e, i){
		if(counts[e].c < counts[e].v) {
			counts[e].c += counts[e].g;
			err[i].innerHTML = parseInt(counts[e].c);
		} else {
			err[i].innerHTML = counts[e].v + "+";
		}
	});
}



var items = {};


window.addEventListener('load', function(){
	items = JSON.parse(id('items').innerHTML);

	var btn = '<div onclick="load_list(this)" class="pro_lst_box_btn" id="lst_on">All</div>';
	Object.keys(items).forEach(function(k, i){
		btn += `<div onclick="load_list(this)" class="pro_lst_box_btn">${k}</div>`;
	});
	id('pro_lst_box').innerHTML = btn;

	if(window.innerWidth > 750) {
		load_list(cl('pro_lst_box_btn')[0]);
	} else {
		load_list(cl('pro_lst_box_btn')[1]);
	}
});

function load_list(btn) {
	id('lst_on').removeAttribute('id');
	btn.setAttribute('id', 'lst_on');


	var typ = btn.innerHTML;

	var html = ``;



	if(typ != 'All') {
		Object.keys(items[typ]).forEach(function(k){
			var lbl = k.replace(typ + ' ', '');
			lbl = lbl.replace(' ' + typ, '');
			html += `<div class="pro_item" onclick="load_item(this)" type="${typ}" name="${k}">`;
			html += `<div class="pro_itm_type ${typ.toLowerCase()}">`;
			html += `<div class="pro_itm_type_m">${typ}</div>`;
			html += `<div class="pro_itm_type_s">[${items[typ][k].T}]</div>`;
			html += `<div class="pro_itm_price">${getPrice(typ, k)}</div>`;
			html += `</div>`;
			html += `<div class="pro_itm_name">${lbl}</div>`;
			html += `</div>`;
		});
	} else {
		["Flex", "Clear", "PVC"].forEach(function(t){
			Object.keys(items[t]).forEach(function(k){
				var lbl = k.replace(typ + ' ', '');
				lbl = lbl.replace(' ' + typ, '');
				html += `<div class="pro_item" onclick="load_item(this)" type="${t}" name="${k}">`;
				html += `<div class="pro_itm_type ${t.toLowerCase()}">`;
				html += `<div class="pro_itm_type_m">${t}</div>`;
				html += `<div class="pro_itm_type_s">[${items[t][k].T}]</div>`;
				html += `<div class="pro_itm_price">${getPrice(t, k)}</div>`;
				html += `</div>`;
				html += `<div class="pro_itm_name">${lbl}</div>`;
				html += `</div>`;
			});
		});
	}

	id('pro_itm_box').innerHTML = html;

	id('pro_itm_box').scrollTop = 0;
	cl('pro_item')[0].click();

}

function load_item(itm) {
	if(id('itm_on')) { id('itm_on').removeAttribute('id'); }
	itm.setAttribute('id', 'itm_on');

	try_item(itm.getAttribute('type'), itm.getAttribute('name'));
}

function getPrice(t, n) {
	if(items[t][n].D == undefined) {
		return `Rs. ${items[t][n].S} /=`;
	} else {
		return `Rs. ${items[t][n].S} /= , Rs. ${items[t][n].D} /=`;
	}
}

function url_go(x) {
	location = x;
}

function url_op(x) {
	window.open(x);
}

/*=======================================================================================*/

function close_gallery() {
	id('gallery').style.opacity = 0;
	id('glr_box').style.opacity = 0;
	id('glr_box').style.transform = 'scale(0.8)';
	document.body.style.overflowY = 'scroll';
	setTimeout(function(){
		id('gallery').style.display = 'none';
		id('glr_box').style.display = 'none';
	}, 310);
}

function open_gallery(argument) {	id('gallery').style.display = 'inline-block';
	id('glr_box').style.display = 'inline-block';
	document.body.style.overflowY = 'hidden';
			id('glr_box_lst').scrollTop = 0.0;
	setTimeout(function(){
		id('gallery').style.opacity = 1;
		id('glr_box').style.opacity = 1;
		id('glr_box').style.transform = 'scale(1)';
	}, 10);
}

window.addEventListener('load', function(){
	if(window.innerWidth < 750) { return; }
	var html = ``;
	JSON.parse(id('snaps').innerHTML).forEach(function(e){
		html += `<div class="glr_itm" lang="${e}" style="background-image:url(${e})" onclick="view_img(this)"></div>`;
	});
	id('glr_box_lst').innerHTML = html;
	cl('glr_itm')[0].click();
});

function view_img(itm) {

	if(id('glr_on')) {
		id('glr_on').removeAttribute('id');
	}
	itm.setAttribute('id', 'glr_on');

	id('glr_box_img').style.backgroundImage = `url(${itm.lang})`;
	id('glr_box_img').style.opacity = `0.1`;
	id('glr_box_img').style.backgroundSize = `60% auto`;
	setTimeout(function(){
		id('glr_box_img').style.backgroundSize = `80% auto`;
		id('glr_box_img').style.opacity = `1`;
	}, 100);
}