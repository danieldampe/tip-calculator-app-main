import PropsTypes from 'prop-types'

export function Input ({ label, icon, field }) {
  return (
    <label>
      <div className='mb-[.45rem] text-grayish-cyan'>{label}</div>
      <div className='relative'>
        <img className='absolute top-2/4 left-4 -translate-y-2/4' src={icon} alt='Icon' />
        <input
          className='w-full py-[.35rem] px-4 rounded-md text-right text-very-dark-cyan bg-[#f3f8fb]'
          type='text'
          placeholder='0'
          {...field}
        />
      </div>
    </label>
  )
}

Input.propTypes = {
  label: PropsTypes.string,
  icon: PropsTypes.string,
  field: PropsTypes.object
}
