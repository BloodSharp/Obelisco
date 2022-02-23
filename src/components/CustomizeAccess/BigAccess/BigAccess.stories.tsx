import React from 'react';

export const BigAccessComponent = (): JSX.Element => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Default</h4>
          <a href="javascript:void(0)" className="list-group-item card-item">
            <div className="access-content">
              <span className="access-title">Lorem ipsum dolor sit amet</span>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Hover</h4>
          <a href="javascript:void(0)" className="list-group-item card-item">
            <div className="access-content">
              <span className="access-title">Lorem ipsum dolor sit amet</span>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Focus</h4>
          <a href="javascript:void(0)" className="list-group-item card-item">
            <div className="access-content">
              <span className="access-title">Lorem ipsum dolor sit amet</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
