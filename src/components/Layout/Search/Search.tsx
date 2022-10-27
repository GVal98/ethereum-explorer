import { useState } from 'react'
import { useRouter } from 'next/router'
import { Autocomplete } from '@mantine/core'
import { useResult } from './hooks'
import { Result } from './Result'

function Search() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const result = useResult(value)

  return (
    <Autocomplete
      key={router.asPath}
      value={value}
      onChange={(input) => setValue(input.trim())}
      label="Search"
      placeholder="Block number, transaction hash or address"
      data={result}
      itemComponent={Result}
      mb="xl"
    />
  )
}

export { Search }
