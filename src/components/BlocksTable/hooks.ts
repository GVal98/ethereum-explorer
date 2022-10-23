import { useIntersection } from '@mantine/hooks'
import { useEffect, useRef, useState } from 'react'

function useInfiniteScroll(defaultBlocksCount: number) {
  const [blocksCount, setBlocksCount] = useState(defaultBlocksCount)
  const containerRef = useRef()

  const { ref, entry } = useIntersection({
    root: containerRef.current,
  })

  useEffect(() => {
    if (entry?.isIntersecting) setBlocksCount(blocksCount + defaultBlocksCount)
  }, [entry?.isIntersecting, defaultBlocksCount, blocksCount])

  return { blocksCount, targetRef: ref, containerRef: containerRef.current }
}

export { useInfiniteScroll }
