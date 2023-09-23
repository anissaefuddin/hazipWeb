'use client'
/* Core */
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Interface */
import { appDataSliceState, ModeData, Overview  } from '../../../lib/redux/slices/interfaceData';


/* Instruments */
import {
  dataAppSlice,
  useSelector,
  useDispatch,
  selectDataApp,
  addDataOverViewAsync,
} from '@/lib/redux'
import styles from './app.module.css'

export const App = () => {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const data = useSelector(selectDataApp)
  const [StudyNama, setStudyNama] = useState("")
  const [StudyCoordinator, setStudyCoordinator] = useState("")

  return (
    <div >
      <h3>Test Input data Over View</h3>
      <input
          aria-label="Set Data Over View"
          value={StudyNama}
          onChange={(e) => setStudyNama(e.target.value)}
      />
      <input
          aria-label="Set Data Over View"
          value={StudyCoordinator}
          onChange={(e) => setStudyCoordinator(e.target.value)}
      />
      <div>
        
        <button
          className={styles.button}
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
          Simpan data Over view
        </button>
      </div>
    </div>
  )
}
