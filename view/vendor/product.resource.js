!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["product.resource"]=n({1:function(n,a,l,e,r){var t,s=null!=a?a:{},i=l.helperMissing,c="function",u=n.escapeExpression;return'<div class="product">\n    <div class="product-info">\n            <div class=\'product-img\'>\n                <img src=\''+u((t=null!=(t=l.url||(null!=a?a.url:a))?t:i,typeof t===c?t.call(s,{name:"url",hash:{},data:r}):t))+"'>\n            </div>\n            <div class='product-summary'>\n                <div class='product-name'>\n                    <a href='javascript:void(0)'>"+u((t=null!=(t=l.name||(null!=a?a.name:a))?t:i,typeof t===c?t.call(s,{name:"name",hash:{},data:r}):t))+"</a>\n                </div>\n                <div class='product-intro'>\n                    <a href='javascript:void(0)'>描述描述描述描述描述描述描述描述描述描述.....</a>\n                </div>\n                <input type='button' class='input-btn' value='加入购物车' ng-click=''>\n            </div>\n    </div>\n</div>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,r){var t;return null!=(t=l.each.call(null!=a?a:{},null!=a?a.productList:a,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r}))?t:""},useData:!0})}();