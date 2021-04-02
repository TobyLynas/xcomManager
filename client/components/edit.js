import styles from "../components/edit.module.css";
import React, { useState } from "react";
import Modal from "../components/modal.js";

class editModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.showModal}
          // onClick={(event) => this.handleEditClick(event)}
          className={styles.pencilIcon}
          src={"pencil-fill.svg"}
        />
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          data={this.props.id}
        >
          <p>Modal</p>
        </Modal>
      </div>
    );
  }
}

export default editModule;
