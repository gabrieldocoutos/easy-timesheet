const prompt = require('prompt');

prompt.start();

prompt.get(['clockInTime', 'workPeriod'], function (err, result) {

  const timeStringToFloat = time => {
    const hours = sliceHour(time) - 1
    const minutes = sliceMinutes(time)
    return hours + minutes / 60;
  }
  
  const sliceHour = hour => Number(hour.slice(0,2 ))

  const sliceMinutes = minutes => Number(minutes.slice(2,4))
  
  const createInitialDate = () => {
    const [year, month, day] = [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
    return { year, month, day }
  }
  
  if (!result.workPeriod) {
      result.workPeriod = '0948'
    }
  
    const { clockInTime, workPeriod } = result
    
    const { year, month, day } = createInitialDate()
    
    const hour = sliceHour(clockInTime) + sliceHour(workPeriod)
    const minutes = sliceMinutes(clockInTime) + sliceMinutes(workPeriod)  
  
    const stopTime = new Date(year, month, day, hour, minutes)
  
    console.log('clock out', stopTime.toLocaleString())
    console.log('salesforce', timeStringToFloat(workPeriod))

  
});

