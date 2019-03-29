const Discord = require ('discord.js');
const devs = ['389090790984515594'];
const db = require ('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client ();
const bot = new Discord.Client ();
const giphy = require ('giphy-api') ();
const googl = require ('goo.gl');
const translate = require ('google-translate-api');
const fs = require ("fs");
const canvas = require ("canvas");
const getYoutubeID = require ('get-youtube-id');
const moment = require ("moment");
const {Client, Util} = require ('discord.js');
const UserBlocked = new Set ();
const jimp = require ('jimp');
const math = require ('math-expression-evaluator');
const stripIndents = require ('common-tags'). stripIndents;
const figlet = require ('figlet');
const google = require ('google-it');
const queue = new Map ();
const zalgo = require ('zalgolize');
const fetchVideoInfo = require ('youtube-info');
const YouTube = require ('simple-youtube-api');
const ytdl = require ('ytdl-core');
const youtube = new YouTube ("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require ("sqlite");
const dateFormat = require ('dateformat');
const pretty = require ('pretty-ms')
const prefix = '/';
var table = require ('table'). table
var ti = {}
, spee = {}
, attentions = {};

client.on ('ready', function () {
    var ms = 60000;
    var setGame = ['Dhelp', 'Type Dhelp'];
    var i = -1;
    var j = 0;
    setInterval (function () {
        if (i == -1) {
            j = 1;
        }
        if (i == (setGame.length) -1) {
            j = -1;
        }
        i = i + j;
        client.user.setGame (setGame [i], `http: // www.twitch.tv / barontube`);
    }, ms);
    console.log (`????????? |> Name: $ {client.user.username}`);
 console.log (`` ?????????> Servers: $ {client.guilds.size} `);
 console.log (`` UserName: $ {client.users.size} `);
 console.log (`` ??????????????????????> Channels: $ {client.channels.size} `);
 console.log (`` ???????????????????> Channels: $ {client.channels.size} `);
 console.log ('????????????????????> Id: $ {client.user.id} `);
 console.log ('??????????????????? `);
 console.log ('??????????????????? `);
});
client.on ('message', message => {
if (message.content.startsWith (prefix + 'help')) {/// This is the DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`**
        *** __ General orders __ ***
**
$ {prefix} allbots / Displays all bots to the server
$ {prefix} server / Shows you information about the server
$ {prefix} bot / Displays all bot information
$ {prefix} count / Displays the number of people in the server without a bot
$ {prefix} invites / Displays the number of your subscriptions in the server
$ {prefix} invinfo <invitelink here> / For information about the call
 Example: invinfo m82n8P
$ {prefix} invite-codes / Displays links to the abrasive infects in the server
$ {prefix} cal / calculator
$ {prefix} trans <language> <any thing> / translates you into an applet from any language
$ {prefix} short / Shortens you a large link to a small link
$ {prefix} tag / Write you the word beautifully and large
$ {prefix} google / google search by dscord
$ {prefix} perms / Shows you your posts in the server
$ {prefix} z5rf / Decorates a word or phrase
$ {prefix} rooms / shows you all the rumets to the server with their number
$ {prefix} roles / shows you all the ranks in the server beautifully
$ {prefix} emojilist / shows you all the emojs to the server
$ {prefix} say / repeat your speech to
$ {prefix} image / image server
$ {prefix} members / show you the number of all people cases, number of bots and number of people
$ {prefix} id / information about you
$ {prefix} bans / number of persons excluded
$ {prefix} avatar / your photo or a picture of me
$ {prefix} embed / repeat to say sweetly
$ {prefix} emoji <any things> / to convert any word you say to emoji
$ {prefix} inv / to call bot to server
$ {prefix} support / server support
$ {prefix} contact / send a proposal or to email the owner of the bot
**
  `
, `
        *** __ Administrative Orders __ ***
**
$ {prefix} move @user / to drag the person to your room
$ {prefix} bc / group message to all server members
$ {prefix} bk / group message with
$ {prefix} rolebc <everyone or @role> / Rasal Group Message for a specified rank
$ {prefix} role @user <rank> / to rank for a particular member
$ {prefix} roleremove @user <rank> / To remove a rank from a particular person
$ {prefix} give all <rank> / to rank all
$ {prefix} give humans <rank> to rank only for people
$ {prefix} give bots <rank> / to rank all bots
$ {prefix} hchannel / hide chat
$ {prefix} schannel / Hide hidden chat
$ {prefix} clr <numbr> / clears the number by number
$ {prefix} clear / Clear Chat
$ {prefix} mute @user <time> / Give the member Mute
$ {prefix} unmute @user / to unzip the person
$ {prefix} kick @user <reason> / Expel the person from the server
$ {prefix} ban @user <reason> / The person came from the server
$ {prefix} mutechannel / shatt
$ {prefix} unmutechannel / Open Chat
$ {prefix} dc / Clear all rum
$ {prefix} dr / <Clear All Ranks> You need to have the bot over all the ranks
$ {prefix} ct <name> / Create a chat
$ {prefix} cv <name> / Create a Room Voice
$ {prefix} temp / to create a temporary rom
$ {prefix} delet <name> / Delete the chat or voice file
$ {prefix} make <number> / Create colors with the number of colors
$ {prefix} color <number> / to select a color
$ {prefix} deletecolors <number> / to delete colors
**
   `,`
        *** __ Music orders __ ***
**
$ {prefix} play / To play a song by title or by name
$ {prefix} skip / to rewind the song
$ {prefix} pause / pause the song
$ {prefix} resume / for the vocals of the song after a pause
$ {prefix} vol / to change the pitch to 100 - 0
$ {prefix} stop / to extract the pot from the rum
$ {prefix} np / to see the song being played
$ {prefix} queue / to find the playlist
**
        *** __ Games orders __ ***
 **
$ {prefix} rps / stone paper scissors
$ {prefix} speed / faster typing
$ {prefix} Decoding / decoding game
$ {prefix} Random capitals / capitals
$ {prefix} roll <number> / lot
$ {prefix} Le Khirok in a sweet way

= =. =. =. =. =. =. =. =. =. =. =. =. =. =. =. =. =.
Welcome Welcome to RUM by name
G.setwelcomer <text channel name> To select a welcome rom
$ {prefix} voiceonline / to activate Rum voicemail online
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed ()
    .setColor ('RANDOM')
    .setFooter (`$ $ {page} of $ {pages.length}`)
    .setDescription (pages [page-1])

    message.author.sendEmbed (embed) .then (msg => {

        msg.react ('⏮') .then (r => {
            msg.react ('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector (backwardsFilter, {time: 2000000});
        const forwards = msg.createReactionCollector (forwardsFilter, {time: 2000000});



        backs.son ('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription (pages [page-1]);
            embed.setFooter (`$ $ {page} of $ {pages.length}`);
            msg.edit (embed)
        })
        forwards.on ('collect', r => {
            if (page === pages.length) return;
      
      page ++;
            embed.setDescription (pages [page-1]);
            embed.setFooter (`$ $ {page} of $ {pages.length}`);
            msg.edit (embed)
        })
        })
    })
    }
});

const credits = JSON.parse (fs.readFileSync ("./ creditsCode.json", "utf8"));
const coolDown = new Set ();

client.on ('message', async message => {
    
if (message.author.bot) return;
if (! credits [message.author.id]) credits [message.author.id] = {
    credits: 50
};

let userData = credits [message.author.id];
let m = userData.credits;

fs.writeFile ("./ creditsCode.json", JSON.stringify (credits), (err) => {
    if (err) console.error (err);
  });
  credits [message.author.id] = {
      credits: m + 0.5,
  }
  
    if (message.content.startsWith (prefix + "credit" || prefix + "credits")) {
message.channel.send (`** $ {message.author.username}, your: credit_card: balance is \` \ `$ {userData.credits} \` `. **`);
}
});

client.on ('message', async message => {
    let amount = 250;
    if (message.content.startsWith (prefix + "daily")) {
    if (message.author.bot) return;
    if (coolDown.has (message.author.id)) return message.channel.send (`**: stopwatch: | $ {message.author.username}, your daily: yen: credits refreshes in \` \ `1 Day \ ``. ** `);
    
    let userData = credits [message.author.id];
    let m = userData.credits + amount;
    credits [message.author.id] = {
    credits: m
    };

    fs.writeFile ("./ creditsCode.json", JSON.stringify (userData.credits + amount), (err) => {
    if (err) console.error (err);
    });
    
    message.channel.send (`**: atm: | $ {message.author.username}, you received your: yen: $ {amount} credits! **`) .then (() => {
        coolDown.add (message.author.id);
    });
    
    setTimeout () => {
       coolDown.remove (message.author.id);
    }, 86400000);
    }
});

client.on ('message', message => {
     if (! message.channel.guild) return;
                if (message.content.startsWith (prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botsize = message.guild.members.filter (m => m.user.bot) .map (m => `$ {i ++} - <@ $ {m.id}>`);
          const embed = new Discord.RichEmbed ()
          .setAuthor (message.author.tag, message.author.avatarURL)
          .setDescription (`** Found $ {message.guild.members.filter (m => m.user.bot) .size} bots in this Server **
$ {botssize.join ('\ n')} `)
.setFooter (client.user.username, client.user.avatarURL)
.setTimestamp ();
message.channel.send (embed)

}


});
client.on ('message', function (msg) {
    if (msg.content.startsWith (prefix + 'server')) {
      let embed = new Discord.RichEmbed ()
      .setColor ('RANDOM')
      .setThumbnail (msg.guild.iconURL)
      .setTitle (`** Showing Details Of ** $ {msg.guild.name}`)
      .addField ('' Server Region` ', `[$ {msg.guild.region}]`, true)
      .addField ('' Roles Count` ', `[$ {msg.guild.roles.size}]`, true)
      .addField ('' Members Count` ', `[$ {msg.guild.memberCount}]`, true)
      .addField ('' Online Members` ', `[$ {msg.guild.members.filter (m => m.presence.status ==' online '). size}]`, true)
      .addField ('`Text Channels`',` [$ {msg.guild.channels.filter (m => m.type === 'text'). size}] `, true)
      .dField ('' Voice Channels` ',' [$ {msg.guild.channels.filter (m => m.type === 'voice'). size}] `, true)
      .addField ('' Server Owner` ', `** $ {msg.guild.owner} **`, true)
      .addField ('Server Id`', `** $ {msg.guild.id} **`, true)
      .addField ('Server was created in`', msg.guild.createdAt.toLocaleString ())
      msg.channel.send ({embed: embed})
    }
});
 client.on ('message', message => {
    if (message.content.startsWith (prefix + "bot")) {
    message.channel.send ({
        embed: new Discord.RichEmbed ()
            .setAuthor (client.user.username, client.user.avatarURL)
            .setThumbnail (client.user.avatarURL)
            .setColor ('RANDOM')
            .setTitle ('`` INFO 3bker Community © ``')
            .addField (`` My Ping`` ', [`$ {Date.now () - message.createdTimestamp}` +' MS '], true)
            .addField ('`RAM Usage``,` [$ {(process.memoryUsage (). rss / 1048576) .toFixed ()} MB] `, true)
            .addField (`` servers``, [client.guilds.size], true)
            .addField ('`` channels``, `[$ {client.channels.size}]`, true)
            .addField ('`` Users``, `[$ {client.users.size}]`, true)
            .addField ('`My Name``,` [[$ {client.user.tag}], true)
            .addField ('`My ID``',` [$ {client.user.id}] `, true)
.addField ('`My Prefix``,` [!] `, true)
.addField ('`My Language``,' [Java Script]`, true)
.setFooter ('By | 3bker')
    })
}
});
 client.on ('message', message => {
              if (! message.channel.guild) return;
      if (message.content == 'G.count')

      message.reply (`** $ {message.guild.memberCount} **`);
    });
    client.on ('message', message => {
   if (message.content.startsWith (prefix + "invites")) {
    message.guild.fetchInvites (). then (invs => {
      let user = message.mentions.users.first () || message.author
      let personalInvites = invs.filter (i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce ((p, v) => v.uses + p, 0);
message.channel.send (`$ {user} has $ {inviteCount} invites.`);
});
  }
});
 client.on ("message", async message => {
            if (! message.channel.guild) return;
             if (message.content.startsWith (prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send (": postbox: ** You have sent all the invitation links that you created in your **")
guild.fetchInvites ()
.then (invites => {
invites.forEach (invite => {
if (invite.inviter === message.author) {
codes.push (`discord.gg / $ {invite.code}`)
}
})
}). then (m => {
if (codes.length <0) {
    var embed = new Discord.RichEmbed ()
.setColor ("# 000000")
.addField (`Your invoice codes in $ {message.guild.name}`, `You currently do not have any active invitations!
message.author.send ({embed: embed});
return;
} else {
    var embed = new Discord.RichEmbed ()
.setColor ("# 000000")
.addField (`Your invoice codes in $ {message.guild.name}`, `Invite Codes: \ n $ {codes.join (" \ n ")}`)
message.author.send ({embed: embed});
return;
}
})
}

});
client.on ('message', msg => {
 if (msg.content.startsWith (prefix + 'cal')) {
    let args = msg.content.split ("") .slice (1);
        const question = args.join ('');
    if (args.length <1) {
        msg.reply ('Specify a equation, please.');
} else {let answer;
    try {
        answer = math.eval (question);
    } catch (err) {
        msg.reply (`Error: $ {err}`);
    }
    
    const embed = new Discord.RichEmbed ()
    .addField ("** Input **:", `** $ {question} **`, true)
    .addField ("** Output **:", `** $ {answer} **`, true)
    msg.channel.send (embed) .catch (console.error);

    }
};
});
client.on ('message', message => {
    if (message.content.startsWith ("G.trans")) {
      
    let toTrans = message.content.split ('') .slice (1);
    let language;

    language = toTrans [toTrans.length - 2] === 'to'? toTrans.slice (toTrans.length - 2, toTrans.length) [1] .trim (): undefined;
    if (! language) {
        return message.reply (`Please supply valid agruments. \ n ** Example ** \` G.trans [text] to [language] \ ``);
    }
    let finalToTrans = toTrans.slice (toTrans.length - toTrans.length, toTrans.length - 2) .join ('');
    translate (finalToTrans, {to: language}) then (res => {
            message.channel.send ({embed: {
                color: 3447003,
                author: {
                  name: '3bker Community ©' s translator ',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `** From: ** $ {res.from.language.iso} \ n \` \ `\` $ {finalToTrans} \ `\` \ `\ n ** To: ** $ {language} \ n \ `\` \ `$ {res.text} \` \ `\` `
                  }
                ],
                timestamp: new Date (),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "3bker Community ©"
                }
            }}
            )
    }) .catch (console.error);

    }
});
client.on ('message', message => {
 let args = message.content.split ('') .slice (1);
    if (message.content.startsWith (prefix + 'short')) {
    if (! message.channel.guild) return;

        googl.setKey ('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey ();
        googl.shorten (args.join ('')). then (shorturl => {
            message.channel.send ('' + shorturl)
        }). catch (e => {
            console.log (e.message);
            message.channel.send ('Error!');
            
        });
}
});
client.on ('message', message => {
if (message.content.startsWith (prefix + 'tag')) {
    let args = message.content.split ("") .slice (1);
if (! args [0]) return message.reply ('Please type the text you want');

    figlet (args.join (""), (err, data) => {
              message.channel.send ("` `` "+ data +" `` `")
           })

}
});
client.on ('message', message => {
 let args = message.content.split ('') .slice (1);
    if (message.content.startsWith (prefix + 'google')) {
    const input = args.join ('');

google ({query: input, disableConsole: true}). then (results => {
    return message.channel.send (`\ n \ n ** Title **: $ {results [0] .title} \ n *** Link ***: $ {results [0] .link} \ nDescription: $ {results [0] .snippet} `);
}). catch (error => {
    if (error) throw error;
});

}});
client.on ('message', message => {
if (message.content.startsWith (prefix + 'perms')) {
         if (! message.channel.guild) return;
         var perms = JSON.stringify (message.channel.permissionsFor (message.author) .serialize (), null, 4);
         var zPeRms = new Discord.RichEmbed ()
         .setColor ('RANDOM')
         .setTitle (': tools: Permissions')
         .addField ('Your Permissions:', perms)

                  message.channel.send ({embed: zPeRms});

    }
});
 client.on ('message', message => {
  if (message.author.bot) return;
  if (! message.content.startsWith (prefix)) return;

  let command = message.content.split ("" [0];
  command = command.slice (prefix.length);

  let args = message.content.split ("") .slice (1);
  
 

if (command == "z5rf") {
    let say = new Discord.RichEmbed ()
    .setTitle ('Text emboss:')

   message.reply (`\ n $ {zalgo (args.join (''))}`);
  }

});

client.on ('message', message => {
    if (message.content === "G.rooms") {
        if (message.author.bot) return
                      if (! message.guild) return;

        var channels = message.guild.channels.map (channels => `$ {channels.name},`) .join ('')
        const embed = new Discord.RichEmbed ()
        .setColor ('RANDOM')
        .addField (`$ {message.guild.name}`, `** Rooms: white_check_mark: **`)
        .addField (': arrow_down: Rooms Number.: heavy_check_mark:', `** $ {message.guild.channels.size} **`)
        
.addField (': arrow_down: Rooms Name.: heavy_check_mark ::', `** [$ {channels}] **`)
        message.channel.sendEmbed (embed);
        
    }
});
var AsciiTable = require ('ascii-data-table'). default
client.on ('message', message => {

    if (message.content.startsWith (prefix + "roles")) {
        ros = message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for (let i = 0; i <ros; i ++) {
            if (message.guild.roles.array () [i] .id! == message.guild.id) {
         data.push ([i, `$ {message.guild.roles.filter (r => r.position == ros-i) .map (r => r.name)}`])
        }}
        let res = AsciiTable.table (data)

        message.channel.send (`** \` \ `\` xl \ n $ {res} \ `\` \ `**`);
    }
});

client.on ('message', message => {
    if (message.content.startsWith (prefix + 'emojilist')) {

        const List = message.guild.emojis.map (e => e.toString ()). join ("");

        const EmojiList = new Discord.RichEmbed ()
            .setTitle ('? Emojis')
            .setAuthor (message.guild.name, message.guild.iconURL)
            .setColor ('RANDOM')
            .setDescription (List)
            .setFooter (message.guild.name)
        message.channel.send (EmojiList)

    }
});
client.on ('message', message => {
  if (message.author.bot) return;

  if (! message.content.startsWith (prefix)) return;

  let command = message.content.split ("" [0];
  command = command.slice (prefix.length);

  let args = message.content.split ("") .slice (1);

// + say
  if (command === "say") {
if (! message.channel.guild) return message.channel.send ('** This command is only for servers **'). then (m => m.delete (5000));
  if (! message.member.hasPermission ('ADMINISTRATOR')) return message.channel.send ('** Unfortunately you do not have ** `ADMINISTRATOR`);
          message.delete ()
    message.channel.sendMessage (args.join (""))
  }
  
 

if (command == "embed") {
if (! message.channel.guild) return message.channel.send ('** This command is only for servers **'). then (m => m.delete (5000));
  if (! message.member.hasPermission ('MANAGE_MESSAGES')) return message.channel.send ('** Unfortunately you do not have the authority `` MANAGE_MESSAGES`');
    let say = new Discord.RichEmbed ()
    .setDescription (args.join (""))
    .setColor (0x23b2d6)
    message.channel.sendEmbed (say);
    message.delete ();
    
  }


});
client.on ("message", message => {

          if (! message.channel.guild) return;
   if (message.author.bot) return;
      if (message.content === prefix + "image") {
          const embed = new Discord.RichEmbed ()
  
      .setTitle (`This is ** $ {message.guild.name} ** Photo!`)
  .setAuthor (message.author.username, message.guild.iconrURL)
    .setColor (0x164fe3)
    .setImage (message.guild.iconURL)
    .setURL (message.guild.iconrURL)
                    .setTimestamp ()

   message.channel.send ({embed});
      }
  });
  
   client.on ('message', function (message) {
  if (message.author.bot) return;
                  if (! message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed ()

    .setDescription (`** Members info
: green_heart: online: $ {message.guild.members.filter (m => m.presence.status == 'online'). size}
: heart: dnd: $ {message.guild.members.filter (m => m.presence.status == 'dnd'). size}
: yellow_heart: idle: $ {message.guild.members.filter (m => m.presence.status == 'idle'). size}
: diamond_shape_with_a_dot_inside: membersCount: $ {message.guild.memberCount - message.guild.members.filter (m => m.user.bot) .size}
: bulb: bots: $ {message.guild.members.filter (m => m.user.bot) .size} ** `)
         message.channel.send ({embed});

    }
      });
    client.on ('message', message => {
var args = message.content.split ("") .slice (1);
if (message.content.startsWith (prefix + 'id')) {
var year = message.author.createdAt.getFullYear ()
var month = message.author.createdAt.getMonth ()
var day = message.author.createdAt.getDate ()
var men = message.mentions.users.first ();
let args = message.content.split ('') .slice (1) .join ('');
if (args == '') {
var z = message.author;
} else {
var z = message.mentions.users.first ();
}

let d = z.createdAt;
let n = d.toLocaleString ();
let x;
let y;

if (z.presence.game! == null) {
y = `$ {z.presence.game.name}`;
} else {
y = "No Playing ...";
}
if (z.bot) {
var w = 'BOT';
} else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed ()
.setColor ('RANDOM')
.setTitle (`** INFO ** $ {z.username}`)
.addField ('Your Name`', `** <@` + `$ {z.id}` + `> **`, true)
.addField ('' ID` ',' ** '+' $ ​​{z.id} `+" ** ", true)
.addField ('' Status` ',' ** '+ y +' ** ', true)
.addField ('Acount Type`,' ** '+ w +' ** ', true)
.addField ('Your Tag`', '** #' + `$ {z.discriminator} **`, true)
.addField ('' Your account created in` ', year +' - '+ month +' - '+ day)
.addField ("` Entered the server in` ", message.member.joinedAt.toLocaleString ())
.addField ("` Last Message` ", message.author.lastMessage)

.setThumbnail (`$ {z.avatarURL}`)
.setFooter (message.author.username, message.author.avatarURL)

message.channel.send ({embed});
    if (! message) return message.reply ('** Put the MENASHAN correctly? **')

}
});
client.on ('message', message => {
    if (message.content.startsWith ("G.bans")) {
        message.guild.fetchBans ()
        .then (bans => message.channel.send (`Number of banned persons ** $ {bans.size} **`))
}
});
client.on ('message', message => {
    if (message.content.startsWith ("G.avatar")) {
if (! message.channel.guild) return;
        var mentionned = message.mentions.users.first ();
    var client;
      if (mentionned) {
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed ()
                           .addField ('Requested by:', "<@" + message.author.id + ">")
        .setColor (000000)
        .setImage (`$ {client.avatarURL}`)
      message.channel.sendEmbed (embed);
    }
});
const mapping = {
  '': '',
  '0': ': zero:',
  '1': ': one:',
  (Ii): ': two:',
  (Iii): ': three:',
  (Iv): ': four:',
  (V): ': five:',
  '6': ': six:',
  '7': ': seven:',
  '8': ': eight:',
  '9': ': nine:',
  '!': ': gray_exclamation:',
  '?': ': gray_question:',
  '#': ': hash:',
  '*': ': asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split (' '). forEach (c => {
  mapping [c] = mapping [c.toUpperCase ()] = `: regional_indicator _ $ {c}:`;
});


client.on ('message', async (message) => {
       if (message.content.startsWith (prefix + "emoji")) {
          let args = message.content.split ("") .slice (1);
  if (args.length <1) {
    message.channel.send ('You must provide some text to emojify!');
}

message.channel.send (
    args.join ('')
        .split ('')
        .map (c => mapping [c] || c)
        .join ('')
);
};
});


   client.on ('message', message => {
     if (message.content === "support") {
     let embed = new Discord.RichEmbed ()
  .setAuthor (message.author.username)
  .setColor ("# 9B59B6")
  .addField ("**: gear: Server Support: gear: **", "** https: //discord.gg/xA8s2AUW")
     
     
  message.channel.sendEmbed (embed);
    }
});
client.on ('message', message => {
if (message.author.bot) return;
if (message.content.startsWith (prefix + "contact")) {
if (! message.channel.guild) return;



let args = message.content.split ("") .slice (1) .join ("");


client.users.get ("516473846983950336"). send
    "\ n" + "**" + "The server:" + "**" +
    "\ n" + "**" + "" "+ message.guild.name +" ** "+
    "\ n" + "**" + "The sender:" + "**" +
    "\ n" + "**" + "" "+ message.author.tag +" ** "+
    \ n "+" ** "+" The message: "+" ** "+
    "\ n" + "**" + args + "**")

let embed = new Discord.RichEmbed ()
     .setAuthor (message.author.username, message.author.avatarURL)
     .setDescription (': mailbox_with_mail: Message sent to bot owner successfully')
     .setThumbnail (message.author.avatarURL)
     .setFooter ("By: 3bker")
                                                

message.channel.send (embed);


}
    
});
client.on ('message', message => {
if (! message.channel.guild) return;
if (message.content.startsWith (prefix + 'move')) {
 if (message.member.hasPermission ("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send ("` `To use the command, type this command: '+ prefix +' Drag [USER]` `
}
if (message.member.voiceChannel! = null) {
 if (message.mentions.members.first (). voiceChannel! = null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first (). id;
var embed = new Discord.RichEmbed ()
 .setTitle ("Succes!")
 .setColor ("# 000000")
 .setDescription (`You have dragged <@ $ {usermentioned}> into your phonetic rom?`)
var embed = new Discord.RichEmbed ()
.setTitle (`You are Moved in $ {message.guild.name}`)
 .setColor ("RANDOM")
.setDescription (`** <@ $ {message.author.id}> Moved You To His Channel! \ nServer -> $ {message.guild.name} **`)
 message.guild.members.get (usermentioned) .setVoiceChannel (authorchannel) .then (m => message.channel.send (embed))
message.guild.members.get (usermentioned) .send (embed)
} else {
message.channel.send ("` `Can not drag '+ message.mentions.members.first () +'` This user must be in Rom Vocal` ")
}
} else {
 message.channel.send ("**` `You must be in the audio ROM to drag the member '**)
}
} else {
message.react ("?")
 }}});
 client.on ('message', message => {
  if (! message.channel.guild) return;
if (message.content.startsWith ('abc')) {
if (! message.channel.guild) return message.channel.send ('** This command is only for servers **'). then (m => m.delete (5000));
if (! message.member.hasPermission ('ADMINISTRATOR')) return message.channel.send ('** Unfortunately you do not have ** `ADMINISTRATOR`);
let args = message.content.split ("" .join ("") .slice (2 + prefix.length);
let copy = "3bker Community ©";
let request = `Requested By $ {message.author.username}`;
if () args) return message.reply ('** You must type a word or phrase to send the podcast **'); message.channel.send (`** Are you sure you send the podcast? \ nProudcast content: $ {args} \ ``) .then (msg => {
msg.react ('✅')
.then () => msg.react ('❌'))
.then () => msg.react ('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector (reaction1Filter, {time: 12000});
let reaction2 = msg.createReactionCollector (reaction2Filter, {time: 12000});
reaction1.on ("collect", r => {
message.channel.send (`? | Done ... The Broadcast Message Has Been Sent For $ {message.guild.members.size} Members`) .then (m => m.delete (5000));
message.guild.members.forEach (m => {
var bc = new
Discord.RichEmbed ()
.setColor ('RANDOM')
.setTitle ('Broadcast')
.addField ('Server', message.guild.name)
.addField ('Sender', message.author.username)
.addField ('Message', args)
.setThumbnail (message.author.avatarURL)
.setFooter (copy, client.user.avatarURL);
m.send ({embed: bc})
msg.delete ();
})
})
reaction2.on ("collect", r => {
message.channel.send (`** Broadcast Cancelled. **`) .then (m => m.delete (5000));
msg.delete ();
})
})
}
});
client.on ('message', message => {
   if (! message.channel.guild) return;
if (message.content.startsWith (prefix + 'bk')) {
if (! message.channel.guild) return message.channel.send ('** This command is only for servers **'). then (m => m.delete (5000));
if (! message.member.hasPermission ('ADMINISTRATOR')) return message.channel.send ('** Unfortunately you do not have ** `ADMINISTRATOR`);
let args = message.content.split ("" .join ("") .slice (2 + prefix.length);
let BcList = new Discord.RichEmbed ()
.setThumbnail (message.author.avatarURL)
.setAuthor ('message content $ {args} `)
.setDescription (`Prodcast bmbd \ nprodcast without an executable? \ nYou have a minute to select before canceling the podcast`)
if (! args) return message.reply ('** You must type a word or phrase to send the podcast **'); message.channel.send (BcList) .then (msg => {
msg.react ('??')
.then () => msg.react ('?'))
.then () => msg.react ('??'))
 
Let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
Let EmbedBc = msg.createReactionCollector (EmbedBcFilter, {time: 60000});
let NormalBc = msg.createReactionCollector (NormalBcFilter, {time: 60000});
 
EmbedBc.on ("collect", r => {
message.channel.send (`: ballot_box_with_check: message sent successfully ') then (m => m.delete (5000));
message.guild.members.forEach (m => {
var bc = new
Discord.RichEmbed ()
.setColor ('RANDOM')
.setDescription (`Message: $ {args}`)
.setAuthor (`Server: $ {message.guild.name}`)
.setFooter (`Sender: $ {message.author.username}`)
.setThumbnail (message.author.avatarURL)
m.send ({embed: bc})
msg.delete ();
})
})
NormalBc.on ("collect", r => {
  message.channel.send (`: ballot_box_with_check: message sent successfully ') then (m => m.delete (5000));
message.guild.members.forEach (m => {
m.send (args);
msg.delete ();
})
})
})
}
});
client.on ('message', message => {
      if (message.author.bot) return;
     
      if (message.content.startsWith (prefix + "rolebc")) {
        if (! message.member.hasPermission ("ADMINISTRATOR")) return;
        let args = message.content.split ("") .slice (2);
     var codes = args.join ('')
       
        if (! codes) {
          message.channel.send ("Write message |! rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first ();
                if (! role) {
                  message.reply ("There is no rank with this name")
                    return;
                }
            message.guild.members.filter (m => m.roles.get (role.id)). forEach (n => {
              n.send (
              "" + "" Server: "+" \ n "+"
              `$ {message.guild.name}` + "\ n" +
              "Sender:" + "\ n" + "
              `$ {message.author.tag}` + '\ n "+
              "Message:" + "\ n" + "
              `$ {codes}` + "**"
              )
            })
            message.channel.send (`This message has been sent to $ {message.guild.members.filter (m => m.roles.get (role.id)). size} member`)
        }
    });
client.on ('message', message => {
    if (message.author.boss) return;
    if (! message.content.startsWith (prefix)) return;
    let command = message.content.split ("" [0];
    command = command.slice (prefix.length);
    if (command == "role") {
    if (! message.channel.guild) return;
    if (! message.guild.member (message.author) .hasPermission ("MANAGE_ROLES")) return message.reply ("**: no_entry_sign: You do not have permissions **") .then (msg => msg.delete ( 5000)) ;;
    if (! message.guild.member (client.user) .hasPermission ("MANAGE_ROLES")) return message.reply (.then (msg => msg.delete (5000)) ;;
    let user = message.mentions.users.first ();
    if (message.mentions.users.size < 1) return message.reply('**Mention the Person!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("You must put the name of the rank").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleremove") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention the Person!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("You must put the name of the rank").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'give')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`Rank not in server Confirm name`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`Rank not in server Confirm name`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`You must type the name of the rank`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`Rank not in server Confirm name`);
    message.channel.send(`Please wait until the order is finished`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`The order was completed ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`Rank not in server Confirm name`);
        message.channel.send(`Please wait until the order is finished`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`The order was completed ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`Rank not in server Confirm name`);
        message.channel.send(`Please wait until the order is finished`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
            });
msg.edit(`The order was completed ${message.guild.members.size}`);
});
}
}
}
});
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});
client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Set the number of messages you want to delete ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nNumber of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react(':negative_squared_cross_mark:'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**This is only for servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**You must Mention first!!**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**Unfortunately I do not have authority** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**Please specify the time of the mute**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> He got Muted Successfully and the time of the mute : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **The time passed and the mute is gone**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**You do not have permission to unmute the person**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**You must mention firstّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**That person wasnt muted to get unmuted**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**You unmuted the person successfully**:white_check_mark:");

  return;

  }

});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention someone**");
  if(!reason) return message.reply ("**Type the reason for kicking**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I can't kick someone with a role who is higher than me**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You do not have the required permissions**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**Mention someone**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**The role of the bot must be higher than the person that you want to ban**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.login('NDgwNzM4NTIzNjk2MjAxNzI5.Dl9PIA.48CAMtPWvyvZawa9M-KqwtvVLlY');
client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You do not have permissions__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__The chat is now muted__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You do not have permissions__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__The chat is now unmuted__:white_check_mark:**")
              });
    }
       
});
client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`All ranks have been deleted successfully`")
}// omar jedol / Codes
});
client.on("message", (message) => {
let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "ct") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('A text-channel is created')

}
});
client.on("message", (message) => {
     let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "cv") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('A Voice-channel is created')
}
});
client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "delete") {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  
client.on('message', bz => {
                        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'make')) {
    if(!args) return bz.channel.send('`Please Select Number!`');
             if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
              bz.channel.send(`**Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            bz.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'G.color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
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


client.on('message', message => {
    if(message.content == '^vip-servers') {
             if(!message.author.id === '434845976050794516') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content == "G.Emoji") { 
        if(!message.channel.guild) return message.reply('**This is for servers only**').then(m => m.delete(3000));
    
    const type = require('./emojis.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('You have 15 second answer to the right answer').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('You have 15 second answer to the right answer').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **No one has typed the emoji in the right time**`);
                console.log(`[Game] No one answered the correct answer`);
                    })
                     fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
            })
    }
    });
