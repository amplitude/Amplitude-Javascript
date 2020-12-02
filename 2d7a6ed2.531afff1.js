(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),u=n(6),a=(n(0),n(70)),i={},l={unversionedId:"Revenue",id:"Revenue",isDocsHomePage:!1,title:"Revenue",description:"Revenue()",source:"@site/docs/Revenue.md",permalink:"/Amplitude-JavaScript/Revenue",editUrl:"https://github.com/amplitude/Amplitude-JavaScript/website/docs/Revenue.md",sidebar:"sidebar",previous:{title:"Identify",permalink:"/Amplitude-JavaScript/Identify"}},c=[{value:"<code>Revenue()</code>",id:"revenue",children:[]},{value:"<code>Revenue#setProductId</code>",id:"revenuesetproductid",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}]},{value:"<code>Revenue#setQuantity</code>",id:"revenuesetquantity",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Value",id:"return-value-1",children:[]}]},{value:"<code>Revenue#setPrice</code>",id:"revenuesetprice",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Return Value",id:"return-value-2",children:[]}]},{value:"<code>Revenue#setRevenueType</code>",id:"revenuesetrevenuetype",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Return Value",id:"return-value-3",children:[]}]},{value:"<code>Revenue#setEventProperties</code>",id:"revenueseteventproperties",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Return Value",id:"return-value-4",children:[]}]}],d={rightToc:c};function b(e){var t=e.components,n=Object(u.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"revenue"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var revenue = new amplitude.Revenue();\n")),Object(a.b)("p",null,"Revenue API - instance constructor. Wrapper for logging Revenue data. Revenue objects get passed to amplitude.logRevenueV2 to send to Amplitude servers.\nEach method updates a revenue property in the Revenue object, and returns the same Revenue object,\nallowing you to chain multiple method calls together."),Object(a.b)("p",null,"Note: price is a required field to log revenue events.\nIf quantity is not specified then defaults to 1."),Object(a.b)("h2",{id:"revenuesetproductid"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue#setProductId")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);\namplitude.logRevenueV2(revenue);\n")),Object(a.b)("p",null,"Set a value for the product identifer."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"productId")," (",Object(a.b)("inlineCode",{parentName:"li"},"string"),")\nThe value for the product identifier. Empty and invalid strings are ignored.")),Object(a.b)("h3",{id:"return-value"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("inlineCode",{parentName:"li"},"Revenue"),")\nReturns the same Revenue object, allowing you to chain multiple method calls together.")),Object(a.b)("h2",{id:"revenuesetquantity"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue#setQuantity")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setQuantity(5);\namplitude.logRevenueV2(revenue);\n")),Object(a.b)("p",null,"Set a value for the quantity. Note revenue amount is calculated as price ","*"," quantity."),Object(a.b)("h3",{id:"parameters-1"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"quantity")," (",Object(a.b)("inlineCode",{parentName:"li"},"number"),")\nInteger value for the quantity. If not set, quantity defaults to 1.")),Object(a.b)("h3",{id:"return-value-1"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("inlineCode",{parentName:"li"},"Revenue"),")\nReturns the same Revenue object, allowing you to chain multiple method calls together.")),Object(a.b)("h2",{id:"revenuesetprice"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue#setPrice")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);\namplitude.logRevenueV2(revenue);\n")),Object(a.b)("p",null,"Set a value for the price. This field is required for all revenue being logged."),Object(a.b)("p",null,"Note: revenue amount is calculated as price ","*"," quantity."),Object(a.b)("h3",{id:"parameters-2"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"price")," (",Object(a.b)("inlineCode",{parentName:"li"},"number"),")\nDouble value for the quantity.")),Object(a.b)("h3",{id:"return-value-2"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("inlineCode",{parentName:"li"},"Revenue"),")\nReturns the same Revenue object, allowing you to chain multiple method calls together.")),Object(a.b)("h2",{id:"revenuesetrevenuetype"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue#setRevenueType")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setRevenueType('purchase');\namplitude.logRevenueV2(revenue);\n")),Object(a.b)("p",null,"Set a value for the revenueType (for example purchase, cost, tax, refund, etc)."),Object(a.b)("h3",{id:"parameters-3"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"revenueType")," (",Object(a.b)("inlineCode",{parentName:"li"},"string"),")\nRevenueType to designate.")),Object(a.b)("h3",{id:"return-value-3"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("inlineCode",{parentName:"li"},"Revenue"),")\nReturns the same Revenue object, allowing you to chain multiple method calls together.")),Object(a.b)("h2",{id:"revenueseteventproperties"},Object(a.b)("inlineCode",{parentName:"h2"},"Revenue#setEventProperties")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"var event_properties = {'city': 'San Francisco'};\nvar revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setEventProperties(event_properties);\namplitude.logRevenueV2(revenue);\n")),Object(a.b)("p",null,"Set event properties for the revenue event."),Object(a.b)("h3",{id:"parameters-4"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"eventProperties")," (",Object(a.b)("inlineCode",{parentName:"li"},"object"),")\nRevenue event properties to set.")),Object(a.b)("h3",{id:"return-value-4"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"(",Object(a.b)("inlineCode",{parentName:"li"},"Revenue"),")\nReturns the same Revenue object, allowing you to chain multiple method calls together.")))}b.isMDXComponent=!0}}]);