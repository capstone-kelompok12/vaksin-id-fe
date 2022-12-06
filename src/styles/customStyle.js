export const modalStyle = {
  width: 400,
  height: 'max-content',
  bgcolor: '#FAFAFB',
  maxHeight: '80vh',
  alignItems: 'center',
  overflow: 'auto',
  borderRadius: 2,
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%,-50%)',
  p: 1,
}

export const hideScroller = {
  '&::-webkit-scrollbar':{
    display: 'none'
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none'
}