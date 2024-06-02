import PropsTypes from 'prop-types'

export function CustomRadio ({ name, value, onChange }) {
  return (
    <input
      className='radio-btn bg-[#f3f8fb] text-very-dark-cyan placeholder:text-dark-grayish-cyan'
      type='text'
      placeholder='Custom'
      {...{ name, value, onChange }}
    />
  )
}

CustomRadio.propTypes = {
  name: PropsTypes.string,
  value: PropsTypes.string,
  onChange: PropsTypes.func
}
