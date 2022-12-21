import moment from "moment"

/**
 * 
 * @param {String} StartSession 
 * @param {String} EndSession 
 * @param {Number} CapacityLeft
 * @param {String} Date
 * @returns
 */

const getSessionStatus = ({StartSession, EndSession, CapacityLeft, Date, IsClose}) =>{
  let status = ''
  let color = ''

  const start = moment(Date).set('hour', Number(StartSession.slice(0,2)))
  const end = moment(Date).set('hour', Number(EndSession.slice(0,2)))

  if(CapacityLeft > 0){
    status = 'Tersedia'
    color = 'softInfo'
  }
  if(CapacityLeft <= 0){
    status = 'Penuh'
    color = 'softSuccess'
  }
  if(moment().isAfter(end) || IsClose){
    status = 'Selesai'
    color = 'softNeutral'
  }
  if(moment().isBetween(start, end)){
    status = 'Berlangsung'
    color = 'softWarning'
  }

  return {status, color}
}

export default getSessionStatus;