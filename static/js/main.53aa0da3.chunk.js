(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(28)},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(4),r=t.n(c),m=t(6),s=t(2),i=t(15),o=function(e){return function(a){return function(t){if("PROMISE"!==t.type)return a(t);var l=Object(i.a)(t.actions,3),n=l[0],c=l[1],r=l[2];e.dispatch({type:n,payload:t.payload}),t.promise.then(function(){e.dispatch({type:c,payload:t.payload})},function(a){e.dispatch({type:r,payload:t.payload})})}}};var E=Object(s.a)(o)(s.c)(function(e,a){switch(a.type){case"CHANGING_TO_CLOSE":console.log("CHANGING_TO_CLOSE"),e.opened;var t=e.started_animation,l=e.name,n=e.email,c=e.comment,r=a.payload,s=r.arrow,i=r.forma,o=r.my_button,E=r.close_form,d=r.commentField,g=r.emailField,u=r.nameField;return s.style.display="none",t=null,window.requestAnimationFrame(function e(a){t||(t=a);var l=a-t;console.log(R),i.style.height=Math.max(170,370-l/2)+"px",o.style.top=Math.max(115,315-l/2)+"px",E.style.width=Math.max(0,30-l/15)+"px",E.style.height=E.style.width,console.log(i.style.height),l>0&&(d.style.height=Math.max(0,110-l/2)+"px"),l/2>110&&(d.style.display="none"),l>300&&(g.style.display="none"),l/2+170>370&&(u.style.display="none"),l<1e3&&window.requestAnimationFrame(e)}),window.history.pushState(0,"title"," "),Object(m.a)({},e,{},{opened:!1,started_animation:t,name:l,email:n,comment:c});case"CHANGING_FIELDS":var p=e.name,f=e.email,v=e.comment;return p=a.name,f=a.email,v=a.comment,localStorage.setItem("name",a.name),localStorage.setItem("email",a.email),localStorage.setItem("comment",a.comment),Object(m.a)({},e,{},{name:p,email:f,comment:v});case"OPENING_OR_CLOSING":console.log("OPENING_OR_CLOSING");var h=e.opened,y=e.started_animation,_=e.name,b=e.email,S=e.comment;return h?h=!1:(y=null,window.requestAnimationFrame(function e(t){var l=a.payload,n=l.forma,c=l.my_button,r=l.close_form,m=l.nameField,s=l.emailField,i=l.commentField,o=l.arrow;y||(y=t);var E=t-y;n.style.height=Math.min(170+E/2,370)+"px",c.style.top=Math.min(115+E/2,315)+"px",r.style.width=Math.min(E/15,30)+"px",r.style.height=r.style.width,E>0&&(m.style.display="block"),E>80&&(s.style.display="block"),E>160&&(i.style.display="block",i.style.height=Math.min(E/2-80,110)+"px"),E/2-80>110&&(o.style.display="block"),E<1e3&&window.requestAnimationFrame(e)}),h=!0,window.history.pushState(1,"title","#form_link"),_=localStorage.getItem("name")||"",b=localStorage.getItem("email")||"",S=localStorage.getItem("comment")||""),Object(m.a)({},e,{},{opened:h,started_animation:y,name:_,email:b,comment:S});case"SUCCESS":console.log("SUCCESS");var I=a.payload,T=I.non_act,O=I.cat,N=I.dog,w=I.nameField,A=(I.emailField,I.commentField);return localStorage.clear(),w.value="",w.value="",A.value=localStorage.getItem(""),O.style.display="none",T.style.display="none",N.style.display="block",window.requestAnimationFrame(function e(a){R||(R=a);var t=a-R;t>1100&&(N.style.display="none"),t<1200&&window.requestAnimationFrame(e)}),e;case"FAILURE":console.log("FAILURE");var R,k=a.payload,F=k.non_act,C=k.cat,x=k.dog;return k.nameField,k.emailField,k.commentField,alert("Test error!"),C.style.display="none",F.style.display="none",x.style.display="block",window.requestAnimationFrame(function e(a){R||(R=a);var t=a-R;t>1100&&(x.style.display="none"),t<1200&&window.requestAnimationFrame(e)}),e;case"SENDING":console.log("SENDING");var B=a.payload,V=B.non_act,j=B.cat;return B.dog,B.nameField,B.emailField,B.commentField,V.style.display="block",j.style.display="block",e;default:return e}},{opened:!1,started_animation:!1,name:localStorage.getItem("name")||"",email:localStorage.getItem("email")||"",comment:localStorage.getItem("comment")||""});function d(e){return n.a.createElement("header",{className:"container-fluid my_head"},n.a.createElement("div",{className:"cont1 d-flex flex-row justify-content-between m-auto"},n.a.createElement("img",{className:"imglogo",src:"img/logo.png",alt:"\xd0\xbb\xd0\xbe\xd0\xb3\xd0\xbe\xd1\x82\xd0\xb8\xd0\xbf"}),n.a.createElement("div",{className:"first-menu"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"topmenu butt"},n.a.createElement("li",null,n.a.createElement("a",{href:"",className:"submenu-link",id:"catalog"},"catalog"),n.a.createElement("ul",{className:"submenu"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Bathroom TVs")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Shower TVs")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Cabinet Door TV")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Splashback TV")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Mirror Televisions")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Open Frame TVs"))))))),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"headbl1"},n.a.createElement("a",{href:"#"},"Where to buy"),n.a.createElement("a",{href:"#"},"Became a reseller"),n.a.createElement("a",{href:"#"},"Contacts")),n.a.createElement("div",{className:"headbl1"},n.a.createElement("a",{href:"#"},"Shipping information"),n.a.createElement("a",{href:"#"},"News"),n.a.createElement("a",{href:"#"},"Blog"))),n.a.createElement("div",{className:"headbl2"},n.a.createElement("img",{className:"geolo",src:"img/geo.jpg",alt:"\xd0\xb3\xd0\xb5\xd0\xbe"}),n.a.createElement("a",{href:"#"},"Russia")),n.a.createElement("div",{className:"headbl3"},n.a.createElement("img",{src:"img/freeshipping.jpg",alt:"free"}),n.a.createElement("img",{src:"img/user.png",alt:"user"}),n.a.createElement("img",{src:"img/libra.png",alt:"libra"})),n.a.createElement("button",{type:"button",className:"butt2"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("div",{className:"menu-top"},n.a.createElement("div",{className:"backblack"}),n.a.createElement("div",{className:"second_menu"},n.a.createElement("button",{type:"button",className:"bcanc"},n.a.createElement("i",{className:"material-icons"},"clear")),n.a.createElement("div",{className:"img_logo"},n.a.createElement("img",{src:"img/logo-2.png",alt:"logo"})),n.a.createElement("div",{className:"headbl23"},n.a.createElement("img",{className:"geolo",src:"img/geo.jpg",alt:"\xd0\xb3\xd0\xb5\xd0\xbe"}),n.a.createElement("a",{href:"#"},"Russia")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Become a Reseller")),n.a.createElement("li",{className:"podul"},n.a.createElement("a",{href:"#"},"Catalog"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Bathroom TVs")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Shower TVs")),n.a.createElement("li",{className:"podul"},n.a.createElement("p",null,"Kitchen"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Cabinet Door TV")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Splashback TV")))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Mirror Televisions")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Open Frame TVs")))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Contacts")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"News")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Where to buy")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Bathroom TVs")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Log in")))))))}var g=t(12),u=t(13),p=t(16),f=t(14),v=t(17),h=function(e){function a(){return Object(g.a)(this,a),Object(p.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(u.a)(a,[{key:"onInput",value:function(){this.props.changeFields({name:document.getElementById("name").value,email:document.getElementById("email").value,comment:document.getElementById("comment").value})}},{key:"onSubmit",value:function(e){(function(){return""==this.props.name?(alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f"),!1):""==this.props.email?(alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 email"),!1):""!=this.props.comment||(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439("),!1)}).bind(this)()&&this.props.sendFormaAction({non_act:document.getElementById("non_act"),cat:document.getElementById("cat"),dog:document.getElementById("dog"),nameField:document.getElementById("name"),emailField:document.getElementById("email"),commentField:document.getElementById("comment")})}},{key:"onClick",value:function(){this.props.toggleFormaAction({forma:document.getElementById("form_link"),my_button:document.getElementById("my_button"),close_form:document.getElementById("close_form"),nameField:document.getElementById("name"),emailField:document.getElementById("email"),commentField:document.getElementById("comment"),arrow:document.getElementById("arrow")})}},{key:"onCloseClick",value:function(){this.props.changeToCloseAction({arrow:document.getElementById("arrow"),forma:document.getElementById("form_link"),my_button:document.getElementById("my_button"),close_form:document.getElementById("close_form"),commentField:document.getElementById("comment"),emailField:document.getElementById("email"),nameField:document.getElementById("name")})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"main"},n.a.createElement("div",{class:"content1"},n.a.createElement("img",{class:"tvwoman",src:"img/testing.jpg",alt:"tv"}),n.a.createElement("img",{class:"tvwomansm",src:"img/index-sm.jpg",alt:"tv"}),n.a.createElement("div",{class:"mymenu"},n.a.createElement("div",{class:"shapka"},n.a.createElement("p",{class:"myp1"},"THE MOST EXCLUSIVE YET"),n.a.createElement("p",{class:"myp2"},"AFFORDABLE TVs"),n.a.createElement("p",{class:"myp3"},"IN THE WORLD")),n.a.createElement("div",{class:"mymenu21"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("img",{src:"img/tv_bathroom_icon.jpg",alt:"bath"}),n.a.createElement("div",{class:"mymenu2"},n.a.createElement("p",{class:"pmen"},"BATHROOM"),n.a.createElement("p",null,"TELEVISIONS"))),n.a.createElement("li",null,n.a.createElement("img",{src:"img/tv_mirror_icon.jpg",alt:"bath"}),n.a.createElement("div",{class:"mymenu2"},n.a.createElement("p",{class:"pmen"},"MIRROR"),n.a.createElement("p",null,"TELEVISIONS"))),n.a.createElement("li",null,n.a.createElement("img",{src:"img/tv_kitchen_icon.jpg",alt:"bath"}),n.a.createElement("div",{class:"mymenu2"},n.a.createElement("p",{class:"pmen"},"KITCHEN"),n.a.createElement("p",null,"TELEVISIONS"))),n.a.createElement("li",null,n.a.createElement("img",{src:"img/tv_open_frame_icon.jpg",alt:"bath"}),n.a.createElement("div",{class:"mymenu2"},n.a.createElement("p",{class:"pmen"},"OPEN FRAME"),n.a.createElement("p",null,"TELEVISIONS"))))))),n.a.createElement("div",{class:"content2"},n.a.createElement("div",{class:"waterproof"},n.a.createElement("p",{class:"contp1"},"WATERPROOF"),n.a.createElement("p",{class:"contp2"},"BATHROOM TVS"),n.a.createElement("p",{class:"contp3"},"INTEGRATED VIBRATION SPEAKERS")),n.a.createElement("div",{class:"cards1"},n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/1.gif",alt:"1",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF",n.a.createElement("br",null),"TV")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/2.gif",alt:"2",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF REMOTE CONTROL")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/3.gif",alt:"3",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"VIBRATION SPEAKERS")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/4.gif",alt:"4",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"SMART TV (OPTION)")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/5.gif",alt:"5",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"EASY TO WASH")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/6.gif",alt:"6",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"FULL HD IPS LED")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/7.gif",alt:"7",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"DIGITAL TV SYSTEM")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/8.gif",alt:"8",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"2 YEARS WARRANTY")))),n.a.createElement("div",{class:"myslick"},n.a.createElement("div",{class:"slick__title"},n.a.createElement("p",{class:"slp1"},"Photo/video"),n.a.createElement("p",null,"of bathroom tvs")),n.a.createElement("div",{class:"myslick-slider"},n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/avs270fs1_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/avs320fs-1_1.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/20170927_065323_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/unnamed_1_0_2.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/t0qXdwAF5BA.jpg",alt:"sl"}))),n.a.createElement("button",{class:"slbutt"},n.a.createElement("span",null,"FIND OUT MORE"))),n.a.createElement("div",{class:"content2"},n.a.createElement("div",{class:"waterproof"},n.a.createElement("p",{class:"contp1"},"MIRROR"),n.a.createElement("p",{class:"contp2"},"TELEVISIONS"),n.a.createElement("p",{class:"contp3"},"INTEGRATED VIBRATION SPEAKERS")),n.a.createElement("div",{class:"cards1"},n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/1.gif",alt:"1",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF",n.a.createElement("br",null),"TV")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/2.gif",alt:"2",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF REMOTE CONTROL")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/3.gif",alt:"3",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"VIBRATION SPEAKERS")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/4.gif",alt:"4",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"SMART TV (OPTION)")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/5.gif",alt:"5",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"EASY TO WASH")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/6.gif",alt:"6",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"FULL HD IPS LED")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/7.gif",alt:"7",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"DIGITAL TV SYSTEM")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/8.gif",alt:"8",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"2 YEARS WARRANTY")))),n.a.createElement("div",{class:"myslick"},n.a.createElement("div",{class:"slick__title"},n.a.createElement("p",{class:"slp1"},"Photo/video"),n.a.createElement("p",null,"of mirror tvs")),n.a.createElement("div",{class:"myslick-slider"},n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/_dsc8629_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/_dsc8670_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/_dsc8710-1_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/avs470fs-install3_0.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/avs470fs-install7_0.jpg",alt:"sl"}))),n.a.createElement("button",{class:"slbutt"},n.a.createElement("span",null,"FIND OUT MORE"))),n.a.createElement("div",{class:"content2"},n.a.createElement("div",{class:"waterproof"},n.a.createElement("p",{class:"contp1"},"WATERPROOF"),n.a.createElement("p",{class:"contp2"},"KITCHEN TVS"),n.a.createElement("p",{class:"contp3"},"INTEGRATED VIBRATION SPEAKERS")),n.a.createElement("div",{class:"cards1"},n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/1.gif",alt:"1",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF",n.a.createElement("br",null),"TV")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/2.gif",alt:"2",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"WATERPROOF REMOTE CONTROL")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/3.gif",alt:"3",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"VIBRATION SPEAKERS")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/4.gif",alt:"4",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"SMART TV (OPTION)")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/5.gif",alt:"5",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"EASY TO WASH")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/6.gif",alt:"6",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"FULL HD IPS LED")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/7.gif",alt:"7",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"DIGITAL TV SYSTEM")),n.a.createElement("div",{class:"card1"},n.a.createElement("img",{src:"img/8.gif",alt:"8",class:"cards1_img"}),n.a.createElement("p",{class:"card1_text"},"2 YEARS WARRANTY")))),n.a.createElement("div",{class:"myslick"},n.a.createElement("div",{class:"slick__title"},n.a.createElement("p",{class:"slp1"},"Photo/video"),n.a.createElement("p",null,"of kitchen tvs")),n.a.createElement("div",{class:"myslick-slider"},n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/1photo149743_1.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/img_0483_1.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/img_3420_1.jpeg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/img_5791_1.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/cCOYjfGZuSo.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"slick_img",src:"img/F7NR1q3HnV0.jpg",alt:"sl"}))),n.a.createElement("button",{class:"slbutt"},n.a.createElement("span",null,"FIND OUT MORE"))),n.a.createElement("div",{class:"content31"},n.a.createElement("div",{class:"content3"},n.a.createElement("h1",{class:"title"},"AVIS Electronics Indoor Waterproof TVs"),n.a.createElement("div",{class:"descr"},n.a.createElement("p",null,n.a.createElement("strong",null,"AVEL")," (AVIS Electronics) is a professional manufacturer of special application TVs (Mirror TVs, Waterproof TVs for Bathroom, Cabinet Door TVs for Kitchen). Assembling line is in China (ShenZhen), head office is in Moscow (Russia). With our experience since 2008 we\xe2\x80\x99ve being improving and developing our products with just one aspiration and passion \xe2\x80\x93 make the best product in the world for the certain application.",n.a.createElement("br",null),n.a.createElement("br",null),"Our company is honest and open. Unlike many others we don\xe2\x80\x99t say we do some magic behind closed doors. Welcome You to see test procedures, product reviews and other videos on our ",n.a.createElement("a",{href:"#"},"Official YouTube Channel"),".",n.a.createElement("br",null),n.a.createElement("br",null),"AVEL products are being distributed by our own sales offices, with help of our Partners and Distributors and by online shops almost worldwide: in France, Germany, Italy, the UK (United Kingdom), and all over EU; Russia, Ukraine and Belarus; Dubai (UAE) and in the US (United States).",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("strong",null,"Looking for a perfect and special TV?"),n.a.createElement("br",null),"You are at the right place, enjoy the premium services from AVEL:",n.a.createElement("br",null),"- Free worldwide delivery by expedited courier (5-10 days)",n.a.createElement("br",null),"- 2 Year unlimited warranty",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("strong",null,"Want to join AVEL distributor\xe2\x80\x99s program?"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Send Your query")," and develop or start your business with us!"),n.a.createElement("br",null)),n.a.createElement("div",{class:"subcontent"},n.a.createElement("div",{class:"kart"},n.a.createElement("iframe",{allow:"autoplay; encrypted-media",allowfullscreen:"",src:"https://www.youtube.com/embed/5QPvyrcou80?enablejsapi=1"})),n.a.createElement("div",{class:"minisub"},n.a.createElement("div",{class:"img3"},n.a.createElement("div",null,n.a.createElement("img",{src:"img/factory-3.jpg",alt:"f"})),n.a.createElement("div",{class:"img2"},n.a.createElement("img",{src:"img/factory-4.jpg",alt:"f"}),n.a.createElement("div",{class:"texton"},n.a.createElement("p",{class:"titleh"},"B2B and B2C orders"),n.a.createElement("p",{class:"desc"},"We support B2B clients with special price-list distribution policy")))),n.a.createElement("div",{class:"link"},n.a.createElement("a",{href:"#"},"Distributor ",n.a.createElement("br",null)," wanted")))),n.a.createElement("div",{class:"certif"},n.a.createElement("div",{class:"certif_title"},n.a.createElement("img",{src:"img/icon-certificate.png",alt:"sert"}),n.a.createElement("div",null,n.a.createElement("p",null,"OUR"),n.a.createElement("p",{class:"cert_text"},"CERTIFICATES"))),n.a.createElement("div",{class:"new_slider"},n.a.createElement("div",{class:"cert-slider"},n.a.createElement("div",null,n.a.createElement("img",{class:"cert_img",src:"img/emc.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"cert_img",src:"img/lvd.jpg",alt:"sl"})),n.a.createElement("div",null,n.a.createElement("img",{class:"cert_img",src:"img/rohs_0.jpg",alt:"sl"}))))))),n.a.createElement("div",{class:"mymap"},n.a.createElement("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3Acea26ff4039d404d1c5efffe6a0d4ec50fbc14e87bd5c37ecd3e7179e50fcbe8&source=constructor"}),n.a.createElement("div",{class:"forma container",id:"form_link",onInput:function(){e.onInput()}},n.a.createElement("div",{class:"form_content"},n.a.createElement("div",{class:"contacts1"},n.a.createElement("div",{class:"title"},"AVIS ELECTRONICS"),n.a.createElement("div",null,"+86 (186) 66660854"),n.a.createElement("div",{class:"email"},n.a.createElement("p",{class:"label"},"E-Mail: "),n.a.createElement("a",{href:"#"},"sales@aviselectronics.com")),n.a.createElement("div",null,"Mon-Fri: 09:00 - 18:00, ",n.a.createElement("br",null)," Sat: 09:00 - 12:00 (UTC +08:00)")),n.a.createElement("form",{class:"ajaxForm",onSubmit:function(a){a.preventDefault(),e.onSubmit(a)},action:"https://formcarry.com/s/_vJeY8SSO_v",method:"POST","accept-charset":"UTF-8"},n.a.createElement("div",{id:"fields"},n.a.createElement("input",{class:"name1",id:"name",name:"name",placeholder:"Name",type:"text",size:"60",style:{display:"none"},value:this.props.name}),n.a.createElement("input",{class:"name1",id:"email",name:"email",placeholder:"E-mail",type:"text",size:"60",style:{display:"none"},value:this.props.email}),n.a.createElement("textarea",{placeholder:"Comment",name:"comment",rows:"5",cols:"60",class:"name2",id:"comment",style:{display:"none"},value:this.props.comment})),n.a.createElement("div",{id:"my_button",style:{position:"absolute",top:"115px"}},n.a.createElement("button",{class:"btn butt3",onClick:function(){e.onClick()},type:this.props.opened?"button":"submit",value:"Send",id:"button_type"},n.a.createElement("span",{id:"button_text"},this.props.opened?"Send":"Add Contacts")),n.a.createElement("button",{class:"btn butt3",onClick:function(){e.onClick()},type:"button",value:"Send",style:{position:"absolute",bottom:"0px",backgroundColor:"indianred",display:"none"},id:"non_act",disabled:!0},n.a.createElement("span",null,"Send"))),n.a.createElement("div",null,n.a.createElement("img",{src:"img/cat.gif",alt:"",style:{position:"absolute",width:"150px",bottom:"80px",left:"40px",display:"none"},id:"cat"})))),n.a.createElement("div",{class:"close_form",onClick:function(){e.onCloseClick()},id:"close_form"},n.a.createElement("i",{class:"fas fa-arrow-up fa-lg",style:{color:"white",display:"none",position:"absolute",margin:"7px 5px"},id:"arrow"}))),n.a.createElement("div",{class:"forma container",id:"dog",style:{display:"none"}},n.a.createElement("img",{src:"img/dog.gif",alt:"",class:"rounded dog"}))))}}]),a}(n.a.Component);function y(e){return n.a.createElement("footer",{class:"foot"},n.a.createElement("div",{class:"container myfoot"},n.a.createElement("div",{class:"foot1"},n.a.createElement("div",{class:"elem1"},n.a.createElement("img",{src:"img/logo-2.png",alt:"foot"}),n.a.createElement("div",null,n.a.createElement("a",{href:"#"},"News")," | ",n.a.createElement("a",{href:"#"},"Where to buy")," | ",n.a.createElement("a",{href:"#"},"Contacts"))),n.a.createElement("div",{class:"elem2"},n.a.createElement("a",{href:"#"},"BATHROOM ",n.a.createElement("br",null)," TELEVISIONS"),n.a.createElement("a",{href:"#"},"MIRROR ",n.a.createElement("br",null)," TELEVISIONS"),n.a.createElement("a",{href:"#"},"KITCHEN ",n.a.createElement("br",null)," TELEVISIONS"),n.a.createElement("a",{href:"#"},"SHOWER ",n.a.createElement("br",null)," TELEVISIONS"),n.a.createElement("a",{href:"#"},"OPEN FRAME ",n.a.createElement("br",null)," TELEVISIONS"))),n.a.createElement("div",{class:"foot2"},n.a.createElement("div",{class:"part1"},n.a.createElement("div",{class:"elem3"},n.a.createElement("p",null,"QUICK LINKS"),n.a.createElement("a",{href:"#"},"About Us"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Trade Mark"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Certificates"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Become a Reseller")),n.a.createElement("div",{class:"elem4"},n.a.createElement("p",null,"SUPPORT LINKS"),n.a.createElement("a",{href:"#"},"Downloads"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Warranty Terms"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Service Centers"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Shipping Information"),n.a.createElement("br",null),n.a.createElement("a",{href:"#"},"Articles & Reviews"))),n.a.createElement("div",{class:"part2"},n.a.createElement("div",{class:"elem5"},n.a.createElement("p",null,"Purchase now from: "),n.a.createElement("img",{src:"img/amazon-logo-vector-512.png",alt:"amazon"})),n.a.createElement("div",{class:"elem5"},n.a.createElement("p",null,"We are on B2B platforms: "),n.a.createElement("img",{src:"img/gslogo.png",alt:"amazon"}),n.a.createElement("img",{src:"img/made-in-china_0.png",alt:"ffg"}),n.a.createElement("img",{src:"img/banner_logo.jpg",alt:"sdsd"})))),n.a.createElement("div",{class:"foot3"},n.a.createElement("div",{class:"part3"},n.a.createElement("div",null,n.a.createElement("p",null,"+86 (755) 27634663"),n.a.createElement("p",null,"+86 (186) 66660854"),n.a.createElement("p",{class:"email"},n.a.createElement("a",{href:"#"},"sales@aviselectronics.com"))),n.a.createElement("div",null,n.a.createElement("p",null,"Mon-Fri: 09:00 - 18:00, ",n.a.createElement("br",null)," Sat: 09:00 - 12:00 (UTC +08:00)"))),n.a.createElement("div",{class:"part4"},n.a.createElement("p",null,"506-507A, HuiGu ChuangXin Technology park, JingBei road, Shiyan town, Baoan district, Shenzhen, Guangdong, China, 518108")),n.a.createElement("div",{class:"part5"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",rel:"nofollow",target:"_blank"},n.a.createElement("img",{src:"img/facebook.png",alt:"facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",rel:"nofollow",target:"_blank"},n.a.createElement("img",{src:"img/instagram.png",alt:"dd"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",rel:"nofollow",target:"_blank"},n.a.createElement("img",{src:"img/youtube.png",alt:"you"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",rel:"nofollow",target:"_blank"},n.a.createElement("img",{src:"img/twiter.png",alt:"twit"}))))))),n.a.createElement("div",{class:"ending"},"Powered by ",n.a.createElement("a",{href:"#"},"N1commerce")))}var _=t(5);function b(e){return{type:"CHANGING_TO_CLOSE",payload:e}}function S(e){return{type:"CHANGING_FIELDS",name:e.name,email:e.email,comment:e.comment}}function I(e){return{type:"OPENING_OR_CLOSING",payload:e}}function T(e){return{type:"PROMISE",actions:["SENDING","SUCCESS","FAILURE"],payload:e,promise:fetch("https://formcarry.com/s/79D4V9NBj_0",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:localStorage.getItem("name"),email:localStorage.getItem("email"),comment:localStorage.getItem("comment")})})}}var O=Object(_.b)(function(e){return e},function(e){return Object(s.b)({changeToCloseAction:b,toggleFormaAction:I,sendFormaAction:T,changeFields:S},e)})(function(e){return n.a.createElement("div",{class:"app"},n.a.createElement(d,null),n.a.createElement(h,e),n.a.createElement(y,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(_.a,{store:E},n.a.createElement(O,null)),document.getElementById("root")),E.subscribe(function(){console.log("New state:",E.getState())}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.53aa0da3.chunk.js.map