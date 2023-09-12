import React from "react";
import "./Alerta.css";

class Alerta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
    };
  }

  componentDidMount() {
    // Llama a la función closeAlert después de 15 segundos
    setTimeout(this.closeAlert, 15000);
  }

  closeAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  render() {
    return (
      this.state.showAlert && (
        <div
          className="alert w-100 mb-0 bg-alert alert-dismissible fade show d-flex justify-content-center"
          role="alert"
        >
          <div className="text-alerta ">
            El desarrollo de este proyecto es posible gracias al financiamiento
            de <strong>Cementos Pacasmayo S.A.A.</strong>
          </div>
          {/* <button type="button" className="close" onClick={this.closeAlert} aria-label="Close">
                        <span aria-hidden="true" className='close-icon'>&times;</span>
                    </button> */}
        </div>
      )
    );
  }
}

export default Alerta;
