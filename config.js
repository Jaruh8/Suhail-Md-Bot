const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025220287";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_17_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJZXZrUGJwT0dVTDVlczl2M283U0xqdVorVTg5cUpwa1VLOXdmaXJRbmJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFNk9xYTViRlJvZWFJR0EtVlB3bmF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU1Zjg0YTdmLWU0MGYtNGY5ZS1hNDAxLWQ5YTg4M2M5ZjFjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxNTcsXG4gICAgICAxLFxuICAgICAgMjA4LFxuICAgICAgMTE1LFxuICAgICAgMjQ1LFxuICAgICAgMjQ3LFxuICAgICAgNTQsXG4gICAgICA5OSxcbiAgICAgIDE1MSxcbiAgICAgIDE5MSxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDExNCxcbiAgICAgIDEzNSxcbiAgICAgIDE0LFxuICAgICAgOTQsXG4gICAgICAxMTMsXG4gICAgICAyOCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTQsXG4gICAgICAxOSxcbiAgICAgIDM3LFxuICAgICAgNyxcbiAgICAgIDQ1LFxuICAgICAgNTIsXG4gICAgICAyNTAsXG4gICAgICAxNTAsXG4gICAgICAxMTIsXG4gICAgICAyNyxcbiAgICAgIDIwLFxuICAgICAgMTI1LFxuICAgICAgNyxcbiAgICAgIDc5LFxuICAgICAgMjQxLFxuICAgICAgNDEsXG4gICAgICAxMjUsXG4gICAgICAxMzMsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODhXQUwzRE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjUyMjAyODc6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTUyMDAyODkwOTU5Nzo1N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKblBrYTRCRU5qUnFiZ0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlZZ3hycGpwcDZ0WCtsWXgvcFlDSEtzSzRITjV3dm1TSTVjenA2dzFORW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkc3VnJrbDBvNUxIdkJWdlhEUUlLb3lsY3kwNnJ5OWJVTVZKTjlJaGRCN1ZYS1UyL3lka1Q5UG9JV1VzVkdWcDJ0M25yL3RwcStVQ0FhSjFmVG5HQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibHBMSGZ2aW1ycENjUThIM3NrZzJHRmxIem1nanBpbWhJb245ZVBIRGFZZkx4V2tHcXNPaFdzZm9ya3JCU0Q4LzJaT3dMYUw2SmNrdS8yRmQzOUM0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNTIyMDI4Nzo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzM1NDUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSU03XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtOC9SVnRwZExJV3VJL0ZoZ1ZLbWt3cjMzMlBqckN5ZDM1eTgxa1kyRUlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2NTE5MzEwNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
