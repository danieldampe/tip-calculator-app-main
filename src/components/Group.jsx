import PropsTypes from 'prop-types'
import { Radio } from './Radio.jsx'
import { CustomRadio } from './CustomRadio.jsx'

export function Group ({ label, values, fieldRadio, fieldCustomRadio }) {
  return (
    <div>
      <div className='text-grayish-cyan mb-4'>{label}</div>
      <div className='grid grid-cols-2 gap-[.9rem] md:grid-cols-3'>
        {values.map((elm, index) => {
          const key = 'tip' + index
          const { name, value, onChange } = fieldRadio
          return (
            elm !== null
              ? <Radio
                  key={key}
                  label={elm * 100 + '%'}
                  name={name}
                  value={elm}
                  onChange={onChange}
                  isChecked={elm === +value}
                />
              : <CustomRadio
                  key={key}
                  {...fieldCustomRadio}
                />
          )
        })}
      </div>
    </div>
  )
}

Group.propTypes = {
  label: PropsTypes.string,
  values: PropsTypes.array,
  fieldRadio: PropsTypes.object,
  fieldCustomRadio: PropsTypes.object
}
