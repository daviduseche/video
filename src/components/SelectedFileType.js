import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedFileType extends Component {
  checkFileType() {
    //object of different mimetypes with associated magicNumbers
    const mimeObj = {
      mp4: '00000018',
      quicktime: '6D6F6F76',
      xmsvideo: '52494646',
      wmv: '3026B275',
      WebM: '1A525453',
      Ogg: '4F676753',
      flashVideo: '464C561',
      mp3: '494433'
    };

    if (this.props.hexCode !== null) {
      //return match
      const { hexCode } = this.props;
      return Object.keys(mimeObj).find(key => mimeObj[key] === hexCode);
    }
    return <div />;
  }

  render() {
    let fileName = null;
    if (this.props.fileName) {
      fileName = this.props.fileName.name;
    }
    return (
      <div>
        <h4 className="ui header file">
          <div className="content">File Name: {fileName}</div>
        </h4>

        <h4 className="ui header file">
          <div className="content">
            File Type:{' '}
            {this.checkFileType() ? this.checkFileType() : 'Not found'}
          </div>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fileName: state.fileUpload.file, hexCode: state.binaryFileType };
};

export default connect(mapStateToProps)(SelectedFileType);
