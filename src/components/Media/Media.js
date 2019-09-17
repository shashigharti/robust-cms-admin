import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import './media.css';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      file: null,
      medias: {},
      loaded: false,
      selected: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }
  componentDidMount() {
    this.getImages();
  }
  getImages() {
    const url = '/api/images/all';
    axios.get(url).then(response => {
      this.setState({
        medias: response.data,
        loaded: true,
      });
    });
  }
  handleChange(event) {
    const file = event.target.files[0];
    this.setState({
      file: file,
      loaded: true,
    });
  }
  handleApply() {
    this.props.id(this.state.selected);
  }
  uploadFile() {
    const loaded = this.state.loaded;
    const input = document.getElementById('input-file-now');
    if (loaded) {
      const data = new FormData();
      data.append('file', this.state.file);
      const { medias } = this.state;
      axios.post('/api/upload', data).then(res => {
        const data = res.data;
        data.forEach(function(item, index) {
          medias.push(item);
        });
        this.setState({ medias: medias, file: null, loaded: false });
        input.value = null;
      });
    }
  }
  handleClick(event) {
    const id = event.target.getAttribute('data-id');
    this.setState({
      selected: id,
    });
  }
  render() {
    const overlay = {
      border: '1px solid blue',
    };
    const { medias, selected } = this.state;
    const showMedia =
      medias.length > 0 &&
      medias.map(media => {
        return (
          <div className="col s4" key={media.id}>
            <div className={selected == media.id ? 'overlay media-image' : 'media-image'}>
              <img
                data-id={media.id}
                onClick={this.handleClick}
                src={`http://localhost:8000/uploads/${media.id}/${media.file}`}
              ></img>
            </div>
          </div>
        );
      });
    return (
      <div className="row">
        <div className="col s12">
          <label>Thumbnail</label>
          <a
            className="waves-effect gradient-45deg-purple-deep-orange waves-light btn modal-trigger"
            href="#modal1"
          >
            Add Image
          </a>
          <div id="modal1" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h5>Media Manager</h5>
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab">
                    <a className="active" href="#upload">
                      Pages
                    </a>
                  </li>
                  <li className="tab">
                    <a href="#images">Downloads</a>
                  </li>
                </ul>
              </div>
              <div id="upload" className="clearfix tab--content">
                <div className="col s12">
                  <input
                    type="file"
                    onChange={this.handleChange}
                    id="input-file-now"
                    className="dropify"
                    data-default-file=""
                  />
                </div>
                <div className="col s12">
                  <Button onClick={this.uploadFile} children="Upload" />
                </div>
              </div>

              <div id="images" className="clearfix tab--content">
                <div className="col s12">{showMedia}</div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat ">
                Cancel
              </a>
              <a
                href="#!"
                className="modal-action modal-close waves-effect waves-green btn-flat "
                onClick={this.handleApply}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Media };
