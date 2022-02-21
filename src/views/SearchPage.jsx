import React, { useEffect, useState, Fragment, memo } from 'react';
import { FaStar } from 'react-icons/fa';
import { SearchBar } from '../component/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectServiceCollab,
  serviceCollabList,
} from '../store/userSlicer/searchServiceSlicer';
import {
  clearStatus,
  scheduleService,
  selectScheduleService,
} from '../store/userSlicer/scheduleServiceSlicer';

import Swal from 'sweetalert2';
import { Modals } from '../component/Modals';

export const SearchPage = memo(({ isAuth }) => {
  const isCollab = window.localStorage.getItem('collaborator') || null;
  const { status } = useSelector(selectScheduleService);
  console.log(status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query] = useSearchParams();
  const city = query.get('city');
  const service = query.get('service');
  const search = { service, city };
  const serviceCollabs = useSelector(selectServiceCollab);
  const initialState = { address: '', date: '', phone: '', idService: '' };
  const [showSchedule, setShowSchedule] = useState(false);
  const [schedule, setSchedule] = useState(initialState);
  const handleCloseSchedule = () => {
    setShowSchedule(false);
    setSchedule(initialState);
  };
  useEffect(() => {
    dispatch(serviceCollabList(search));
  }, []);
  const handleShow = (service) => {
    if (isCollab) {
      Swal.fire({
        title: 'Apreciado usuario',
        text: 'Eres un Colaborador no tienes Permitido Solicitar Servicios. Gracias',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        navigate('/');
      });
      return;
    }
    if (!isAuth) {
      Swal.fire({
        title: 'Apreciado usuario',
        text: 'Por favor inicie sesion para agendar un servicio',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
      }).then(() => navigate('/sessionlogin'));
    } else if (isAuth && !schedule.idService) {
      setShowSchedule(true);
      setSchedule({ ...schedule, idService: service._id });
    }
  };
  const showStatus = () => {
    const icon =
      (status === 'El Servicio fue Agendado Correctamente' && 'success') ||
      (status === 'El Servicio ya se encuentra Agendado' && 'warning');
    Swal.fire({
      title: 'Apreciado usuario',
      text: status,
      allowOutsideClick: true,
      backdrop: true,
      icon,
      confirmButtonText: 'Aceptar',
    }).then(() => {
      if (status === 'El Servicio fue Agendado Correctamente') {
        setSchedule(initialState);
        navigate('/home/user');
      } else {
        setSchedule(initialState);
      }
    });

    dispatch(clearStatus());
  };
  {
    status && showStatus();
  }
  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setShowSchedule(false);
    dispatch(scheduleService(schedule));
  };

  return (
    <Fragment>
      <main className="flex-shrink-0 container mt-4 mb-4">
        <Modals
          handleScheduleChange={handleScheduleChange}
          handleCloseSchedule={handleCloseSchedule}
          handleConfirm={handleConfirm}
          showSchedule={showSchedule}
        />
        <div className="row my-5">
          <div className="col-12">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          {serviceCollabs &&
            serviceCollabs.map((service, index) => {
              return (
                <div
                  key={index}
                  className="col-md-4 col-lg-4 col-xl-2 mb-5"
                  style={{ width: '15rem' }}
                >
                  <div className="card shadow ">
                    <img
                      src={service.createdBy.image}
                      className="card-img-top img-fluid w-75 mx-auto"
                      alt={service.createdBy.name}
                    />
                    <div className="card-body d-flex justify-content-between">
                      <p className="h5">{service.createdBy.name} </p>
                      <div>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <p className="h6 mx-3">Price: ${service.price}</p>
                      </div>
                    </div>
                    <div className="col mx-auto pb-2">
                      <button
                        type="button"
                        className="btn-sm btn-success text-center "
                        onClick={() => handleShow(service)}
                      >
                        Agendar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </Fragment>
  );
});