client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="a";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    }
    if ( message.content == prefix + 'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**This is for servers only**').then(m => m.delete(3000));
 
 
const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`? |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // In this line the code draws the ID that answered first
            points[won.id].points++;
          })
          .catch(collected => { // In case no one answered
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
  Minecult is the best
Name of the server: ${guild.name}
server owner: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});
client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
Nothing in here.
Name of the server: ${guild.name}
server owner: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('G.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });

 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,

 
    if(!message.channel.guild) return message.reply('**This is for servers only**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setTitle(`**${item.type}**`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.setFooter('G.mypoints')
message.channel.sendEmbed(sh);
            let won = collected.first().author; // In this line the code draws the ID that answered first
            points[won.id].points++;
          })
          .catch(collected => { // In case no one answered
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});

 client.on('message', async message => {
  if(message.content.startsWith(prefix + "temp")) {
    await message.channel.send("Send the name of the room").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("Send room duration in minutes to not less than 2 or higher than 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("Time in minutes! just numbersٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("Less than 2 minutes and no more than 180 minutes")
  time = co.first().content
co.first().delete()
  e.edit("Send the type of room text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("Send the number of members who can join")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("The number of members shall be in numbers only");
    limit = coll.first().content
coll.first().delete()

  e.edit("Preparing the room Please wait ...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("Time has elapsed")
    }, Math.floor(time*60000))
    
  })
  e.edit("The rooms were created to enjoy")

})
})
})
})
})

  }
})






const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))   
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
   fs.writeFile('./setWlc.json', JSON.stringify(sWlc), (err) => {
if (err) console.error(err);
})
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", `${sChannel}`);
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./w1.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(400, 200),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 400, 200);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
                                ctx.fillText(member.user.username, 200, 150);
                              
                              //NAMEً
                              ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
      ctx.fillText(`Welcome To Server`, 260, 125);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126); 

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
                          
      })
      })
      
      }
      });
   client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **You do not have sufficient permissions**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **I do not have enough powers**');
  message.channel.send(':white_check_mark:| **The room has been successfully completed**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('You need to be in the voice channel .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			return msg.channel.send('I have no authority to speak in this Room');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I have no authority to speak in this Room');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**I must have 'EMBED LINKS' Permission **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** Has been added to the playlist`);
		} else {
			try {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**Please enter your video number** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					.setFooter("3bker Community ©")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})

					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('No sound selected');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: No search results available ');
				}
			}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel .');
		if (!serverQueue) return msg.channel.send('There is no video to skip');
		serverQueue.connection.dispatcher.end('Successfully Skipped This Video');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel .');
		if (!serverQueue) return msg.channel.send('There is no Video to stop');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Successfully Stopped this Video');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel .');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`:loud_sound: Volume **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: Changed the volume to **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('Nothing is playing Right now.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: Starting the song now : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		let index = 0;
		//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Successfully Paused the music!');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		return msg.channel.send('There is nothing playing.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('Successfully Resumed the music !');
		}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I can't join this room ${error}`);
		}
	} else {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** Successfully Added this song to the playlist!`);
	}
	return undefined;
}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

	serverQueue.textChannel.send(`Started Playing : **${song.title}**`);
}//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const adminprefix = "$vip";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    message.reply("**`only for Bot Owner`**")
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Successfully Changed the Status of the bot **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Successfully Changed the name of the bot `)
return message.reply("**You can not change The name. You must stay for two hours . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Successfully Changed the avatar of the bot`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**Successfully changed the status of the bot  ${argresult}**`)
}

});

