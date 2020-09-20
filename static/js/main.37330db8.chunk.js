(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{77:function(e,t,a){e.exports=a(90)},82:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(9),o=a.n(c),i=a(49),m=a(11),u=(a(82),a(134)),s=a(135),d=a(136),g=a(128),p=a(16),E=a(45),b=a.n(E),h=(a(83),{apiKey:"AIzaSyARmesD84-IcUHaew4SoQDWQWUCFF6l_3w",authDomain:"react-blog-29329.firebaseapp.com",databaseURL:"https://react-blog-29329.firebaseio.com",projectId:"react-blog-29329",storageBucket:"react-blog-29329.appspot.com",messagingSenderId:"804797815485",appId:"1:804797815485:web:8136f5d447eebaea1375d4"}),v=function(){return n||(b.a.initializeApp(h),n=b.a,b.a)},f=a(117),y=a(120),j=a(122),O=a(123),S=a(124),C=a(125),x=a(126),F=a(69),I=a(127),A=Object(f.a)((function(e){return{card:{},progress:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},grid:{flexGrow:1},pagination:{"& > *":{marginTop:e.spacing(2)}}}})),w=function(){var e=Object(r.useState)(!0),t=Object(p.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(p.a)(c,2),i=o[0],m=o[1],u=A();return a&&!i.length&&v().database().ref("/posts").orderByChild("datePretty").once("value").then((function(e){var t=[],a=e.val();for(var r in a)t.push(a[r]);var l=t.reverse();m(l),n(!1)})),a?l.a.createElement("div",{className:u.progress},l.a.createElement(y.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{container:!0,className:u.grid,spacing:2},i.map((function(e){return l.a.createElement(j.a,{item:!0,xs:12,md:4,lg:4,key:e.slug},l.a.createElement(O.a,{className:u.card},l.a.createElement(S.a,null,l.a.createElement(C.a,{component:"img",alt:e.coverImageAlt,height:"200",image:e.coverImage,title:e.title}),l.a.createElement(x.a,null,l.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),l.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},e.content),l.a.createElement(F.a,{variant:"body2",color:"textPrimary",component:"p"},e.datePretty))),l.a.createElement(I.a,null,l.a.createElement(g.a,{size:"small",color:"primary",href:"/".concat(e.slug)},"Read more"))))}))))},B=a(64),k=a(137),W=Object(f.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white"}}})),D=function(e){var t=e.history,a=W(),n=Object(r.useState)(""),c=Object(p.a)(n,2),o=c[0],i=c[1],m=Object(r.useState)(""),u=Object(p.a)(m,2),s=u[0],d=u[1],E=Object(r.useState)(""),b=Object(p.a)(E,2),h=b[0],f=b[1],y=Object(r.useState)(""),S=Object(p.a)(y,2),C=S[0],I=S[1],A=Object(r.useState)(""),w=Object(p.a)(A,2),D=w[0],N=w[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{container:!0,spacing:2},l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(O.a,null,l.a.createElement(x.a,null,l.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"primary"},"Add a post"),l.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault();var a=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="0".concat(a));var n=e.getDate();return n<10&&(Object(B.a)("day"),n="0".concat(n)),{formatted:"".concat(t,"-").concat(a,"-").concat(n),pretty:e.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}}(),n={title:o,dateFormatted:a.formatted,datePretty:a.pretty,slug:s,coverImage:h,coverImageAlt:C,content:D};v().database().ref().child("posts/".concat(s)).set(n).then((function(){return t.push("/")}))}},l.a.createElement(j.a,{container:!0,spacing:2},l.a.createElement(j.a,{item:!0,xs:12,md:6,lg:6},l.a.createElement(k.a,{autoComplete:"title",name:"title",variant:"outlined",required:!0,fullWidth:!0,id:"title",label:"Title",autoFocus:!0,value:o,onChange:function(e){var t=e.target.value;i(t)}})),l.a.createElement(j.a,{item:!0,xs:12,md:6,lg:6},l.a.createElement(k.a,{autoComplete:"slug",name:"slug",variant:"outlined",required:!0,fullWidth:!0,id:"slug",label:"Slug",autoFocus:!0,value:s,onChange:function(e){var t=e.target.value;d(t)}})),l.a.createElement(j.a,{item:!0,xs:12,md:6,lg:6},l.a.createElement(k.a,{autoComplete:"coverImage",name:"coverImage",variant:"outlined",fullWidth:!0,id:"coverImage",label:"Image URL",autoFocus:!0,placeholder:"https://placekitten.com/g/300/700",onChange:function(e){var t=e.target.value;f(t)}})),l.a.createElement(j.a,{item:!0,xs:12,md:6,lg:6},l.a.createElement(k.a,{autoComplete:"coverImageAlt",name:"coverImageAlt",variant:"outlined",required:!0,fullWidth:!0,id:"coverImageAlt",label:"Image Alt",autoFocus:!0,onChange:function(e){var t=e.target.value;I(t)}})),l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(k.a,{autoComplete:"content",name:"content",variant:"outlined",multiline:!0,rows:4,required:!0,fullWidth:!0,id:"content",label:"Blog Content",autoFocus:!0,onChange:function(e){var t=e.target.value;N(t)}}))),l.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:a.submit},"Save")))))))},N=a(139),q=a(129),z=a(130),R=a(131),T=a(132),P=Object(f.a)((function(e){return{grid:{justifyContent:"center"},progress:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),U=function(e){var t=e.match,a=e.history,n=P(),c=t.params.slug,o=Object(r.useState)(!0),i=Object(p.a)(o,2),u=i[0],s=i[1],d=Object(r.useState)(),E=Object(p.a)(d,2),b=E[0],h=E[1],f=Object(r.useState)(!1),A=Object(p.a)(f,2),w=A[0],B=A[1],W=!b,D=Object(r.useState)(""),U=Object(p.a)(D,2),L=U[0],H=U[1],J=Object(r.useState)(""),Q=Object(p.a)(J,2),Y=Q[0],G=Q[1];if(u&&!b&&v().database().ref().child("/posts/".concat(c)).once("value").then((function(e){e.val()&&h(e.val()),s(!1)})),u)return l.a.createElement("div",{className:n.progress},l.a.createElement(y.a,null));if(W)return l.a.createElement(m.a,{to:"/404"});var K=function(e){var t=document.querySelectorAll("[reveal-on-edit='true']"),a=document.querySelectorAll("[hide-on-edit='true']");for(e=0;e<t.length;e++)t[e].toggleAttribute("hidden");for(e=0;e<t.length;e++)a[e].toggleAttribute("hidden")},M=function(){B(!1)};return l.a.createElement("div",null,l.a.createElement(j.a,{container:!0,className:n.grid},l.a.createElement(j.a,{item:!0,xs:12,md:8},l.a.createElement(O.a,null,l.a.createElement(S.a,null,l.a.createElement(C.a,{component:"img",alt:b.coverImageAlt,height:"300",src:b.coverImage,title:"Contemplative Reptile"}),l.a.createElement(x.a,null,l.a.createElement("div",{"hide-on-edit":"true"},l.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},b.title),l.a.createElement(F.a,{color:"textSecondary",component:"i"},b.datePretty),l.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},b.content)),l.a.createElement("div",{"reveal-on-edit":"true",hidden:!0},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:L,content:Y};v().database().ref().child("posts/".concat(c)).update(t).then((function(){return a.push("/")}))}},l.a.createElement(j.a,{container:!0,spacing:2},l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(k.a,{autoComplete:"title",name:"title",variant:"outlined",required:!0,fullWidth:!0,id:"title",label:"Title",placeholder:b.title,autoFocus:!0,onChange:function(e){var t=e.target.value;H(t)}})),l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(k.a,{autoComplete:"content",name:"content",variant:"outlined",multiline:!0,rows:4,required:!0,fullWidth:!0,id:"content",label:"Blog Content",autoFocus:!0,placeholder:b.content,onChange:function(e){var t=e.target.value;G(t)}})),l.a.createElement("div",{"reveal-on-edit":"true",hidden:!0},l.a.createElement(g.a,{size:"small",color:"primary",onClick:K},"Back"),"\xa0",l.a.createElement(g.a,{size:"small",color:"primary",type:"submit"},"Save")))))),l.a.createElement(I.a,null,l.a.createElement("div",{"hide-on-edit":"true"},l.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){K()}},"Edit"),l.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){B(!0)}},"Delete"))))),l.a.createElement(N.a,{open:w,onClose:M,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(q.a,{id:"alert-dialog-title"},"Delete post"),l.a.createElement(z.a,null,l.a.createElement(R.a,{id:"alert-dialog-description"},"Are you sure you want to delete this post?")),l.a.createElement(T.a,null,l.a.createElement(g.a,{onClick:M,color:"primary"},"No"),l.a.createElement(g.a,{onClick:function(){v().database().ref().child("posts/".concat(c)).remove().then((function(){return a.push("/")}))},color:"primary",autoFocus:!0},"Yes"))))))},L=function(){return l.a.createElement("h1",null,"Error page!")},H=a(65),J=a(133),Q=Object(H.a)({palette:{primary:{main:"#FE6B8B"},secondary:{main:"#FF8E53"}}}),Y=Object(f.a)((function(e){return{button:{color:"#fff"}}}));var G=function(){var e=Y();return l.a.createElement(J.a,{theme:Q},l.a.createElement(u.a,{maxWidth:"md"},l.a.createElement(s.a,{position:"static"},l.a.createElement(d.a,null,l.a.createElement(g.a,{className:e.button,href:"/"},"Home"),l.a.createElement(g.a,{className:e.button,href:"/create"},"Create"))),l.a.createElement("br",null),l.a.createElement(i.a,null,l.a.createElement("main",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:w}),l.a.createElement(m.b,{path:"/create",component:D}),l.a.createElement(m.b,{path:"/404",component:L}),l.a.createElement(m.b,{path:"/:slug",component:U}))))))};o.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.37330db8.chunk.js.map