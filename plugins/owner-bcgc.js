let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw '[❗] enter the text you want to communicate'
    
    for (let i of anu) {
    await delay(500)
    conn.relayMessage(i, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: '[❗communicator❗]\n\n' + pesan + '\n\n This is an official communicator',
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {}).catch(_ => _)
    }
  m.reply(`[❗] Send to ${anu.length} a groups`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
export default handler