client.on("message", message => {
 if (message.content === `${prefix}`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      .setDescription(`
${prefix}play ? Play a song by title or by name
${prefix}skip ? To skip the song
${prefix}pause ? To pause the song
${prefix}resume ? To unpause the song
${prefix}vol ? To change the volume 0 - 100
${prefix}stop ? To get the bot out of the server
${prefix}np ? To know the current song
${prefix}queue ? To see the Playlist
 `)//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    
   }
   });
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('G.users')){
 if(!message.author.id === '434263373077544961') return;
message.channel.sendMessage('Sending the message |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '434845976050794516') return message.reply('** This command is only to the owner of the bot **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Successfully changed the status`)
} else

if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '434845976050794516') return message.reply('**This command is only to the owner of the bot **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :Successfully Changed the status to streaming`)
} else

if (message.content.startsWith(prefix + 'setname')) {
if (message.author.id !== '434845976050794516') return message.reply('** This command is only to the owner of the bot **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Successfully Changed the name`)
  return message.reply("**You can't change the name you must wait 2 hours**");
} else

if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '434845976050794516') return message.reply('** This command is only to the owner of the bot **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : Successfully changed the avatar`);
} else


if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '434845976050794516') return message.reply('** This command is only to the owner of the bot **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Successfully Changed the status to Watching`)
}
});
client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invinfo")) {
    if(!args) return message.reply('**Select an invitation name**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**I could not find ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - The owner of the invitation',inv.inviter,true)
      .addField('# - The room of the invitation',inv.channel,true)
      .addField('# - Invitation end date',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - Invitation created',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - Duration of the invitation',moment(inv.maxAge).format('DD **Hour** h **Day**'),true)
      .addField('# - Uses',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Hello Dude' , `Welcome to the server **${member}**`)
        .addField('User Id :', "**[" + `${member.id}` + "]**" )
                .addField(' Member Number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' Server', `${member.guild.name}`,true)
.setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  

                                       
        .setTimestamp()
    
    member.createDM().then(function (channel) {
return channel.send(embed)
    }
    )});

