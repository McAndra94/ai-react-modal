!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("react")):"function"==typeof define&&define.amd?define(["react"],o):(e||self).aiReactModal=o()}(this,function(){return function(e){var o=e.onClose,t=e.title,l=void 0===t?"":t,n=e.content,i=void 0===n?"":n,d=e.icon,a=e.buttonLabel,s=void 0===a?"x":a,c=e.style,u=void 0===c?{}:c;return e.isOpen?h("div",{className:"modal",style:u.modal},h("div",{className:"modalBody",style:u.body},d&&h("img",{src:d,alt:"Modal Icon"}),h("h2",{style:u.title},l),h("div",null,i),h("button",{onClick:o,className:"closeButton",style:u.button},s))):null}});
//# sourceMappingURL=modal.umd.js.map