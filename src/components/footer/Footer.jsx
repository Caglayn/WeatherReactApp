import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a className="text-muted" target="_blank"><strong>Çağlayan</strong></a> - <a className="text-muted" target="_blank"><strong>Admin Template</strong></a>								&copy;
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-muted" target="_blank">Support</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" target="_blank">Help Center</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" target="_blank">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" target="_blank">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer