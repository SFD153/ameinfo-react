import React from 'react';

function KhaledModal() {
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
                  title="khaled"
                  src="http://ameinfo.cf/event-html/khaled.html"
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

export default KhaledModal;
