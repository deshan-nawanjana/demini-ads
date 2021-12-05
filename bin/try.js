var sl_type, sl_name, sl_side = 'S';

function try_item(type, name) {
	id('try_title').innerHTML = name;
	sl_type = type;
	sl_name = name;

	id('try_box').style.width  = '0px';
	id('try_box').style.height = '0px';

	id('try_box').style.transform = 'scale(0.7)';
	setTimeout(function(){
		id('try_box').style.transform = 'scale(1)';
	}, 100);



	if(items[sl_type][sl_name].D != undefined) {
		id('side').style.visibility = 'visible';
	} else {
		id('side').style.visibility = 'hidden';
	}
	if(sl_side == 'D' && items[sl_type][sl_name].D == undefined) {
		sl_side = 'S';
		cl('tp_side_button')[0].click();
	}

	resizeCanvasTry();
}

function resideCanvasTry(btn) {
	if(id('tpdb_on')) { id('tpdb_on').removeAttribute('id'); }
	btn.setAttribute('id', 'tpdb_on');
	sl_side = btn.lang;

	resizeCanvasTry();
}


function resizeCanvasTry(w, h, btn) {
	if(btn != undefined) {
		id('tp_input').value = `${w} x ${h}`;
		if(id('tpsb_on')) { id('tpsb_on').removeAttribute('id'); }
		btn.setAttribute('id', 'tpsb_on');
	}
	resizeCanvas();
}

function resizeCanvas() {
	if(id('tp_input').value.split('x').length != 2) {
		return;
	}

	var gvw = parseFloat(id('tp_input').value.split('x')[0]);
	var gvh = parseFloat(id('tp_input').value.split('x')[1]);

	var mxh = (window.innerHeight - 450) - 80;
	var mxw = mxh;

	console.log(mxw, mxh);

	var nww, nwh;

	// find larger
	if(gvw > gvh) {
		nww = mxw; nwh = parseInt(nww * gvh / gvw);
	} else {
		nwh = mxh; nww = parseInt(nwh * gvw / gvh);
	}

	if(nwh > nww) {
		nwh = mxh; nww = parseInt(nwh * gvw / gvh);
	} else {
		nww = mxw; nwh = parseInt(nww * gvh / gvw);
	}

	if(gvw == gvh) {
		if(mxw  < mxh) { nww = mxw; nwh = mxw; }
		if(mxw  > mxh) { nww = mxh; nwh = mxh; }
		if(mxw == mxh) { nww = mxh; nwh = mxh; }
	}

	id('try_box').style.width  = nww + 'px';
	id('try_box').style.height = nwh + 'px';
	id('tp_text').innerHTML = `${gvw} x ${gvh}`;

	// gride creation
	var gride = '';

	var d = nww / gvw;
	if(gvw > 20 || gvh > 20) { d = d * 2; }
	for(var i = d; i < nww; i += d) {
		gride += `<path stroke-dasharray="5,5" d="M${i} 0 l0 400" />`;
	}

	var d = nwh / gvh
	if(gvw > 20 || gvh > 20) { d = d * 2; }
	for(var i = d; i < nwh; i += d) {
		gride += `<path stroke-dasharray="5,5" d="M0 ${i} l4000 0" />`;
	}

	id('tp_gride').innerHTML = gride;

	var prc = items[sl_type][sl_name][sl_side];
	id('tp_price').innerHTML = `Rs. ${parseInt(gvw * gvh * prc)} /=`;

}



