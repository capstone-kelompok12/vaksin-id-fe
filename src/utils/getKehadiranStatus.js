/**
 * 
 * @param {String} status 
 * @returns 
 */
const getKehadiranStatus = (status) =>{
  if(status === 'Attended'){
    return {kehadiran: 'Hadir', attendColor: 'softSuccess'}
  }
  if(status === 'Absent'){
    return {kehadiran: 'Tidak hadir', attendColor: 'softDanger'}
  }
  return {kehadiran: '', attendColor: ''}
}
export default getKehadiranStatus;