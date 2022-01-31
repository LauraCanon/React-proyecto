import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { SearchBar } from '../component/SearchBar';
import { GlobalContext } from '../context/GlobalState';

export default function SearchPage() {
  const { collabs } = useContext(GlobalContext);
  return (
    <main className="flex-shrink-0 container mt-4 mb-4">
      <div className="row my-5">
        <div className="col-12">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        {collabs.map((collab) => {
          return (
            <div key={collab._id} className="col-md-4 col-lg-4 col-xl-2 mb-5">
              <div className="card">
                <img src={''} className="card-img-top" alt={collab.name} />
                <div className="card-body d-flex justify-content-between">
                  <span className="fs-6">
                    {collab.name} {collab.lastName}
                  </span>
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
                  <div className="col-6 ">
                    <span className="fs-6 mx-3">$ </span>
                  </div>
                  <div className="col-6">
                    <a href="/" className="btn-sm btn-primary">
                      <small>Agendar</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
