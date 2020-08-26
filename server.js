
require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



                                                                                                                                                      
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const ownerID =  "681467216474275869";





client.on('message', message => {
  // If the message is '!rip'
  if (message.content === 'الوان') {
    message.delete()
      // Create the attachment using Attachment
      const attachment = new Attachment('https://f.top4top.io/p_16749xesv0.png');
      // Send the attachment in the message channel
      message.channel.send(attachment);
  }
});




const PREFIX = "#";




          

client.on('message', message => {
if (message.content === PREFIX + 'join') {
  message.delete();
  client.emit('guildMemberAdd', message.member || message.guild.fetchMember(message.author));
}
});



const applyText = (canvas, text) => {
const ctx = canvas.getContext('2d');


let fontSize = 32;

do {
  
  ctx.font = `${fontSize -= 10}px sans-serif`;
  //avatar size
} while (ctx.measureText(text).width > canvas.width - 220);


return ctx.font;
};
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'per');
	if (!channel) return

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome.png');
	ctx.drawImage(background, 0, 5, canvas.width, canvas.height);

	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.4, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 99, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 20, 20, 200, 207);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome.png');

	channel.send(' ', attachment);
});


client.on('message', message => {
	let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
	 const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Wrong color number.**`)
.setColor(`000000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
		  if(!a)return;
const embed = new Discord.RichEmbed()
			  
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color has been changed successfully.**`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
	if (!args)return;
setInterval(function(){})
			let count = 0;
			let ecount = 0;
  for(let x = 1; x < 201; x++){
	 
	  message.member.removeRole(message.guild.roles.find("name",`${x}`))
	
	  }
		  message.member.addRole(message.guild.roles.find("name",`${args}`));
  }
  });



client.on ("message", async (Message) => {
var user = Message.mentions.users.first();
    if (!Message.guild
        || Message.author.bot) 
        return false;
    if (Message.content.startsWith("رول")) {
    if (!Message.member.hasPermission("MANAGE_ROLES")) return Message.reply('**You dont have permissions.**`MANAGE_ROLES`');
if (
      Message.mentions.members.first().highestRole.position >=
      Message.member.highestRole.position
    )
      return Message.channel.send(`**:rolling_eyes: -  You can't add role <@${user.id}>.**`);
        var user = Message.mentions.members.first ();
        if (!user) return Message.reply ("**:x: I can't find this member.**");
        var men = Message.mentions.roles.first() || Message.guild.roles.find(r => r.name.startsWith ( Message.content.split(" ").slice(2).join(" ")));
        if (!men) return Message.reply ("**:x: I can't find this role.**");
 
      if (user.roles.get (men.id)) {
        user.removeRole(men).then(() => {
                  return Message.channel.sendMessage(":white_check_mark: Changed roles for" + user + "** Removed **" + men +"  ");
 
        }).catch(err => err.code == 50013 ? Message.channel.send("**This role is above my role.**") : Message.channel.send(err.message))
      } else {
        user.addRole(men).then(() =>{
        Message.channel.sendMessage(":white_check_mark: Changed roles for " + user + "** Added** " + men + "  ")
        }).catch(err => err.code == 50013 ? Message.channel.send("**This role is above my role.**") : Message.channel.send(err.message))
      }
 
    }
})





client.on('message', message => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
  if(message.content === '$rooms') {
    let i = 1;
  const men = message.guild.members.filter(m => m.hasPermission("DEAFEN_MEMBERS") && m.voiceChannel == null && m.presence.status !== 'offline').map(m=>`<@${m.id}>`);
  message.channel.send(men.join(" "),{split:true})
}
})


