import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const S3Uploader = ({ onDrop }) => (
  <div>
    <Dropzone onDrop={onDrop} multiple={false}>
      <div>Drop a file here, or click to select a file to upload.</div>
    </Dropzone>
  </div>
);

S3Uploader.propTypes = {
  onDrop: PropTypes.func.isRequired
};

export default S3Uploader;
