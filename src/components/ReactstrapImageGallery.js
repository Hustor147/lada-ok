import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReactstrapImageGallery.css";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Col,
  Row,
  Container,
  Card,
  CardImgOverlay,
  CardImg,
  Button,
  CloseButton,
} from "reactstrap";
import ImageCarousel from "./ImageCarousel";

class ReactstrapImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      images: [],
      imagesToShow: 6,
      currentIndex: 0,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  static getDerivedStateFromProps(props) {
    // set the no of images as specified in the limit (default to 6)
    const tempLimit = props.hasOwnProperty("limit")
      ? props.limit
      : this.state.limit;
    return { images: props.images, imagesToShow: tempLimit };
  }

  showModalImage = (imageId) => {
    this.toggleModal();
    this.setState({
      currentIndex: imageId,
    });
  };

  render() {
    const { images, imagesToShow, isModalOpen, currentIndex } = this.state;
    const tempImagesArray = images.slice(0, imagesToShow);
    const hasMore = images.length !== 0 ? images.length - imagesToShow : 0;
    return (
      <Container>
        <Row>
          {tempImagesArray.map((image, index) => (
            <Col
              md="2"
              className="my-2"
              key={index}
              onClick={() => this.showModalImage(index)}
            >
              <Card>
                <CardImg src={image.url} />
                {hasMore !== 0 && index === imagesToShow - 1 ? (
                  <CardImgOverlay className="d-flex align-items-center flex-column justify-content-center text-center text-white">
                    <h5 className="mb-0"> + {hasMore}</h5>
                    {/* <small> více </small> */}
                  </CardImgOverlay>
                ) : null}
              </Card>
            </Col>
          ))}
        </Row>
        <Modal
          className="modal-lg"
          isOpen={isModalOpen}
          toggle={this.toggleModal}
          size="xl"
          style={{ width: "1000px" }}
        >
          {/* <ModalHeader className="bg-secondary">
            <CloseButton className="closeButton" onClick={this.toggleModal} />
          </ModalHeader> */}
          <ModalBody className="bg-secondary">
            <CloseButton className="closeButton" onClick={this.toggleModal} />
            <Row>
              <Col md="12" className="openCarousel">
                <ImageCarousel images={images} currentIndex={currentIndex} />
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default ReactstrapImageGallery;
