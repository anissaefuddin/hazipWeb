'use client'
import { useState } from 'react'


/* Instruments */
import {
  dataAppSlice,
  useSelector,
  useDispatch,
  selectDataApp,
  addDataOverViewAsync,
} from '@/lib/redux'


const Contact = () => {
  const dispatch = useDispatch()
  const store = useSelector(selectDataApp)
  const [StudyNama, setStudyNama] = useState("")
  const [StudyCoordinator, setStudyCoordinator] = useState("")

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    Study Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={store.appData.Overview.Study_Name}
                    onChange={(e) => setStudyNama(e.target.value)}
                    className="form-input"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    Study Coordinator <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={StudyCoordinator}
                    onChange={(e) => setStudyCoordinator(e.target.value)}
                    className="form-input"
                    placeholder="john.doe@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    Anything else? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Message goes here..."
                    rows={8}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(dataAppSlice.actions.addDataOverview({
                      Study_Name: StudyNama,
                      Study_Coordinator: StudyCoordinator,
                      Study_Coordinator_Contact_Info:"",
                      Facility:"",
                      Facility_Location:"",
                      Facility_Owner:"",
                      Overview_Company:"",
                      Site:"",
                      Plant:"",
                      Unit__Group:"",
                      Unit:"",
                      Sub__Unit:"",
                      Report_Number:"",
                      Project_Number:"",
                      Project_Description:"",
                      General_Notes: ""
                    }))
                  }
                  >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;