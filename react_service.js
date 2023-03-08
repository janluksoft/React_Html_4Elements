'use strict'; //With strict mode, you can not, for example, use undeclared variables.

document.querySelectorAll('.cReact_panel')
.forEach(domContainer => {
  const icId = parseInt(domContainer.dataset.cid, 1);
  const scId = String(domContainer.dataset.cid, '1');
  const sColor = String(domContainer.dataset.color, '#f5e2e2');

  ReactDOM.createRoot(domContainer).render(
    React.createElement(RSindbad, {toWhat: scId, xColor1: sColor}, null)
  );
});

const start = new Date().getTime();
var Ade = ReactDOM.createRoot(document.getElementById('React_container1'));

setInterval(function() {
  Ade.render(
    React.createElement(RTimeStart, {elapsed: (new Date().getTime() - start)}, null)
  );
  }, 100);



