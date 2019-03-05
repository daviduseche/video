import React, { Component } from 'react';
import vimeo_logo from '../vimeo_logo.png';
import { connect } from 'react-redux';
import { uploadFile, binaryType } from '../actions';
import '../App.css';
import SelectedFileType from './SelectedFileType';

class App extends Component {
  //use JS FileReader to read contents of file selected and grab fileSignature aka magicNumber
  checkFileType = event => {
    let bytes = [];

    if (!this.props.fileName) {
      return;
    }
    const filereader = new FileReader();
    let file = this.props.fileName;
    const blob = file.slice(0, 4);
    filereader.readAsArrayBuffer(blob);

    filereader.onloadend = e => {
      if (e.target.readyState === FileReader.DONE) {
        const uint = new Uint8Array(e.target.result);

        uint.forEach(byte => {
          bytes.push(byte.toString(16));
        });
        const hex = bytes.join('').toUpperCase();
        this.props.binaryType(hex);
      }
    };
  };

  handleselectedFile = event => {
    //dispatch action for file name
    this.props.uploadFile(event.target.files[0]);
  };

  render() {
    return (
      <div>
        <h3 className="ui header">
          <img className="ui image" src={vimeo_logo} alt="Logo" />
          <div className="content">Mime Type identifier</div>
        </h3>
        <div className="ui middle aligned left aligned grid container">
          <div className="ui fluid segment">
            <button
              className="ui gray right floated button"
              onClick={this.checkFileType}
            >
              <i className="ui search icon" /> Check MIME type
            </button>

            <input
              onChange={this.handleselectedFile}
              type="file"
              className="inputFile"
              id="searchfileinput"
            />

            <label
              htmlFor="searchfileinput"
              className="ui blue right floated button"
            >
              <i className="ui file video icon" />
              Select file
            </label>
          </div>
        </div>
        <SelectedFileType />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fileName: state.fileUpload.file };
};

export default connect(
  mapStateToProps,
  { uploadFile, binaryType }
)(App);
