(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3Z9Z":function(e,a,t){"use strict";var c=t("wx14"),s=t("zLVn"),l=t("TSYQ"),n=t.n(l),o=t("q1tI"),r=t.n(o),m=t("vUet"),i=["xl","lg","md","sm","xs"],d=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.noGutters,d=e.as,E=void 0===d?"div":d,b=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(m.a)(t,"row"),p=u+"-cols",N=[];return i.forEach((function(e){var a,t=b[e];delete b[e];var c="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&N.push(""+p+c+"-"+a)})),r.a.createElement(E,Object(c.a)({ref:a},b,{className:n.a.apply(void 0,[l,u,o&&"no-gutters"].concat(N))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},GPKm:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var c=t("q1tI"),s=t.n(c),l=t("GOVm"),n=function(e){var a=e.children,t=e.headerDark,n=void 0!==t&&t,o=e.footerDark,r=void 0!==o&&o,m=Object(c.useContext)(l.b);return Object(c.useEffect)((function(){n?m.goHeaderDark():m.goHeaderLight(),r?m.goFooterDark():m.goFooterLight()}),[m,n,r]),s.a.createElement(s.a.Fragment,null,a)}},JI6e:function(e,a,t){"use strict";var c=t("wx14"),s=t("zLVn"),l=t("TSYQ"),n=t.n(l),o=t("q1tI"),r=t.n(o),m=t("vUet"),i=["xl","lg","md","sm","xs"],d=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.as,d=void 0===o?"div":o,E=Object(s.a)(e,["bsPrefix","className","as"]),b=Object(m.a)(t,"col"),u=[],p=[];return i.forEach((function(e){var a,t,c,s=E[e];if(delete E[e],"object"==typeof s&&null!=s){var l=s.span;a=void 0===l||l,t=s.offset,c=s.order}else a=s;var n="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+b+n:""+b+n+"-"+a),null!=c&&p.push("order"+n+"-"+c),null!=t&&p.push("offset"+n+"-"+t)})),u.length||u.push(b),r.a.createElement(d,Object(c.a)({},E,{ref:a,className:n.a.apply(void 0,[l].concat(u,p))}))}));d.displayName="Col",a.a=d},XqUo:function(e,a,t){"use strict";t.r(a);var c=t("q1tI"),s=t.n(c),l=t("7vrA"),n=t("3Z9Z"),o=t("JI6e"),r=t("GPKm"),m=t("Xjy0"),i=t("vOnD"),d=i.c.table.withConfig({displayName:"PricingTable2__Table",componentId:"sc-1s8i5iz-0"})(['thead,tr,tbody{display:block;}thead tr .sin-title-box{padding:0 20px;height:60px;color:#19191b;font-size:18px;font-weight:700;letter-spacing:-0.56px;}.title-col{min-width:290px;}.basic-col,.standard-col,.premium-col,.ent-col{min-width:195px;}.colored-row{background:#f7f7fb;border-top:2px solid #fff;&:first-child{border-top:0;}.sin-box.title-col{color:#19191b;font-weight:700;}.sin-box{position:relative;padding:0 20px;height:65px;color:#696871;font-size:18px;font-weight:300;letter-spacing:-0.56px;.table-icon{font-size:20px;&.neg{color:#f04037;}&.pos{color:#67d216;}}&:before{content:"";background:#fff;height:100%;top:0;left:0;position:absolute;width:1px;}}}']),E=Object(i.c)(m.d).withConfig({displayName:"PricingTable2__ButtonSm",componentId:"sc-1s8i5iz-1"})(["width:167px;min-width:auto;height:50px;border-radius:5px;border:1px solid #eae9f2;background-color:#ffffff;color:",";font-size:18px;font-weight:500;letter-spacing:-0.56px;display:inline-flex;align-items:center;justify-content:center;padding:0.375rem 0.75rem;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;&:hover,&:focus{border:"," !important;background-color:"," !important;color:#fff;}"],(function(e){return e.theme.colors.secondary}),(function(e){return"1px solid "+e.theme.colors.secondary}),(function(e){return""+e.theme.colors.secondary})),b=Object(i.c)("div").withConfig({displayName:"PricingTable2___StyledDiv",componentId:"sc-1s8i5iz-2"})(["overflow:auto;padding-bottom:30px;"]),u=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.j,{className:"pt-0"},s.a.createElement(l.a,null,s.a.createElement(b,null,s.a.createElement(d,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col",className:"title-col sin-title-box"}),s.a.createElement("th",{scope:"col",className:"basic-col sin-title-box"},"Basic"),s.a.createElement("th",{scope:"col",className:"standard-col sin-title-box"},"Standard"),s.a.createElement("th",{scope:"col",className:"premium-col sin-title-box"},"Premium"),s.a.createElement("th",{scope:"col",className:"ent-col sin-title-box"},"Enterprise"))),s.a.createElement("tbody",null,s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Websites"),s.a.createElement("td",{className:"basic-col sin-box"},"01"),s.a.createElement("td",{className:"standard-col sin-box"},"03"),s.a.createElement("td",{className:"premium-col sin-box"},"10"),s.a.createElement("td",{className:"ent-col sin-box"},"Unlimited")),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Storages"),s.a.createElement("td",{className:"basic-col sin-box"},"5GB"),s.a.createElement("td",{className:"standard-col sin-box"},"10GB"),s.a.createElement("td",{className:"premium-col sin-box"},"50GB"),s.a.createElement("td",{className:"ent-col sin-box"},"Unlimited")),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Email Accounts"),s.a.createElement("td",{className:"basic-col sin-box"},"10"),s.a.createElement("td",{className:"standard-col sin-box"},"25"),s.a.createElement("td",{className:"premium-col sin-box"},"50"),s.a.createElement("td",{className:"ent-col sin-box"},"Unlimited")),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Premium Themes"),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Premium Themes"),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Premium Themes"),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Advanced Forms"),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Premium Icons"),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("span",{className:"table-icon neg"},s.a.createElement("i",{className:"fas fa-times"}))),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"colored-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"},"Customer Support"),s.a.createElement("td",{className:"basic-col sin-box"},"Limited"),s.a.createElement("td",{className:"standard-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"premium-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("td",{className:"ent-col sin-box"},s.a.createElement("span",{className:"table-icon pos"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("tr",{className:"price-block-row"},s.a.createElement("th",{scope:"row",className:"title-col sin-box"}),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("div",{className:"mt-5 ml-3 pr-3"},s.a.createElement(m.o,{variant:"card"},"Free"),s.a.createElement("small",{className:"d-block mb-4"},"No credit card required"),s.a.createElement(E,{size:"sm"},"Get Started"))),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("div",{className:"mt-5 ml-3 pr-3"},s.a.createElement(m.o,{variant:"card"},"$9/mo"),s.a.createElement("small",{className:"d-block mb-4"},"No credit card required"),s.a.createElement(E,{size:"sm"},"Get Started"))),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("div",{className:"mt-5 ml-3 pr-3"},s.a.createElement(m.o,{variant:"card"},"$19/mo"),s.a.createElement("small",{className:"d-block mb-4"},"No credit card required"),s.a.createElement(E,{size:"sm"},"Get Started"))),s.a.createElement("td",{className:"basic-col sin-box"},s.a.createElement("div",{className:"mt-5 ml-3 pr-3"},s.a.createElement(m.o,{variant:"card"},"$39/mo"),s.a.createElement("small",{className:"d-block mb-4"},"No credit card required"),s.a.createElement(E,{size:"sm"},"Get Started"))))))))))},p=t("rhk4");a.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{footerDark:!0},s.a.createElement(m.j,null,s.a.createElement("div",{className:"pt-5"}),s.a.createElement(l.a,null,s.a.createElement(n.a,{className:"justify-content-center text-center"},s.a.createElement(o.a,{lg:"6"},s.a.createElement(m.o,{variant:"hero"},"Pricing & Plans"),s.a.createElement(m.n,null,"Create custom landing pages with Omega that converts more visitors than any website."))))),s.a.createElement(u,null),s.a.createElement(p.a,null)))}},rhk4:function(e,a,t){"use strict";var c=t("zLVn"),s=t("q1tI"),l=t.n(s),n=t("vOnD"),o=t("7vrA"),r=t("3Z9Z"),m=t("JI6e"),i=t("Xjy0"),d=Object(n.c)(i.j).withConfig({displayName:"FAQ__SectionStyled",componentId:"sc-1hnuelf-0"})([""]),E=function(e){var a=e.title,t=e.children,s=Object(c.a)(e,["title","children"]);return l.a.createElement(i.c,s,l.a.createElement(i.o,{variant:"card",mb:4,fontSize:"24px",fontWeight:"900"},a),l.a.createElement(i.n,{variant:"small"},t))},b=Object(n.c)("a").withConfig({displayName:"FAQ___StyledA",componentId:"sc-1hnuelf-1"})(["color:"," !important;"],(function(e){return e.theme.colors.primary}));a.a=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{bg:"#F7F7FB"},l.a.createElement(o.a,null,l.a.createElement(r.a,{className:"justify-content-center"},l.a.createElement(m.a,{xl:"7",lg:"8",md:"9"},l.a.createElement("div",{className:"text-center"},l.a.createElement(i.o,null,"Frequently",l.a.createElement("br",{className:"d-none d-sm-block"})," Asked Question"),l.a.createElement(i.n,null,"Create custom landing pages with Omega that converts.")))),l.a.createElement(r.a,{className:"pt-4"},l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"6",className:"mt-5"},l.a.createElement(E,{title:"What’s gonna be your question?"},"Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.")),l.a.createElement(m.a,{lg:"12",className:""},l.a.createElement(i.c,{className:"text-center",pt:5},l.a.createElement(i.n,{variant:"small"},"Didn’t find your answer?"," ",l.a.createElement(b,{href:"/",target:"_blank"},"Contact us here"))))))))}}}]);
//# sourceMappingURL=component---src-pages-pricing-2-js-b50d7d267b7d1bc8e6d6.js.map