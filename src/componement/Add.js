import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function Add(props) {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState({
    title:"Movie Title", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    posterURL:"images/movie.jpg",
    rating:0,
    trailer:"https://www.youtube.com/embed/F5AluatK094"
  });

  const handleChange = (e) => setMovie({...movie,[e.target.name]:e.target.value})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const wrapper =() => {
    listChanged();
    handleClose();
  }

  const listChanged = () => {
    props.getAdd(movie)
    setMovie({
      title:"Movie Title", 
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      posterURL:"movies/movie.jpg",
      rating:0,
      trailer:"https://www.youtube.com/embed/F5AluatK094"
    })
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:'#e50913'}}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> 
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Movie title"
            aria-label="Movietitle"
            aria-describedby="basic-addon1"
            name="title"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3"> 
          <FormControl 
            as="textarea" 
            aria-label="Moviedescription"
            placeholder="Movie description"
            name="description"
            onChange={handleChange} 
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Poster URL images/movie.jpg"
            aria-label="posterURL"
            aria-describedby="basic-addon1"
            name="posterURL"
            onChange={handleChange} 
          />
        </InputGroup>

        <InputGroup  className="mb-3">
          <FormControl
            placeholder="Rating from 0 to 5"
            aria-label="Movierating"
            aria-describedby="basic-addon1"
            name="rating"
            type="number"
            min="0" max="5"
            onChange={handleChange} 
          />
        </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={wrapper} style={{backgroundColor:'#e50913'}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add