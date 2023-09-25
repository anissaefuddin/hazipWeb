'use client'
import { useState } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
type TeamMember = {
    ID:	string;
    Name?	:	string;
    Company?	:	string;
    Title?	:	string;
    Department?	:	string;
    Expertise?	:	string;
    Experience?	:string;
    Phone_Number?	:	string;
    E__Mail_Address?	:	string;
    Team_Member_Comments?	:string;
  }
interface TeamMembersFormProps {
  teamMembers: TeamMember[];
  onSubmit: (data: TeamMember) => void;
}


const TeamMembersForm = ({ teamMembers, onSubmit }: TeamMembersFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TeamMember>();
  const handleFormSubmit: SubmitHandler<TeamMember> = (data) => {
    onSubmit(data);
    reset();
  };

  return (

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label>Name:</label>
          <input {...register('Name', { required: true })} />
          {errors.Name && <span>This field is required</span>}

          <label>Email:</label>
          <input {...register('E__Mail_Address', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.E__Mail_Address && <span>Please enter a valid email address</span>}

          <button type="submit">Add Team Member</button>
        </form>
  );
};

export default TeamMembersForm;

