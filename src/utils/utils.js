export default {
    formateDate(datetime){
        if(!datetime) return ''
        let date = new Date(datetime)
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
}