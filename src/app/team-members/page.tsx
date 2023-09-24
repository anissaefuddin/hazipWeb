'use client'
import { useState } from 'react'

import PageHeader from "@/partials/PageHeader";
import TeamMembers from "src/layouts/components/TeamMembers";
import config from "@/config/config.json";
/* Instruments */
import {
  dataAppSlice,
  useSelector,
  useDispatch,
  selectDataApp,
  addDataOverViewAsync,
} from '@/lib/redux'



const Teammember = () => {
  const dispatch = useDispatch()
  const store = useSelector(selectDataApp)
  const [Name, setName] = useState("")
  return (
    <>
    <PageHeader title="Team Members" />
      <section className="section-sm">
        <div className="container">
        <TeamMembers />
        <table className='table-auto'>
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Departement</th>
              <th className="px-4 py-2">Expertise</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Intro to CSS</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
              <td className="border px-4 py-2">Adam</td>
              <td className="border px-4 py-2">858</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>
    </>
  );
};

export default Teammember;

