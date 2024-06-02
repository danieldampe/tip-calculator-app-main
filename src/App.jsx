import iconDollar from './assets/images/icon-dollar.svg'
import iconPerson from './assets/images/icon-person.svg'
import { useForm } from './hooks/useForm.js'
import { useEffect, useMemo } from 'react'
import { Input } from './components/Input.jsx'
import { Group } from './components/Group.jsx'
import { Output } from './components/Output.jsx'

export default function App () {
  const { formData, setFormData, field, resetFormData, isResetAvailable } = useForm({
    bill: '',
    tip: '',
    customTip: '',
    people: ''
  })

  const isValidNumber = num => !(isNaN(num) || num === Infinity) ? num.toFixed(2) : '0.00'

  useEffect(() => {
    const listener = evt => {
      const { name, value } = evt.target

      if (name === 'customTip') {
        setFormData(prevState => ({
          ...prevState,
          tip: '',
          customTip: value
        }))
      }
    }

    document.addEventListener('focusin', listener)
    return () => document.removeEventListener('focusin', listener)
  }, [setFormData])

  const result = useMemo(() => {
    const { bill, tip, customTip, people } = formData
    const tipAmount = (tip || customTip / 100) * bill
    const newTipAmountPerPerson = tipAmount / people
    const newTotalPerPerson = (+bill + tipAmount) / people

    return {
      tipAmountPerPerson: isValidNumber(newTipAmountPerPerson),
      totalPerPerson: isValidNumber(newTotalPerPerson)
    }
  }, [formData])

  return (
    <div className='max-w-[922px] mx-auto pt-10 md:pt-[min(5%,_75px)] md:pb-[min(18%,_237px)]'>
      <h1 className='flex flex-col items-center gap-y-[.65rem] mb-10 uppercase text-[1.5rem] tracking-[.65rem] text-[#3e6465] md:my-[min(10%,_86px)]'>
        <span>Spli</span>
        <span>Tter</span>
      </h1>
      <div className='flex flex-col justify-center items-center gap-[1.95rem] py-8 rounded-t-3xl bg-white md:flex-row md:items-stretch md:gap-12 md:p-8 md:pl-12 md:rounded-3xl'>
        <div className='flex flex-col gap-y-8 w-[82.65%] md:w-[45.15%] md:gap-y-11'>
          <Input
            label='Bill'
            icon={iconDollar}
            field={field('bill', { pattern: /^\d*\.?\d{0,2}$/ })}
          />
          <Group
            label='Select Tip %'
            values={[0.05, 0.10, 0.15, 0.25, 0.50, null]}
            fieldRadio={field('tip')}
            fieldCustomRadio={field('customTip', { pattern: /^[0-9]*$/ })}
          />
          <Input
            label='Number of people'
            icon={iconPerson}
            field={field('people', { pattern: /^[0-9]*$/ })}
          />
        </div>
        <div className='flex flex-col gap-8 w-[86.45%] p-[1.31rem] pt-9 rounded-2xl bg-very-dark-cyan md:justify-between md:gap-[7.6rem] md:w-[initial] md:flex-grow md:p-[2.5rem]'>
          <div className='flex flex-col gap-6'>
            <Output label='Tip Amount' value={result.tipAmountPerPerson} />
            <Output label='Total' value={result.totalPerPerson} />
          </div>
          <button
            className='text-lg tracking-[.5px] font-bold text-very-dark-cyan uppercase bg-strong-cyan hover:bg-[#9fe8df] disabled:text-[#055c63] disabled:bg-[#0d686d]'
            onClick={resetFormData}
            disabled={!isResetAvailable}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