client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("Name :", message.author.tag)
    .addField("Level :", EpicEdiTeD[message.author.id].Level)
    .addField("xp :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'fastrandom')) {
    if(!message.channel.guild) return message.channel.send('**This is only for servers**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**This command is for the server owner**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});
client.on('message' , async (message) => {
    if(message.content.startsWith("topinvite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 30) {//The number access number can be modified to the right of the infinity to less or more
          message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))//The name of the Rule
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?‏‏?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//You can repeat the process more than 1 time
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
const voice = JSON.parse(fs.readFileSync("./voicerank.json", "utf8"));
 var returned;
client.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voicerank.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + 'voicerank')) {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
        if(e) console.log(e);
      };
}});
 client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // The command : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (Any letter of the name you want)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **Member Search Feature**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? Search for members within their names:**\n " ${args1} "\n\n**? Number of members:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:|** This Command is currently disabled .. `` try later `` **));
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **You must have the Modify property on the server**');
    message.channel.send(`:eight_pointed_black_star:| **Please write the name of the room**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **I could not find the desired room**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **Time duration in minutes, for example**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **You must set a correct time period .. `` You must rewrite the command``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **Finally, write on what you want to give away**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`Duration: $ {duration / 60000} minutes`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Not specified**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('time is over','!Winner is : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **Giveaway is created successfully**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **I couldn't create the giveaway because i don't have perms**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':Joined Discord', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':Joining our server', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('number of invites', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('`You are muted if it was by mistake Please contact the staff `');
   
       
    }
})
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'alljoin')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**You do not have the power to Move members**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I dont have perms to move members**");
    if (message.member.voiceChannel == null) return message.channel.send(`**Please join a voice channel**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**Successfully Moved all members to your room.**`)


     }
       });
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`Send the message .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`Repeat the message every........Minutes`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`Time in minutes! just numbersٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لLess than a minute and not more than a day`")
  time = co.first().content
co.first().delete()
  e.edit("`Enter the name of the Room`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`Information is being prepared please...`").then(b => {
              setTimeout(() => {
    b.edit(`** Information successfully set up .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});
client.on('message', message => {
if(message.content.includes("<@435392018693488641>")) {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mut" : 
        
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!??**`);
        break;
        case "unmut" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(10000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!??**`);
    }
})
client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("")
    }
    )});
client.login("NTYwODA2Mzg5OTcxNDE5MTc3.D3_Crw.2sfzU6-P_HvcftoGGUesaerS1Ss")
