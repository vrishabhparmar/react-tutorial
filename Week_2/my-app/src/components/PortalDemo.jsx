
import { useState } from 'react';
import ReactDOM from 'react-dom'


function Modal({children, onClose}){
    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button onClick={onClose}>X</button>
                {children}
            </div>

        </div>
        , document.getElementById('portal-modal')
    );
}

const styles = {
    overlay: {
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex", justifyContent: "center", alignItems: "center"
    },
    modal: {
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    }
  };

const PortalDemo = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portal Example</h1>
      <button onClick={() => setShowModal(!showModal)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>This is a Modal!</h2>
          <p>Rendered via React Portal ✨</p>
        </Modal>
      )}
    </div>
    )
}  

export default PortalDemo;