import React from 'react';

function AhmedModal() {
  return (
    <div
      tabIndex="-1"
      style={{
        position: 'relative',
        zIndex: 999999,
        display: 'none',
      }}
    >
      <div>
        <div
          className="modal fade"
          role="dialog"
          tabIndex="-1"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ backgroundColor: '#fff' }}>
              <div className="modal-body">
                <iframe
                  title="ahmed"
                  src="http://ameinfo.cf/event-html/ahmed.html"
                  frameBorder="0"
                  width="100%"
                  height="600px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade" />
      </div>
    </div>
  );
}

export default AhmedModal;
