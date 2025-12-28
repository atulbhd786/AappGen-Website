import "./AutoModal.css";

const AutoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="bmodal-overlay">
      <div className="bmodal-box">
        <span className="close-btn" onClick={onClose}>×</span>

        <h2>AappGen Tech Pvt Ltd</h2>
        <p>
          We are a leading company providing high-quality services with
          100% customer satisfaction. Feel free to request a call and
          our team will contact you shortly.
        </p>

        <button className="bmodal-btn">Request a Call</button>
      </div>
    </div>
  );
};

export default AutoModal;
