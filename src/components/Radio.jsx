import PropsTypes from 'prop-types'

export function Radio ({ label, name, value, onChange, isChecked }) {
  const handleClick = onChange

  return (
    <button
      className='radio-btn bg-very-dark-cyan hover:text-very-dark-cyan hover:bg-[#9fe8df] data-[checked=true]:text-very-dark-cyan data-[checked=true]:bg-strong-cyan'
      data-checked={isChecked}
      {... { name, value }}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

Radio.propTypes = {
  label: PropsTypes.string,
  name: PropsTypes.string,
  value: PropsTypes.number,
  onChange: PropsTypes.func,
  isChecked: PropsTypes.bool
}
