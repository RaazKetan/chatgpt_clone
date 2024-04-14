'use client'

import useSwr from 'swr'
import Select from 'react-select';


const fetchModels = ()=> fetch('/api/auth/getEngines').then(res=>res.json())


function ModalSelection() {
    const {data:models, isLoading} = useSwr('models', fetchModels)

    const {data:model,mutate:setModel} = useSwr('model', {
        fallbackData:'text-davinci-003'
    })

  return (
    <div className='mt-2'>
      <Select className='mt-2'
      options={models?.modelOptions}
      defaultValue={model}
      placeholder = {model}
    isSearchable
    isLoading={isLoading}
    menuPosition='fixed'
    classNames={
        {
            control:(state)=>"bg-[#434654] border-[#434654]"
        }
    }
      />
    </div>
  )
}

export default ModalSelection
