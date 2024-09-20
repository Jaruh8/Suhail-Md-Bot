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
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_19_28_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJuTFhMYU5MWXlnam5mWEp6SFR0aWNyT1Fub1FEZE52WnVnTTEveUh5UEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm03cElqc1VXUldPVGw5UUxROXM4c2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRkOGY1MWYtM2U5NS00NTY3LTk2YzQtZDVlMWQ5MGVjNGUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDM3LFxuICAgICAgNzksXG4gICAgICAxNjksXG4gICAgICAxMTAsXG4gICAgICA0NixcbiAgICAgIDUwLFxuICAgICAgMTIxLFxuICAgICAgNCxcbiAgICAgIDg0LFxuICAgICAgNCxcbiAgICAgIDIwMyxcbiAgICAgIDI3LFxuICAgICAgODUsXG4gICAgICAxNDEsXG4gICAgICAxNzcsXG4gICAgICAxMTAsXG4gICAgICAxNTUsXG4gICAgICAxMDAsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDEzLFxuICAgICAgMTY2LFxuICAgICAgMTE2LFxuICAgICAgODcsXG4gICAgICAyMDUsXG4gICAgICA5OSxcbiAgICAgIDQwLFxuICAgICAgNzYsXG4gICAgICA2NyxcbiAgICAgIDEzMSxcbiAgICAgIDEwNSxcbiAgICAgIDExMCxcbiAgICAgIDE2MSxcbiAgICAgIDEyNyxcbiAgICAgIDExNCxcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICAxODgsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSldXOFFUM0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjUyMjAyODc6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTUyMDAyODkwOTU5Nzo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVFBrYTRCRU1TWnQ3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlZZ3hycGpwcDZ0WCtsWXgvcFlDSEtzSzRITjV3dm1TSTVjenA2dzFORW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTV6NXFRQjg5VVhjZHhpRk43eFJYMVZzOEpoenNVZExJM0FBRjNCMkhEQ1hwYkxvVU5YYXJ4U3oySUo4WlJoY1JKZEZkVVUwcEJwd1FreXo0ZVE1Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDJ0V09NSzNpZW01eGZkbkE2MkRxUFFBaVJOdFpmcHc3dzEyaTlhMDJGUTJsRUNSVUZISisxQ0RBV1JYQzVHKzdjUHRVY2U0TURRUjNQRFk1RUxRREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNTIyMDI4Nzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2ODYwNDg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
