<!DOCTYPE html>
<html>
<head>
	<title>Digital Printing, Banners &amp; Cutouts | Demini Ads</title>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/png" href="https://1.bp.blogspot.com/-cmk-dO4rbTI/YHcgMNt1ZVI/AAAAAAAAGZE/NjxdBCGYz1IqZBIDSGRCZMJEvH771NBpACLcBGAsYHQ/s0/fav.png">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script type="text/javascript">
		<?php echo file_get_contents('bin/dnjs.enc.js'); ?>
		<?php echo file_get_contents('bin/main.js'); ?>
		<?php echo file_get_contents('bin/try.js'); ?>
	</script>
	<style type="text/css">
		<?php echo file_get_contents('bin/main.css'); ?>
		<?php echo file_get_contents('bin/try.css'); ?>
		<?php echo file_get_contents('bin/mobile.css'); ?>
	</style>
</head>
<body onresize="resizeCanvasTry()">

	<span id="snaps"><?php echo file_get_contents('bin/snaps.json'); ?></span>

	<div class="gallery" onclick="close_gallery()"></div>		
	<div class="glr_box">
			<div class="glr_box_lst"></div><!--
			--><div class="glr_box_img">
				<div class="glr_btn" onclick="close_gallery()">&#61453;</div>
			</div>
	</div>

	<a name="home"></a>
	<div class="ribbon">
		<div class="rbn_buttons">
			<div class="rbn_btn" onclick="url_go(this.lang)" lang="#home">Home</div>
			<div class="rbn_btn" onclick="url_go(this.lang)" lang="#products">Products</div>
			<div class="rbn_btn" onclick="open_gallery()"><span class="rbn_btn_tag">Gallery</span></div>
			<div class="rbn_btn" onclick="url_go(this.lang)" lang="#contact">Contact Us</div>
		</div>
		<!--div class="rbn_logo_s"></div-->
	</div>

	<div class="cover">
		<div class="cvr_caption">
			<div class="cvr_cap_1">WE SATISFY YOUR</div>
			<div class="cvr_cap_2">Digital Dream !</div>
			<div class="cvr_cap_3">
				Over 27 years, we have provided the best digital advertising service for your bussineses and all other
				requirements. Contact us for more further details on our products, or any other inquries.
				We will design your banners, cutouts, advertising boards and print them in best quality.
			</div>
			<div class="rbn_logo"></div>
			<div class="rbn_logo_2"></div>
			<div class="cvr_cap_4">
				<span class="svr_cap_label">Banners</span> |
				<span class="svr_cap_label">Cutouts</span> |
				<span class="svr_cap_label">Frame Boards</span> |
				<span class="svr_cap_label">Stickers</span>
			</div>
			<div class="cvr_buttons">
				<div class="cvr_btn_1" onclick="url_go(this.lang)" lang="#products">View Products</div>
				<div class="cvr_btn_2" onclick="url_go(this.lang)" lang="#contact">Contact Us</div>
			</div>
		</div>
	</div>

	<div class="counter">
		<div class="cnt_box">
			<div class="cnt_box_count">0</div>
			<div class="cnt_box_title">Completed Projects</div>
		</div>
		<div class="cnt_box">
			<div class="cnt_box_count">0</div>
			<div class="cnt_box_title">Projects in Every Month</div>
		</div>
		<div class="cnt_box">
			<div class="cnt_box_count">0</div>
			<div class="cnt_box_title">Years of Experience</div>
		</div>
	</div>
	<a name="products"></a>

	<span id="items"><?php echo file_get_contents('bin/items.json'); ?></span>
	<div class="products">
		<div class="pro_title">Our Products &amp; Prices (per sqft.)</div>
		<div class="pro_box">
			<div class="pro_list">
				<div class="pro_lst_box"></div>
				<div class="pro_itm_box"></div>
			</div><!--
		 --><div class="pro_try">
				<div id="try_title"></div>
				<table id="try_sheet" cellpadding="0" cellspacing="0" border="0">
					<tr><td align="center">
						<svg id="try_box">
							<g fill="none" stroke="#666" stroke-width="0.6" id="tp_gride">
								<path stroke-dasharray="5,5" d="M100 0 l0 400"></path>
								<path stroke-dasharray="5,5" d="M200 0 l0 400"></path>
								<path stroke-dasharray="5,5" d="M0 120 l4000 0"></path>
							</g>
							<text
								x="50%"
								y="50%"
								fill="#666"
								dominant-baseline="middle"
								text-anchor="middle"
								id="tp_text">
								3 x 2
							</text> 
						</svg>
					</td></tr>
				</table>
				<div id="try_setup">
					<center>
						<div class="tp_size_button" id="tpsb_on" onclick="resizeCanvasTry(3, 2, this)">3' x 2'</div>
						<div class="tp_size_button" onclick="resizeCanvasTry(4, 3, this)">4' x 3'</div>
						<div class="tp_size_button" onclick="resizeCanvasTry(4, 6, this)">4' x 6'</div>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input class="tp_input" oninput="resizeCanvasTry()" value="3 x 2" maxlength="10">
						<br>
						<span id="side">
							<div class="tp_side_button" id="tpdb_on"
							onclick="resideCanvasTry(this)" lang="S">Single Side</div>
							<div class="tp_side_button"
							onclick="resideCanvasTry(this)" lang="D">Double Side</div>
						</span>
					</center>
					<div id="tp_price">Rs. 360 /=</div>
				</div>
			</div>
		</div>
	</div>

	<div class="quality">
		<center>
			<div class="qty_box">
				<div class="qty_box_img qbi_1"></div>
				<div class="qty_box_txt">Well-trained graphic designers to make your service amazing</div>
			</div>
			<div class="qty_box">
				<div class="qty_box_img qbi_2"></div>
				<div class="qty_box_txt">Heigh quality materials and print with CMYK colour printers</div>
			</div>
			<div class="qty_box">
				<div class="qty_box_img qbi_3"></div>
				<div class="qty_box_txt">Provide the best and ASAP service to all of our customers</div>
			</div>
		</center>
	</div>

	<div class="contact">

		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.8387786952583!2d79.83522365789635!3d7.50080465790686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cf517189a389%3A0x24c4b4374fb2e342!2sDemini+Ads!5e0!3m2!1sen!2slk!4v1464584181720"></iframe>

		<div class="con_box">
			<div class="con_box_title">Contact Us</div>
			<div class="con_box_list">
				<div class="con_box_text">Address : Galahitiyawa, Madampe 61230</div>
				<div class="con_box_item cbi_1" onclick="url_go(this.lang)" lang="tel:+94777561697">
					<span class="cbi_i">&#61589;</span>+94 777 561 697
				</div>
				<div class="con_box_item cbi_2" onclick="url_op(this.lang)" lang="https://wa.me/+94777561697">
					<span class="cbi_i">&#62002;</span>+94 777 561 697
				</div>
				<div class="con_box_item cbi_3" onclick="url_op(this.lang)" lang="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=deminiads@gmail.com">
					<span class="cbi_i">&#61856;</span>deminiads@gmail.com
				</div>
				<div class="con_box_item cbi_4" onclick="url_op(this.lang)" lang="https://fb.com/deminiads">
					<span class="cbi_i">&#61594;</span>fb.com/deminiads
				</div>
			</div>
		</div>

	</div>

	<a name="contact"></a>

</body>