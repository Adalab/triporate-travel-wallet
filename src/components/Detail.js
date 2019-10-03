import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import './Detail.scss';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';


class Detail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const { boardingList, routerProps } = this.props;
    const getId = routerProps.match.params.id;

    const boardingPass = boardingList.find(item => item.serialNumber === getId);

 
      if (boardingPass) {
        if (boardingPass.organizationName === 'Iberia') {
          return (
            <React.Fragment>
              <div className="detail__list">
                <List
                  boardingList={boardingList}
                />
              </div>
              <div 
                className="detail"
                style={{ backgroundImage: `linear-gradient(to right bottom, #D7192D, #D7192D)`}}
              >
                <Link className="link-go-back" to="/"> <span className="go-back-icon">&lt;</span></Link>
                <div className="detail__card">
                  <div className="detail__card__header">
                    <img src={`data:image/png;base64,${boardingPass.logo}`} alt="Organization logo" className="detail_logo" />
                    <div className="card__flight">
                      {boardingPass.departureDate}
                    </div>
                  </div>
                  <div className="detail__places">
                    <div className="detail__data-wrapper">
                      <p className="detail__city">{boardingPass.origin}</p>
                      <p className="detail__time">{boardingPass.departureTime}</p>
                    </div>
                    <div className="detail__travel-icon">️
                    <i className="fas fa-plane"></i>
                    </div>
                    <div className="detail__data-wrapper">
                      <p className="detail__city">{boardingPass.destination}</p>
                      <p className="detail__time">{boardingPass.arrivalTime}</p>
                    </div>
                  </div>
  
                  <div className="detail__travel-info">
                    <ul className="detail__info-list">
                      <li 
                      className="detail__info-element"
                      style={{ backgroundColor: `${boardingPass.backColor}` }}
                      >
                        <p className="element__info-content">{boardingPass.flight}</p>
                        <p className="element__info-title">Flight</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.flyingClass}</p>
                        <p className="element__info-title">Class</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.seat}</p>
                        <p className="element__info-title">Seat</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.gateClose}</p>
                        <p className="element__info-title">Gate Close</p>
                      </li>
                    </ul>
                  </div>
  
                  <div className="detail__user-name">
                    <p className="user__name-title">NAME</p>
                    <p className="user__name-content">{boardingPass.passengerName}</p>
                  </div>
                  <div className="detail__qr-wrapper">
                    <div className="boarding__info">
                      <p className="user__boarding-title">BOARDING TIME</p>
                      <p className="user__boarding-content">{boardingPass.boardingTime}</p>
                    </div>
  
                    <Link className="link-qr__detail" to={`/qrDetail/${getId}`}>
                      <div className="qr__small-wrapper">
                        <QRCode value="755190101463160911600002706190518300510B115885YS3..CFTUB"
                          bgColor="#FFFF"
                          fgColor="#000"
                          size={70}
                          includeMargin={true}
                          className="qr__small"
                        //{passData.barcode.message}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
  
              </div>
              <Link to="/">
                <div className="detail__btn-wrapper">
                  <p className="detail__btn-label">More info</p>
                  <button
                    className="detail__btn-more"
                    type="button"
                    name="add_img"
                  // onClick={this.handleFilePicker}
                  >+
                      </button>
                </div>
              </Link>
  
  
  
            <Link to={`/back/${getId}`}>
              <div className="detail__btn-wrapper">
                <p className="detail__btn-label">More info</p>
                <button
                  className="detail__btn-more"
                  type="button"
                  name="add_img"
                // onClick={this.handleFilePicker}
                >
                  +
                  </button>
              </div>
            </Link>
            
      
            </React.Fragment >
  
          );
        }
        else if (boardingPass.organizationName === 'Renfe') {
          return (
            <React.Fragment>
              <div className="detail__list">
                <List
                  boardingList={boardingList}
                />
              </div>
              <div className="detail">
                <Link className="link-go-back" to="/"> <span className="go-back-icon">&lt;</span></Link>
                <div className="detail__card">
                  <div className="detail__card__header-renfe">
                    <img src={`data:image/png;base64,${boardingPass.logo}`} alt="Organization logo" className="detail_logo" />
                    <div className="card__flight">
                      {boardingPass.departureDate}
                    </div>
                  </div>
                  <div className="detail__places-renfe">
                    <div className="detail__data-wrapper-renfe">
                      <p className="detail__city-renfe">{boardingPass.originName}</p>
                      <p className="detail__time-renfe">{boardingPass.departureTime}</p>
                    </div>
                    <div className="detail__travel-icon-renfe">️
                    <i className="fas fa-train"></i>
                    </div>
                    <div className="detail__data-wrapper-renfe">
                      <p className="detail__city-renfe">{boardingPass.destinationName}</p>
                      <p className="detail__time-renfe">{boardingPass.arrivalTime}</p>
                    </div>
                  </div>
  
                  <div className="detail__travel-info">
                    <ul className="detail__info-list">
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.train}</p>
                        <p className="element__info-title">Train</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.car}</p>
                        <p className="element__info-title">Car</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.seat}</p>
                        <p className="element__info-title">Seat</p>
                      </li>
                      <li className="detail__info-element">
                        <p className="element__info-content">{boardingPass.trainClass}</p>
                        <p className="element__info-title">Class</p>
                      </li>
                    </ul>
                  </div>
  
                  <div className="detail__user-name">
                    <p className="user__name-title">NAME</p>
                    <p className="user__name-content">{boardingPass.passengerName}</p>
                  </div>
                  <div className="detail__qr-wrapper">
                    <div className="boarding__info">
                      <p className="user__boarding-title">DEPARTURE TIME</p>
                      <p className="user__boarding-content">{boardingPass.departureTime}</p>
                    </div>
  
                    <Link className="link-qr__detail" to={`/qrDetail/${getId}`}>
                      <div className="qr__small-wrapper">
                        <QRCode value="755190101463160911600002706190518300510B115885YS3..CFTUB"
                          bgColor="#FFFF"
                          fgColor="#000"
                          size={70}
                          includeMargin={true}
                          className="qr__small"
                        //{passData.barcode.message}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
  
              </div>
              <Link to="/">
                <div className="detail__btn-wrapper">
                  <p className="detail__btn-label">More info</p>
                  <button
                    className="detail__btn-more"
                    type="button"
                    name="add_img"
                  // onClick={this.handleFilePicker}
                  >+
                      </button>
                </div>
              </Link>
  
            <Link to={`/back/${getId}`}>
              <div className="detail__btn-wrapper">
                <p className="detail__btn-label">More info</p>
                <button
                  className="detail__btn-more"
                  type="button"
                  name="add_img"
                // onClick={this.handleFilePicker}
                >
                  +
                  </button>
              </div>
            </Link>
            
      
            </React.Fragment >
  
          );
        }
      } else {
        return(
          <div>
            <p className="warning__messagge">Este billete no existe, prueba a cargar otro</p>
            <Link to="/" className="link-go-back-error"> Volver </Link>
          </div>
        )
      }
  }   
}

Detail.propTypes = {
  boardingList: PropTypes.arrayOf(PropTypes.object).isRequired,
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Detail;
