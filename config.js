const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_20_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx3SVZzS3AzaDNnY2xSKzlEdmRGQWJaSHIxME1iQ1piK25pbHA0MnBXeDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4OTUzMjU4Mzk1MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVDNzZCNkFENzk2RjQ3MkJDNTQxMDkxOURGMDFDNUU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjUzODg0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5odVphRkhUUVJLNGRMdzZTemFpUHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFjMTFmN2EtNWEzNi00YWJhLTk4MTktOTBiMTViYTdjMTMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjU0LFxuICAgICAgMjMsXG4gICAgICAxMTgsXG4gICAgICAyMzUsXG4gICAgICAyMTEsXG4gICAgICAyNDksXG4gICAgICA3MixcbiAgICAgIDIzNSxcbiAgICAgIDE4NCxcbiAgICAgIDMyLFxuICAgICAgNjMsXG4gICAgICAyLFxuICAgICAgMTU1LFxuICAgICAgMTMwLFxuICAgICAgMzQsXG4gICAgICAyMzEsXG4gICAgICA5MCxcbiAgICAgIDI0MSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAxNixcbiAgICAgIDEyNCxcbiAgICAgIDIyNSxcbiAgICAgIDE2MSxcbiAgICAgIDExOCxcbiAgICAgIDE5MSxcbiAgICAgIDE2OCxcbiAgICAgIDEyNCxcbiAgICAgIDIzNCxcbiAgICAgIDE0MyxcbiAgICAgIDE4NCxcbiAgICAgIDk0LFxuICAgICAgNTAsXG4gICAgICA0OSxcbiAgICAgIDczLFxuICAgICAgMTA3LFxuICAgICAgNyxcbiAgICAgIDI0NSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOWFdBUDdQM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4OTUzMjU4Mzk1MDg6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2MzUwOTA0NzE3MzEzOjgwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1JUkFDTEUgSE9TRUEgU0FNVUVMXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWppaHZFR0VOS2J3YklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzUlFHaWFIbEZ6bXlseFczTEVOcysrU1JVQVlkQTJFRlc2N2xCM3J3WTNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxLbytrOHBqalorZXhPUnNBOXVWWWRXNlhxU3QvK3NyekQxVU5lWFR0Sk1vbVZBRDJHZ0Vyalh5aitWek1Dc0NmQTN5MjRpcS9HeHE1SGpaNCt5TkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhuSjZ1WWs3R0k3SUl6SFc5S1diV3VvYWZkNGxlM3E5bVlmNWwwekI5SDN2d0k2alRYUTNJc3djNGxvQk8xcWtwc3k1RmQ2UmtnS3NNd1VUZnZxMGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODk1MzI1ODM5NTA4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTM4ODM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTZzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMamIzMmhoT0NNOXgzcjJxdmU0MTlDK1FMS2VHUVdNNmhHUEhzQlZrazdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDc3MDE3NjcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
