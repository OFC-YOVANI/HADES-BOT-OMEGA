import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[❗𝐈𝐍𝐅𝐎❗] write the name of your country or city*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」Location: ${name}\n「 🗺️ 」Country: ${Country}\n「 🌤️ 」Time: ${Weather}\n「 🌡️ 」Temperature: ${Temperature}\n「 💠 」 Low temperature: ${Minimum_Temperature}\n「 📛 」 High temperature  ${Maximum_Temperature}\n「 💦 」Humidity: ${Humidity}\n「 🌬️ 」 Wind: ${Wind}`
m.reply(wea)
} catch {
return "*[❗𝐈𝐍𝐅𝐎❗] No results found, corrobore that shelves your country with your country or city*"}}
handler.help = ['clima *<ciudad/país>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tiempo)$/i
handler.register = true
export default handler
