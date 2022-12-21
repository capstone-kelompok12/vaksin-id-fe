/**
 * 
 * @param {String} status 
 * @returns 
 */
const getBookingStatus = (status) =>{
  if(status === 'OnProcess'){
    return {statusBook: 'Menunggu', statusColor: 'softWarning'}
  }
  if(status === 'Accepted'){
    return {statusBook: 'Telah diterima', statusColor: 'softSuccess'}
  }
  if(status === 'Rejected'){
    return {statusBook: 'Telah ditolak', statusColor: 'softDanger'}
  }
  if(status === 'Cancelled'){
    return {statusBook: 'Dibatalkan', statusColor: 'softNeutral'}
  }
}
export default getBookingStatus;