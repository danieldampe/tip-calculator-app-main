import { useEffect, useState } from 'react'

export const useForm = initialValues => {
  const [formData, setFormData] = useState(initialValues)
  const [isResetAvailable, setIsResetAvailable] = useState(false)
  const setProp = ({ name, value }) => setFormData({ ...formData, [name]: value })
  const resetFormData = () => setFormData(initialValues)
  const field = (name, props) => {
    const onChange = evt => {
      const { value } = evt.target
      if (props) {
        const { pattern } = props
        if (!pattern.test(value)) return
      }
      setProp({ name, value })
    }

    return ({
      name,
      value: formData[name],
      onChange
    })
  }

  useEffect(() => {
    const newIsResetAvailable = Object.values(formData).some(elm => elm !== '')
    setIsResetAvailable(newIsResetAvailable)
  }, [formData])

  return { formData, setFormData, field, resetFormData, isResetAvailable }
}
