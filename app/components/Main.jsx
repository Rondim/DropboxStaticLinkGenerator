var React = require("react");

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns small-6 small-centered">
          <h3 className="text-center">Dropbox Static link generator</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
