import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { SearchBar } from '../component/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectServiceCollab,
  serviceCollabList,
} from '../store/userSlicer/searchServiceSlicer';

export default function SearchPage() {
  const dispatch = useDispatch();
  const [query] = useSearchParams();
  const city = query.get('city');
  const service = query.get('service');
  const search = { service, city };
  useEffect(() => {
    dispatch(serviceCollabList(search));
  }, []);
  const serviceCollabs = useSelector(selectServiceCollab);
  console.log(serviceCollabs);
  return (
    <main className="flex-shrink-0 container mt-4 mb-4">
      <div className="row my-5">
        <div className="col-12">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        {serviceCollabs &&
          serviceCollabs.map((collab, index) => {
            return (
              <div key={index} className="col-md-4 col-lg-4 col-xl-2 mb-5">
                <div className="card shadow">
                  <img
                    src={collab.createdBy.image}
                    className="card-img-top"
                    alt={collab.price}
                  />
                  <div className="card-body d-flex justify-content-between">
                    <span className="fs-6">{collab.createdBy.name}</span>
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
                  <div className="row pb-3">
                    <div className="col-12 ">
                      <span className="fs-6 mx-3">Price: ${collab.price}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <a href="/" className="btn-sm btn-primary">
                      <small>Agendar</small>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
