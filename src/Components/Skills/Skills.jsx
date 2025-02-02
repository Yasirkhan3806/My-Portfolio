import React from 'react';
import KeySkills from './KeySkills';
import Services from './Services';
import ButtonsRequired from './ButtonsRequired';

export default function Skills() {
  return (
    <>
    <div className={`flex flex-col gap-8`}>
      <KeySkills/>
      <Services/>
      <ButtonsRequired/>
      </div>
    </>
  )
}