client.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  client.on('message', message => {
    if (message.content == "مسح") {

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages  => {
          
            message.channel.bulkDelete(messages);
           messages = messages.array().length; // number of messages deleted
          
        })
.then(messagesDeleted => {
            // Logging the number of messages deleted on both the channel and console.
        //    message.channel.sendMessage("**```Deletion of messages successful```** ") .then
          message.delete();
            console.log('```**Deletion of messages successful**```' )
     
      })
          
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
});



 client.on("message", (message) => {
  if (message.content.includes("twitter")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  } 
   });
  
   client.on("message", (message) => {
  if (message.content.includes("snap")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
    
   
});

client.on("message", (message) => {
  if (message.content.includes("discord.com")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  });


client.on("message", (message) => {
  if (message.content.includes("discordapp")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  });



client.on('guildMemberAdd', member => {
    console.log('User' + member.user.tag + 'has joined the server!');
  
    var role = member.guild.roles.find('name', 'user.');
    member.addRole(role);
})




client.on("message", message => {
 if (message.content.startsWith (prefix +  "check")) {
    if(!message.channel.guild) return message.reply('**This command only for servers.**');
    if (!message.member.hasPermission("ADMINISTRATOR")) return
    var arg = message.content.split(` `).slice(1).join(' ');
     if(!arg) return message.channel.send("**name role.**")
    let role = message.guild.roles.find("name", arg) || message.guild.roles.get(arg);
    if(!role) return message.channel.send("**role not here.**");
    let s = 1;
    let mm =  message.guild.members.filter(s => s.roles.get(role.id)).map(n=>`${s++}- <@${n.id}>`);
      message.channel.send(mm.join("\n"),{split:true});
    }
    })


client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(!oldMember.guild) return;
  let loga = "739514394114785290"
  let role1 = "736119936220528688"
  let role2 = "736119936220528684"
  let role3 = "736119936220528685"
  let role4 = "736119936220528683"
  let role5 = "736119936220528682"
  let role6 = "736119936220528681"
  let role7 = "736119936220528680"
  let role8 = "736119936216465487"
  let role9 = "736119936216465486"
  let role10 = "736119936216465485"
  let role11 = "" // Rr.#1835
  let role12 = "" // Rr.#1835
  let role13 = "" // Rr.#1835
  let role14 = "" // Rr.#1835
  let role15 = "" // Rr.#1835
  let role16 = "" // Rr.#1835
  let role17 = "" // Rr.#1835
  let role18 = "" // Rr.#1835
  let role19 = "" // Rr.#1835
  let role20 = "" // Rr.#1835
  let role21 = "" // Rr.#1835
  let role22 = "" // Rr.#1835
  let role23 = "" // Rr.#1835
    var logChannel = oldMember.guild.channels.get(loga);
    if(!logChannel) return;
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
     if(oldMember.roles.size < newMember.roles.size) {
     if(userID == '685926339617751048'     // ايديات الي ييقدرون يعطون هلرتبة
      || userID == '681467216474275869'
      || userID == '739477353549398016') return;
     if(oldMember.roles.get(role1) && !newMember.roles.get(role1) || !oldMember.roles.get(role1) && !newMember.roles.get(role1) || oldMember.roles.get(role1) && newMember.roles.get(role1)) {
       } else {
        let rr1 = oldMember.guild.roles.get(role1)
        newMember.removeRole(rr1 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
        logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
       }
     if(oldMember.roles.get(role2) && !newMember.roles.get(role2) || !oldMember.roles.get(role2) && !newMember.roles.get(role2) || oldMember.roles.get(role2) && newMember.roles.get(role2)) {
     } else {
     let rr2 = oldMember.guild.roles.get(role2)
     newMember.removeRole(rr2 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 2
     if(oldMember.roles.get(role3) && !newMember.roles.get(role3) || !oldMember.roles.get(role3) && !newMember.roles.get(role3) || oldMember.roles.get(role3) && newMember.roles.get(role3)) {
     } else {
     let rr3 = oldMember.guild.roles.get(role3)
     newMember.removeRole(rr3 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 3
     if(oldMember.roles.get(role4) && !newMember.roles.get(role4) || !oldMember.roles.get(role4) && !newMember.roles.get(role4) || oldMember.roles.get(role4) && newMember.roles.get(role4)) {
     } else {
     let rr4 = oldMember.guild.roles.get(role4)
     newMember.removeRole(rr4 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 4
     if(oldMember.roles.get(role5) && !newMember.roles.get(role5) || !oldMember.roles.get(role5) && !newMember.roles.get(role5) || oldMember.roles.get(role5) && newMember.roles.get(role5)) {
     } else {
     let rr5 = oldMember.guild.roles.get(role5)
     newMember.removeRole(rr5 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 5
     if(oldMember.roles.get(role6) && !newMember.roles.get(role6) || !oldMember.roles.get(role6) && !newMember.roles.get(role6) || oldMember.roles.get(role6) && newMember.roles.get(role6)) {
     } else {
     let rr6 = oldMember.guild.roles.get(role6)
     newMember.removeRole(rr6 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 6
     if(oldMember.roles.get(role7) && !newMember.roles.get(role7) || !oldMember.roles.get(role7) && !newMember.roles.get(role7) || oldMember.roles.get(role7) && newMember.roles.get(role7)) {
     } else {
     let rr7 = oldMember.guild.roles.get(role7)
     newMember.removeRole(rr7 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 7
     if(oldMember.roles.get(role8) && !newMember.roles.get(role8) || !oldMember.roles.get(role8) && !newMember.roles.get(role8) || oldMember.roles.get(role8) && newMember.roles.get(role8)) {
     } else {
     let rr8 = oldMember.guild.roles.get(role8)
     newMember.removeRole(rr8 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 8
     if(oldMember.roles.get(role9) && !newMember.roles.get(role9) || !oldMember.roles.get(role9) && !newMember.roles.get(role2) || oldMember.roles.get(role9) && newMember.roles.get(role9)) {
     } else {
     let rr9 = oldMember.guild.roles.get(role9)
     newMember.removeRole(rr9 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 9
     if(oldMember.roles.get(role10) && !newMember.roles.get(role10) || !oldMember.roles.get(role10) && !newMember.roles.get(role10) || oldMember.roles.get(role10) && newMember.roles.get(role10)) {
     } else {
     let rr10 = oldMember.guild.roles.get(role10)
     newMember.removeRole(rr10 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 10
    if(oldMember.roles.get(role11) && !newMember.roles.get(role11) || !oldMember.roles.get(role11) && !newMember.roles.get(role11) || oldMember.roles.get(role11) && newMember.roles.get(role11)) {
     } else {
     let rr11 = oldMember.guild.roles.get(role11)
     newMember.removeRole(rr11 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 11
    if(oldMember.roles.get(role12) && !newMember.roles.get(role12) || !oldMember.roles.get(role12) && !newMember.roles.get(role12) || oldMember.roles.get(role12) && newMember.roles.get(role12)) {
     } else {
     let rr12 = oldMember.guild.roles.get(role12)
     newMember.removeRole(rr12 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 12
    if(oldMember.roles.get(role13) && !newMember.roles.get(role13) || !oldMember.roles.get(role13) && !newMember.roles.get(role13) || oldMember.roles.get(role13) && newMember.roles.get(role13)) {
     } else {
     let rr13 = oldMember.guild.roles.get(role13)
     newMember.removeRole(rr13 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // tkrar
         if(oldMember.roles.get(role14) && !newMember.roles.get(role14) || !oldMember.roles.get(role14) && !newMember.roles.get(role14) || oldMember.roles.get(role14) && newMember.roles.get(role14)) {
     } else {
     let rr14 = oldMember.guild.roles.get(role14)
     newMember.removeRole(rr14 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 14
    if(oldMember.roles.get(role15) && !newMember.roles.get(role15) || !oldMember.roles.get(role15) && !newMember.roles.get(role15) || oldMember.roles.get(role15) && newMember.roles.get(role15)) {
     } else {
     let rr15 = oldMember.guild.roles.get(role15)
     newMember.removeRole(rr15 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 15
    if(oldMember.roles.get(role16) && !newMember.roles.get(role16) || !oldMember.roles.get(role16) && !newMember.roles.get(role16) || oldMember.roles.get(role16) && newMember.roles.get(role16)) {
     } else {
     let rr16 = oldMember.guild.roles.get(role16)
     newMember.removeRole(rr16 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 16
         if(oldMember.roles.get(role17) && !newMember.roles.get(role17) || !oldMember.roles.get(role17) && !newMember.roles.get(role17) || oldMember.roles.get(role17) && newMember.roles.get(role17)) {
     } else {
     let rr17 = oldMember.guild.roles.get(role17)
     newMember.removeRole(rr17 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 17
    if(oldMember.roles.get(role18) && !newMember.roles.get(role18) || !oldMember.roles.get(role18) && !newMember.roles.get(role18) || oldMember.roles.get(role18) && newMember.roles.get(role18)) {
     } else {
     let rr18 = oldMember.guild.roles.get(role18)
     newMember.removeRole(rr18 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 18
    if(oldMember.roles.get(role19) && !newMember.roles.get(role19) || !oldMember.roles.get(role19) && !newMember.roles.get(role19) || oldMember.roles.get(role19) && newMember.roles.get(role19)) {
     } else {
     let rr19 = oldMember.guild.roles.get(role19)
     newMember.removeRole(rr19 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 19
         if(oldMember.roles.get(role20) && !newMember.roles.get(role20) || !oldMember.roles.get(role20) && !newMember.roles.get(role20) || oldMember.roles.get(role20) && newMember.roles.get(role20)) {
     } else {
     let rr20 = oldMember.guild.roles.get(role20)
     newMember.removeRole(rr20 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 20
    if(oldMember.roles.get(role21) && !newMember.roles.get(role21) || !oldMember.roles.get(role21) && !newMember.roles.get(role21) || oldMember.roles.get(role21) && newMember.roles.get(role21)) {
     } else {
     let rr21 = oldMember.guild.roles.get(role21)
     newMember.removeRole(rr21 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 21
    if(oldMember.roles.get(role22) && !newMember.roles.get(role22) || !oldMember.roles.get(role22) && !newMember.roles.get(role22) || oldMember.roles.get(role22) && newMember.roles.get(role22)) {
     } else {
     let rr22 = oldMember.guild.roles.get(role22)
     newMember.removeRole(rr22 , "رتبة محضورة ، ممنوع تعطيها لأحد.");
     logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`);
     } // 22
     if(oldMember.roles.get(role23) && !newMember.roles.get(role23) || !oldMember.roles.get(role23) && !newMember.roles.get(role23) || oldMember.roles.get(role23) && newMember.roles.get(role23)) {
     } else {
      let rr23 = oldMember.guild.roles.get(role23) // Rr.#1835
      newMember.removeRole(rr23 , "رتبة محضورة ، ممنوع تعطيها لأحد."); // Rr.#1835
      logChannel.send(`<@${userID}> ماتقدر تعطي احد رول الرجاء التواصل مع مسؤول الرول`); // Rr.#1835
     } // Rr.#1835
    } // Rr.#1835
  }) // Rr.#1835
  }); // Rr.#1835



client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!ownerID.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "setgame")) {
    client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark: Done. **`);
  } else if (message.content.startsWith(prefix + "setname")) {
    client.user.setUsername(argresult);
    message.channel.sendMessage(
      `**:white_check_mark: Done Changed Name To ${argresult}**`
    );
  } else if (message.content.startsWith(prefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**:white_check_mark: Done Changed Avatar. **`);
  } else if (message.content.startsWith(prefix + "setstream")) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark: Done.**`);
  }
});





//كود تغيير الحالة
/*
let statuses = ['made with love','by A39aR','Urray ..'];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
 setInterval(function() {
   let status = statuses [Math.floor(Math.random()*statuses.lenth)];
   client.user.setPresence({ game: { name: status}, status: 'idle'})
   client.user.setPresence({ activity: { name: status}, status: 'idle'});
}, 10000)
});
*/



const activities_list = [ 
  "made",
 // "made with love by A39aR",
    "some days .."
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
 // client.user.setStatus("idle");
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 6000);
  client.user.setStatus("idle");// Runs this every 10 seconds.
});

client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
       if(message.content.split(' ')[0].toLowerCase() == '#avatarserver') {
          if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ${message.guild.name}  Icon !`)

.setColor('#36393e')
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



 
client.on('message', message => {
if (message.content.startsWith("#bas")) {
  if (!ownerID.includes(message.author.id)) return;
      message.delete();
message.guild.fetchBans()
 .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
.catch(console.error);
}
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {
                  if (!ownerID.includes(message.author.id)) return;
    message.delete();
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**By A39aR | Found ${message.guild.members.filter(m=>m.user.bot).size} bots inServer**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)
 
}
 
 
});
 

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content == prefix + "ping") {
 message.channel.send('› pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\n› Time taken: ${PinG} ms.\n› Discord API: ${ApL} ms.\`\`\``);
 })
  }  
 });


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `:white_check_mark: **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `:x: **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});
 
client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("RANDOM")
     //   .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**Name :**   ", pixelbot.author.username, true)
        .addField("**Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**Total invites :**    ", inviteCount, true)
        .setTimestamp();// itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); 

client.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('Mention a User').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Ban This User").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});




client.on("message", message => {
  if (message.content.split(" ")[0] === "#avatar") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
       // .addField("Avatar Link"+ .avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar Developed By brutalperson`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`يجب عليك وضع ايدي الشخص`));
  } // Julian
}); // Codes - Toxic Codes

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

////كود معلومات السيرفر
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: **Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " Text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});






client.on('message', message => {
 if(!message.channel.guild) return;
  if (message.author.kick) return;
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("Mention a User").then(message => message.delete(4000))
  if(!reason) return message.reply ("Supply a Reason").then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Kick This User").then(message => message.delete(4000))

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Action : Kick')
  .setColor("BLACK")
  .setTimestamp()
  .addField("User :",  `${user.tag}`)
  .addField("By :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
            .setColor('#36393e')
  message.channel.send(`${user.tag} Has Been Kicked`).then(message => message.delete(10000))
  message.guild.channels.find('name','log').send({embed : banembed})
}
});



client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "تكلم") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** you dont gave permission 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("**mention user ..**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      
      .addField(
        "user has been unmuted : ",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. User has been unmuted  **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. user has been unmuted**")
            .catch(console.error);
        });
    }
  }
});

////كود ميوت او اسكات
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "اسكت") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("**Mention User**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
    
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. user has been muted**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. user has been muted**")
            .catch(console.error);
        });
    }
  }
});

//// كود فتح واغلاق الروم
client.on("message", message => {
  if (message.content === "قفل") {
    if (!message.channel.guild)
      return message.reply(" Guild Command!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("no perm");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**Channel Locked :no_entry: **");
      });
  }
  if (message.content === "فتح") {
    if (!message.channel.guild)
      return message.reply("Guild Command!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("no perm");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**Chanel Unlocked :white_check_mark:**");
      });
  }
});

client.on("error", err => {
  console.log(err);
});



//=============================== - [ Security ] - ===================================

var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 1 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 1, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 1, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 1, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 2, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 2, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});

client.on("reachLimit", (limit)=> {
	
  let log = limit.guild.channels.find( channel => channel.name === "prem");
  const loghack = new Discord.RichEmbed()
       .setAuthor(`${limit.user.tag}`, limit.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${limit.user.id}> Trying to hack but i remove all his roles :*  `)
       .setTimestamp();
  log.send(loghack);
 // log.send("@everyone");
  limit.guild.owner.send(`<@${limit.user.id}>`+"\n**Trying to Hack (!)**")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith("اسحب")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("**Mention the user you want to move**");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            
         //   .setColor("#000000")
         //   .setDescription(
          //    `✅ You Have Moved <@${usermentioned}> To Your Channel `
       //     );
         var embed = new Discord.RichEmbed()
          //  .setTitle(`You are Moved in ${message.guild.name} `)
          //  .setColor("RANDOM")
        //    .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setlogenum")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
    .addField("Developed By brutalperson")
     .setThumbnail(message.author.avatarURL)
    .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "logenumonoff")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  
  
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (!ownerID.includes(message.author.id)) 
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
  if (!ownerID.includes(message.author.id)) 
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});

const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const prettySeconds = require("pretty-seconds");
const fsn = require("fs-nextra");

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8")); //ملف تخزين كود الويلكم

//كود الويلكم

client.on("guildMemberAdd", async member => {
  if (!welcome) return;
  if (!welcome[member.guild.id]) return;
  var findingWlcChannel = welcome[member.guild.id]
    ? welcome[member.guild.id].channel
    : "null";
  const channel = await member.guild.channels.find(
    r => r.name == findingWlcChannel
  );
  if (!channel) return;
  if (channel) {
    const imageUrlRegex = /\?size=2048$/g; ///تعديل غير اساسي
    const wlcImage = await fsn.readFile("./welcome.png"); //اسم الصورة
    let result = await fetch(
      member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128")
    );
    if (!result.ok) throw new Error("Failed to get the avatar!");
    let avatar = await result.buffer();

    let name =
      member.user.username.length > 12
        ? member.user.username.substring(0, 11) + "..."
        : member.user.username;

    // تعديل غير اساسي : هنا خيارات الصورة لو تبى تغيرها

    //Welcome Image (background)
    var imageWidth = 500; //عرض الصورة
    var imageHeight = 266; //ارتفاع الصورة

    //Avatar
    var imageX = 250; //X coordinate
    var imageY = 145; //Y coordinate
    var imageRadius = 110; //نصف قطر الصورة الدائرية

    //Member Name
    var nameSize = "12pt"; //حجم خط الاسم
    var nameKind = "Source Sans Pro (OT1)"; //نوع خط الاسم
    var nameColor = "#ff9933"; //لون خط الاسم

    //Name Position
    var nameX = 247; //position x
    var nameY = 275; //position y

    let buffer = await new Canvas(500, 300)
      .addImage(wlcImage, 0, 0, imageWidth, imageHeight)
      .addCircularImage(avatar, imageX, imageY, imageRadius)
      .setTextAlign("center")
      .setTextFont(`${nameSize} ${nameKind}`)
      .setColor(nameColor)
      .addText(name, nameX, nameY)
      .toBuffer();

    const filename = `Baron-wlc-${member.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await channel.send(attachment);
  }
});

//تحديد روم الويلكم
const wait = require("util").promisify(setTimeout);
client.on("ready", async () => {
  wait(1000);

  await client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
var gg2;

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off",
      channel: null
    };

  if (welcome[member.guild.id].by === "Off") return;
  let channel = member.guild.channels.find(
    c => c.name == welcome[member.guild.id].channel
  );
  if (!channel) return;

  await member.guild.fetchInvites().then(async guildInvites => {
    const ei = await invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = await guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter1 = await invite.inviter;
    const inviter =
      (await client.users.get(invite.inviter.id)) ||
      client.users.get(member.guild.owner.user.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return console.log("I can't find welcomeChannel");
    let gg1 = await welcome[member.guild.id].msg.replace(
      "[member]",
      `<@!${member.id}>`
    );
    if (!inviter1 || !inviter1.id) {
      gg2 = await gg1.replace("[inviter]", `<@${member.guild.ownerID}>`);
    } else {
      gg2 = await gg1.replace("[inviter]", `<@${inviter1.id}>`);
    }
    setTimeout(() => {
      logChannel.send(`${gg2}`);
    }, 2000);
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  });
});
client.on("message", async message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!welcome[message.guild.id]) {
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField(
          "Default Message:",
          `**Welcome [member], You Joined by [inviter] invite**`
        )
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: "On",
        msg: `**Welcome [member], You Joined by [inviter] invite**`
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    } else if (welcome[message.guild.id].channel) {
      let msg = await welcome[message.guild.id].msg;
      let by = await welcome[message.guild.id].by;
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField("Default Message:", msg)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: by,
        msg: msg
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    }
  }
});

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setMessage")) {
    if (!welcome[message.guild.id] || !welcome[message.guild.id].onoff == "On")
      return message.channel.send(
        `**please type \`${prefix}setWelcomer\` first **`
      );
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    let room = welcome[message.guild.id].channel;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(
        `**من فضلك اكتب رسالة الترحيب الان:
لعمل منشن للعضو او الشخص الذى قام بدعوتة
Ex : 
\`[member] Joined the server by [inviter]\`**`
      )
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            msg.edit("**تم الاعداد بنجاح**").then(msg => {
              let embed = new Discord.RichEmbed()
                .setTitle("**Done The Welcome Msg Has Been Setup**")
                .addField("Message:", `${thisMessage}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`${client.user.username}`);
              message.channel.sendEmbed(embed);
              welcome[message.guild.id] = {
                channel: room,
                onoff: "On",
                by: "On",
                msg: thisMessage
              };
              fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
                if (err) console.error(err);
              });
            });
          });
      });
  }
});
