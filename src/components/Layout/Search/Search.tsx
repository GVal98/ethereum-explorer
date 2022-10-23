import { useState } from 'react'
import { useRouter } from 'next/router'
import { Autocomplete } from '@mantine/core'
import { useSuggestion } from './hooks'
import { Result } from './Result'

function Search() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const suggestion = useSuggestion(value)

  return (
    <Autocomplete
      key={router.asPath}
      value={value}
      onChange={(input) => setValue(input.trim())}
      label="Search"
      placeholder="Block number, transaction hash or address"
      data={suggestion}
      itemComponent={Result}
      mb="xl"
    />
  )
}

export { Search }
