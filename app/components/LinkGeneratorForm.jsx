var React = require("react");
var Clipboard =require("clipboard");

var LinkGeneratorForm = React.createClass({
  getInitialState: function() {
    return {
      outputLink: ""
    };
  },
  componentDidMount: function() {
    new Clipboard(".clipbutton")
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var dropboxLink = this.refs.link.value;
    var sliceFrom = dropboxLink.indexOf("/s");
    var staticDropboxLink = `=IMAGE("https://dl.dropboxusercontent.com${dropboxLink.slice(sliceFrom)}")`;
    this.setState({
      outputLink: staticDropboxLink
    });
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="link" placeholder="Вставьте ссылку Dropbox"/>
          <button className="button expanded">Сгенерировать ссылку</button>
        </form>
        <button className="clipbutton button hollow expanded" data-clipboard-target="#outputLink">Copy</button>
        <p id="outputLink" className="text-center">{this.state.outputLink}</p>
      </div>
    );
  }
});

module.exports = LinkGeneratorForm;

//=IMAGE("https://dl.dropboxusercontent.com/s/xsuf3kvt8hwq744/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202016-03-02%20%D0%B2%2019.59.51.png?dl=0")
