import React from 'react';
import PropTypes from 'prop-types';
import upload from 'superagent';
// import axios from 'axios';
import S3Uploader from './S3Uploader';
import {
  ImageHandlerContainer,
  TypeBtn,
  PreviewImg,
  TypeBtnContainer
} from './styles';
import { Input, Button } from '../../../Theme';

const imgTypes = {
  UPLOAD: 'UPLOAD',
  LINK: 'LINK'
};

class ImageHandler extends React.Component {
  state = {
    type: null
  };

  onDrop = files => {
    upload
      .post('/upload')
      .attach('theseNamesMustMatch', files[0])
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
        console.log('res data', res);
      });
  };

  back = () => this.setState({ type: null });
  pickType = type => this.setState({ type });

  render() {
    const { image, onChange } = this.props;
    const { type } = this.state;

    if (type === null) {
      return (
        <TypeBtnContainer>
          {Object.keys(imgTypes).map(i => (
            <TypeBtn onClick={() => this.pickType(imgTypes[i])}>
              {imgTypes[i]}
            </TypeBtn>
          ))}
        </TypeBtnContainer>
      );
    }

    return (
      <ImageHandlerContainer>
        <Button onClick={() => this.back()}>
          <i className="material-icons">arrow_back</i>
        </Button>
        {type === imgTypes.UPLOAD && <S3Uploader onDrop={this.onDrop} />}
        {type === imgTypes.LINK && (
          <Input
            type="text"
            value={image}
            placeholder="Link Image"
            onChange={e => onChange(e.target.value)}
          />
        )}
        {image && <PreviewImg alt="" src={image} />}
      </ImageHandlerContainer>
    );
  }
}

ImageHandler.propTypes = {
  onChange: PropTypes.func.isRequired,
  image: PropTypes.string
};

ImageHandler.defaultProps = {
  image: null
};

export default ImageHandler;
