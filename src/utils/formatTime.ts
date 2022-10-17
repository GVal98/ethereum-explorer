function formatTime(timestamp : (string | number)) {
  return (new Date(+timestamp * 1000)).toLocaleString()
}

export { formatTime }
