(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("dI71"),s=a("q1tI"),r=a.n(s),o=a("Wbzz"),c=a("wd/R"),p=a.n(c),i=(a("/3mp"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,s=e.type,c=e.description,i=this.props.data.node.fields,l=i.slug,m=i.categorySlug;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__meta"},r.a.createElement("time",{className:"post__meta-time",dateTime:p()(a).format("MMMM D, YYYY")},p()(a).format("MMMM D YYYY")),r.a.createElement("span",{className:"post__meta-divider"}),r.a.createElement("span",{className:"post__meta-type"},s," / "),r.a.createElement("span",{className:"post__meta-category",key:m},r.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},n))),r.a.createElement("h2",{className:"post__title"},r.a.createElement(o.Link,{className:"post__title-link",to:l},t)),r.a.createElement("p",{className:"post__description"},c),r.a.createElement(o.Link,{className:"post__readmore",to:l},"Read"))},t}(r.a.Component));t.a=i},nz5Z:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),s=a("q1tI"),r=a.n(s),o=a("TJpk"),c=a.n(o),p=a("ntAx"),i=a("kfNp"),l=a("1Jpo"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach((function(t){e.push(r.a.createElement(l.a,{data:t,key:t.node.fields.slug}))})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},t),r.a.createElement("div",{className:"page__body"},e))))},t}(r.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{title:t+" - "+e}),r.a.createElement(i.a,this.props),r.a.createElement(m,this.props)))},t}(r.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-866b901fd2e103282b77.js.map