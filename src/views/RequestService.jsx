import React from 'react';

export default function RequestService() {
  return (
    <main className="mt-5 container ">
      <div className="row">
        <div className="col mt-5 py-3">
          <h3>Solicitando Servicio: Colaborador</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center mt-5 p-2 ">
          <div className="card border-0" style={{ width: '20rem' }}>
            <img src="/img/person.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-text mt-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5 p-2">
          <div className="form-group">
            <label htmlFor="fechaInicio" className="form-label"></label>
            <input
              type="text"
              id="fechaInicio"
              placeholder="Fecha del Servicio"
              className="form-control"
            />
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle border"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hora
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                9:00am - 12:00m
              </a>
              <a className="dropdown-item" href="#">
                12pm - 3pm
              </a>
              <a className="dropdown-item" href="#">
                3pm - 6pm
              </a>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
            >
              Descripcion del servicio
            </textarea>
          </div>
          <div className="mb-5 mt-3">
            <label htmlFor="formFile" className="form-label">
              Adjuntar Imagen
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="d-grid gap-2 col-8 mx-auto">
            <button className="btn btn-primary" type="button">
              Confirmar
            </button>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="mt-3 d-flex flex-row align-items-center p-3 form-color">
            Comentarios
          </div>
          <div className="mt-2">
            <div className="d-flex flex-row p-3">
              {' '}
              <img
                src="https://randomuser.me/api/portraits/men/39.jpg"
                width="40"
                height="40"
                className="rounded-circle mr-3"
              />
              <div className="w-100 ms-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {' '}
                    <span className="mr-2">Brian selter </span>{' '}
                    <small className="c-badge ms-5">Top Comment</small>{' '}
                  </div>{' '}
                  <small>12h ago</small>
                </div>
                <p className="text-justify comment-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                <div className="d-flex flex-row user-feed">
                  {' '}
                  <span className="wish">
                    <i className="fa fa-heartbeat mr-2"></i>24
                  </span>{' '}
                  <span className="ml-3">
                    <i className="fa fa-comments-o mr-2"></i>Reply
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="d-flex flex-row p-3">
              {' '}
              <img
                src="https://randomuser.me/api/portraits/men/21.jpg"
                width="40"
                height="40"
                className="rounded-circle mr-3"
              />
              <div className="w-100 ms-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {' '}
                    <span className="mr-2">Seltos Majito</span>{' '}
                    <small className="c-badge ms-5">Top Comment</small>{' '}
                  </div>{' '}
                  <small>2h ago</small>
                </div>
                <p className="text-justify comment-text mb-0">
                  Tellus in hac habitasse platea dictumst vestibulum. Lectus
                  nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat
                  velit scelerisque in dictum non consectetur. .
                </p>
                <div className="d-flex flex-row user-feed">
                  {' '}
                  <span className="wish">
                    <i className="fa fa-heartbeat mr-2"></i>14
                  </span>{' '}
                  <span className="ml-3">
                    <i className="fa fa-comments-o mr-2"></i>Reply
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="d-flex flex-row p-3">
              {' '}
              <img
                src="https://randomuser.me/api/portraits/men/23.jpg"
                width="40"
                height="40"
                className="rounded-circle mr-3"
              />
              <div className="w-100 ms-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {' '}
                    <span className="mr-2">Maria Santola</span>{' '}
                    <small className="c-badge ms-5">Top Comment</small>{' '}
                  </div>{' '}
                  <small>12h ago</small>
                </div>
                <p className="text-justify comment-text mb-0">
                  {' '}
                  Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi
                  quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel
                  turpis nunc eget.{' '}
                </p>
                <div className="d-flex flex-row user-feed">
                  {' '}
                  <span className="wish">
                    <i className="fa fa-heartbeat mr-2"></i>54
                  </span>{' '}
                  <span className="ml-3">
                    <i className="fa fa-comments-o mr-2"></i>Reply
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
