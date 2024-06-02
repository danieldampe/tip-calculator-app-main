/* eslint-disable react/prop-types */
export function Output ({ label, value }) {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col md:justify-center'>
        <span>{label}</span>
        <span className='text-[0.8rem] text-dark-grayish-cyan'>/ person</span>
      </div>
      <div className='text-[1.95rem] text-strong-cyan md:text-[2.85rem]'>${value}</div>
    </div>
  )
}
