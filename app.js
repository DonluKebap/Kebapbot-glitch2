const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
const moment = require("moment");
const weather = require('weather-js');
const request = require('request');
const striptags = require('striptags');
const http = require('http');
const express = require('express');
const app = express();
const sql = require('sqlite');
sql.open("./score.sqlite");
require("moment-duration-format");

// Ayarları config.json'dan alması için burası gerekli.
const config = require("./config.json");

app.get("/", (request, response) => {
  console.log(Date.now() + "Ping alındı. Bu botun hayatta kalmasını sağlar!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", () => {
  // Bot düzgünce başladığında bu eylem çalışır
  console.log(`[BOT]: ${client.users.size} kullanıcıya ve ${client.guilds.size} sunucuya gua hazırım! Silahlandım!`); 
  client.user.setGame(`k-yardım | k-davet | V1.2.0 | Hacklenme İçin Herkesten Özür Diliyoruz`, `https://www.twitch.tv/donlukebap`);
  // Botunuzun oyununu değiştirir, örn: !yardım | 21 sunucuda oynuyor şeklinde.
  // Bunu yayında olarak da yapabilirsin. örn: !yardım yayında şeklinde
  // client.user.setGame(`@Parham yardım | parham.cf`);
});

const prefix = "k-";

client.on("guildCreate", guild => {
  // Bu eylem bot yeni bir sunucuya katıldığında botunuzu tetikler.
  console.log(`Yeni sunucuya katıldım: ${guild.name}\n. Bu sunucu ${guild.memberCount} üye!`);

//client.user.setGame(`parham.cf | p!yardım | ${client.guilds.size} sunucu`);
});

client.on("guildDelete", guild => {
  // Bu eylem bot bir sunucudan ayrıldığında botunuzu tetikler.
  console.log(`Hey beni çıkardılar ;(: ${guild.name}`);
  //client.user.setGame(`parham.cf | p!yardım | ${client.guilds.size} sunucu`);
});



client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'ana-sohbet');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucuya Hoşgeldin!`)
  .setImage("https://media.giphy.com/media/xULW8LVPCQrk0drq4E/giphy.gif")
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .addField(" Sunucudan Ayrıldığın İçin Üzüldük Görüşürüz!",
  "Umarım Birdaha Gelirsin!")          
  .addField("Bu Sunucuda Kebap Botu Kullanılmaktadır",
  "[Beni Sunucuna eklemek Için Tikla](https://discordapp.com/oauth2/authorize?client_id=363748013988118538&scope=bot&permissions=201337864)")         
  .setThumbnail(client.user.avatarURL)
  .addField("Destek Sunucusu",
  "[Destek Sunucusuna Gitmek İçin Tıkla!](https://discord.gg/nRNFpPM)")
  channel.send(embed);
});

client.on('guildMemberAdd', member => {
  const channel = member
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .addField("Bu Sunucuda Kebap Botu Kullanılmaktadır",
  "[Beni Sunucuna eklemek Için Tikla](https://discordapp.com/oauth2/authorize?client_id=363748013988118538&scope=bot&permissions=201337864)")         
  .setThumbnail(client.user.avatarURL)
  .addField("Destek Sunucusu",
  "[Destek Sunucusuna Gitmek İçin Tıkla!](https://discord.gg/nRNFpPM)")
  channel.send(embed);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'sehirmeydani');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucuya Hoşgeldin!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldiniz');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucuya Hoşgeldin!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucuya Hoşgeldin!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucudan Ayrıldı Görüşürüz!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'hosgeldiniz');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucudan Ayrıldı Görüşürüz!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'sehirmeydani');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucudan Ayrıldı Görüşürüz!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'ana-sohbet');
  if (!channel) return;
  let embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${member}, Sunucudan Ayrıldı Görüşürüz!`)
  .setThumbnail(member.user.avatarURL)
  channel.send(embed);
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'Hackerlar') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.reply(`Orul orul Orospu Çocuğu`)
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'kebap') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.reply(`Efendim Birader?`)
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sa') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'sea') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selamun aleyküm') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selamın aleyküm') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selamün aleyküm') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})  
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 's.a') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})   
    message.channel.send(`Aleyküm Selam,  Kardeşim  Hoş Geldin Sandalye çek otur şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  } 
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'selam') {
  if(message.guild.id === "264445053596991498" || message.guild.id === "264445053596991498")return({ 
})    
    message.channel.send(`Selam Dostum Çek Bi Sandalye Otur Şuraya :heart:`)
    message.react("🇦")
    message.react("🇸")
    message.react("🌯")
  }
});

// Bot seption olmaması için bu gerekli yoksa botun ÇILDIRIRRR!
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Haydi, birkaç komut deneyelim huh? 
  
  //Hey bu bot n'apıyor?
 if(command === "yardım") {
    let embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .addField("**__Kebap Bot__**",
    "Komutlarım Aşşağıda!")          
    .addField("**__Eğlence Komutları__**",
    " **Kebappişir-** İsmindende Anlayacağınız Gibi Kebap Pişirirsiniz! \n**Kebapye-**Kebap Yersiniz! \n**KebapIsmarla-**Herkese Kebap Ismarlarsınız \n**yak-**Bi Dal Sigara Yakarsınız :( \n**Yaz-** Bot Dediğiniz Şeyi Yazar \n**Atasözü-** Kebap Etiketlediğiniz Kişiye Atasözü söyler \n**Kebabasor-**Kebap Sorduğunuz Sorulara Evet Yada Hayır diye cevap verir \n**yazıtura-**Anlatılcak bişey yok . \n**Ayrandök-**Etiketlediğiniz Kullanıcıya Ayran Dökersiniz! \n**Öldür-**Etiketlediğiniz kişiyi öldürürsünüz \n**Ayraniç-**Ayran Yani Anlatılcak Bişey yok. \n**Kaçcm-**Kaç cm olduğunu tahimn etmeye çalışır. \n**deepturkishweb-**Anlayağınız Gibi Deepturkishwebin Komik Yorumlarını Söyler \n**gmod-gif-**Komik Gmod Gifleri Atar \n**Söv-**Kebap Etiketlediğiniz Kişiye Söver")
	.addField("**__Kullanıcı Komutları__**",
	"**Yardım-**Komutları Gösterir Aynı Şimdiki Gibi! \n**Ping-**Botun Pingini Gösterir \n**davet-**Botun Davet Linkini Atar \n**anketaç-**Kebap İstediğiniz Gibi Bi Anket Açar. \n**BugünHavanasıl--**kebap Söylediğiniz Sehrin Hava Durumunu Söyler. \n**Sunucu-**Sunucu Bilgilerini Gösterir. \n**Profilbilgi-**Etiketlediğiniz Kişinin Profil Bilgisi Gözükür.")
    .addField("**__Admin Komutları__**",	
    "**Sustur-**Etiketlediğiniz Kişi Mutelenir \n**susturaç-**Etiketlediğiniz Kişinin Mutesi Kalkar \n**Banat-**Etiketlediğiniz Kişiye Ban Atar \n**At-**Etiketlediğiniz Kişiye Kick Atar \n**Temizle-**Belirttiğiniz Kadar Mesaj Siler \n**İsimdeğiş-**Etiketlediğiniz Kişinin ismi Değişir. \n**Duyuruyap-**ismindende anlaşılacağı gibi kebap duyuru yapar.")
    .addField("**__Yapımcı Komutları__**",
    "**eval-**Komutu Denemek İçin Kullanılır \n**Yenidenbaşlat-**Bot Yeniden Başlatılır \n**Load-** İstediğiniz Komutu Yükler \n**unload-** İstediğiniz komutu devre dışı bırakır \n**Reload-**Söylediğiniz Komut Yeniden Başlatılır \n**oyundeğiş-**Kebabın oyun durumu söylediğiniz şeye dönüşür \n**Resimdeğiş-**Kebabın Resmi Değişir")
    .addField("**__Yenilikler__**",
    "**•Giriş-Çıkış mesajları yenilendi eğer Giriş-çıkış Mesajlarını Açmak İsityosanız #hosgeldiniz-#hosgeldin-#sehirmeydanı ve #anasohbet adlı kanallar yapabilirsiniz.** \n**•Daha Fazla Yenilik görmek İçin k-yenilikler yazabilirsiniz.**")
    .addField("Davet",
    "[Beni Davet Etmek Için Tikla](https://discordapp.com/oauth2/authorize?client_id=363748013988118538&scope=bot&permissions=201337864)")
    .setImage("https://media.discordapp.net/attachments/389448663270817792/404683705383124992/paperfold.png?width=400&height=300")
        message.channel.send(embed)
 }
  
 if (command === "öldür") {
      let member = message.mentions.members.first()
    if(!member)
    return message.reply("Kimi Öldürecen");
 // EMBEDLER HARİKADIR! MÜKKEMMEL MESAJLAR YARATMAK İÇİN BUNLARI SİLME <3
         var flip = Math.floor(Math.random() * 2 + 1);
       if (flip === 1) {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setDescription(`${message.author} ${member} kullanıcısını Öldürdü!`)
   .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400337232625401856/animation_2.gif')
   message.channel.send(embed);
 }
       
       else {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setDescription(`${message.author} ${member} kullanıcısını Öldürdü!`)
   .setImage('https://images-ext-2.discordapp.net/external/IMg6cOM9EM8D5f6lC3AL-LOrsltOsuspw0ein9tKlHE/https/cdn.discordapp.com/attachments/389448663270817792/400729271594778645/animation_7.gif')
   message.channel.send(embed);
 } 
}
 
 if (command === "ayrandök") {
	     let member = message.mentions.members.first()
    if(!member)
    return message.reply("Kime Dökçen?");
 // EMBEDLER HARİKADIR! MÜKKEMMEL MESAJLAR YARATMAK İÇİN BUNLARI SİLME <3
    const Discord = require('discord.js')
         let ayran = new Discord.RichEmbed()
		 .setDescription(`${message.author} ${member} kullanıcısına ayran döktü!`)
         .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400284061580394496/69BO9_1483271159_8723.jpg')
         return message.channel.send(ayran);
 }
  
  if (command === "ayraniç") {
     message.channel.sendMessage({
    "embed": {
            title: 'Ayran Kebabın Yanında Vazgeçilmezdir!',
            description: "oh Mis Gibi Geldi!",
            url: '',
            "image": {
            "url": "https://cdn.discordapp.com/attachments/363746758083477505/400359476042924034/Some_ayran_in_copper_cups.jpg",
            }
        }
    });
};    

  // Botun pingi ve API gecikmesi
  if(command === "ping") {
    const m = await message.channel.send("Pingim mi?");
    m.edit(`Pong!\n**Gecikmem: ${m.createdTimestamp - message.createdTimestamp}ms.**`);
  }
  
 if(command === "sunucularım") {
    const servers = client.guilds.map(g => g.name).join("\n");
    message.channel.send(`**Aga bulunduğum sunucular** **\n\n${servers}**\n\nAyrıca toplam **${client.users.size}** kullanıcıya hizmet veriyorum!`);}

  // Bota bir şey söyletmek için lazım...
  if(command === "yaz") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "anket") {
    const anketYap = args.join(" ");
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(anketYap) 
    .setTimestamp()
    message.channel.send(embed)
    .then(function (message) {
      message.react("✔")
      message.react("❌")
    }).catch(function() {
      //Something
     });
}
  
  if(command === "söv") {
  let kufur=[
    "bak senin ananı öttüre öttüre sikerim orospu çocuğu",
    "ananın mına bacagımı sokup yarım vole attıgımının evladi",
    "senin ananı siker baban olurum sonra intihar edip seni piç bırakırım",
    "bak seni bi sikerim götünü hissetmezsin yarrağımın anteni",
    "derini yüzüp onu önce güneşte kurutur, sonra da ondan prezervatif yapıp ananı bir güzel sikerim",
    "elini götüne sokarım sürahi olarak yaşarsın",
    "seni bir sikerim boş otobüste ayakta gidersin",
    "seni telefon direğine bağlar paralelden tüm sülaleni sikerim.",
    "seni bir sikerim dokuz ay bulanık sıçarsın...",
    "seni boğaz köprüsünün ortasında sikerim hem asya izler hem avrupa",
    "senin götünü keser çorap lastiği yaparım",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "senin ananı öttüre öttüre sikerim orospu evladı",
    "küfür ederdim ama anan çok yordu",
    "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
  ]
     let member = message.mentions.members.first()
   if(!member)return message.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Birini Etiketlesen Yada Kendinide Etiketleyebilirsin.')
}});
  if(member.id === "357860399129034752")return message.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Babama Neden Söveyim Lan Orospu Çocuğu!')
}})
  if(member.id === client.user.id){
    message.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`Kendimemi Söveyim Orospu Çocuğu!`)
}})
  }
  else{
  message.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 15)]}.`)
}})
  }
  
}

  if(command === "oyundeğiş") {
    if(message.author.id !== '357860399129034752') 
    return message.reply('kardeş yetkin yok uğraşma!');
    const sayMessage = args.join(` `);
    client.user.setGame(sayMessage);
    message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
  }

  if(command === "isimdeğiş") {
    if(message.author.id !== '357860399129034752') 
    return message.reply('Kardeş yetkin yok uğraşma!');
    const sayMessage = args.join(` `);
    client.user.setUsername(sayMessage);
    message.channel.send(`İsmim **${sayMessage}** olarak değiştirildi :ok_hand:`)
  }

  if(command === "resimdeğiş") {
    if(message.author.id !== '357860399129034752') 
    return message.reply('kardeş yetkin yok uğraşma!');
    const sayMessage = args.join(` `);
    client.user.setAvatar(sayMessage);
    message.channel.send(`Profil resmim **${sayMessage}** olarak değiştirildi :ok_hand:`)
  }

  if(command === "duyuruyap") {
    if(!message.member.hasPermission("MANAGE_NICKNAMES"))
    return (message.channel.send("Mesajları Yönetme yetkin yok"))
    const duyuruYap = args.join(" ");
    message.delete().catch(O_o=>{});
    let embedyaz = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(duyuruYap);
    message.channel.send(embedyaz)
  }

   //Davet Linki
   if(command === "davet") {
      message.channel.send({embed: {
          color: Math.floor(Math.random() * (0xFFFFFF + 1)),
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL
          },
        fields: [
            {
              name: "Davet et",
              value: "[Beni Davet Etmek Için Tikla!](https://discordapp.com/oauth2/authorize?client_id=363748013988118538&scope=bot&permissions=201337864) \n[Kod Ninjaları-Beta Sunucusuna Gitmek İçin Tıkla!](https://discord.gg/nRNFpPM)"
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: ""
          }
        }
      })
   }
    // Kullanıcı Bilgi
    
    if(command === "profilbilgi") {
    
      var user;
    let member = message.mentions.users.first();
        let author = message.author; 
        if(member) {
             user = member;
        } else {
             user = author;
        }
    member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
       if (roles.length < 1) roles = ['Bu Kullanıcının Rolü Yok!'];
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    if(user.presence.status === "dnd"){
      var durum = "Rahatsız Etmeyin"
    }
    else if(user.presence.status === "online"){
      var durum = "Çevrimiçi"
    }
    else if(user.presence.status === "idle"){
      var durum = "Boşta"
    }
      else {
      var durum = "Görünmez"
    }
     const embed5 = new Discord.RichEmbed() 
         .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
         .setTimestamp() 
         .setThumbnail(`${user.displayAvatarURL}`)
         .addField("Kullanıcı", `${user}`, true)
         .addField("Şu anda oynadığı oyun", user.presence.game ? user.presence.game.name : 'Oynadığı bir oyun yok', true) 
         .addField("Durum", `${durum}` , true)
         .addField('Katılım tarihi (Sunucu)', `${userJoined}`, true)
         .addField('Katılım Tarihi (Discord)', `${daysCreated}`, true)
         .addField("Hesabın Kuruluş Tarihi", `${dateFormat(user.createdAt)}`)
         .addField('Bu sunucudaki rolleri', `${roles.join(', ')}`, true)  
         .setFooter(`DonluKebap`); 
         message.channel.send({embed: embed5})
    
    }
  
    if(command === "yenilikler") {
             let güncel = new Discord.RichEmbed()
		     .addField("**Kebap Bot V1.2.0 Sürümünü Kullanıyorsunuz**",
	"**k-Söv** Komutu Eklendi \n**Giriş-Çıkış** Mesajları Yenilendi!")            
         return message.channel.send(güncel);
 }
    //SUNUCUBİLGİ
    if(command === "sunucu") {
      const Discord = require('discord.js')
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor('Sunucu Bilgileri', message.guild.avatarURL)
      .setThumbnail(message.guild.iconURL)
      .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
      .setTimestamp()
      .addField('Sunucu İsmi', message.guild.name, true )
      .addField('Sunucu ID', message.guild.id, true)
      .addField('Varsayılan Kanal',message.guild.defaultChannel, true)
      .addField('Sunucu Bölgesi',message.guild.region, true)
      .addField('Sunucu Kurucusu',message.guild.owner, true)
      .addField('Toplan Kullanıcı', message.guild.members.size, true)
      .addField('Toplam kanal', message.guild.channels.size, true)
      .addField('AFK kanalı',message.guild.AFKChannel,true)
      .addField('Doğrulama Seviyesi',message.guild.verificationLevel, true)
      .addField('Oluşturulma Tarihi', message.guild.createdAt, true)
      .addField('Sunucu İkonunun Bağlantısı',message.guild.iconURL)
      return message.channel.send(kullanicibilgimk);
}

if(command === "kebappişir") {
  message.channel.sendMessage({
    "embed": {
            title: 'Kebap Pişirmek Herkesin Harcı Değildir!',
            description: "Kebaplarda Mis Gibi koktu",
            url: '',
            "image": {
            "url": "https://media.giphy.com/media/xUOxf0jQt4kBe63Ias/giphy.gif",
            }
        }
    });
};

if(command === "kebapye") {
  message.channel.sendMessage({
    "embed": {
            title: 'Kebabınız Geldi!',
            description: "Kebabını Afiyetle Yedin!",
            url: '',
            "image": {
            "url": "https://i.hizliresim.com/bLPm6m.jpg",
            }
        }
    });
};

if(command === "kebapısmarla") {
  message.channel.sendMessage({
    "embed": {
            title: 'Kebaplar Geldi!',
            description: "Herkese Kebap Ismarladın",
            url: '',
            "image": {
            "url": "https://i.hizliresim.com/NOjmdY.jpg",
            }
        }
    });
};
  if(command === "kebabasor") {
    var cevaplar = [
      'Evet',  'Hayır', 'Sanırım evet', 'Sanırım evet', 'Kesinlikle evet', 'Kesinlikle evet', 'marullarım evet diyor.', 'Etlerim Hayır Diyor'
    ];
    // if(message.channel.id === "324213139866648576" || message.channel.id === "310486176920371211")return message.channel.send(":no_entry_sign:Yasaklı komut. Bu kanalda soru soramazsın.")
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]
    message.channel.send(cevap.toString())
   }
  
    if(command === "kaccm") {
    let kaccm=[
      "2cm",
      "Anakonda Görse Arkadaşı Sanar",
      "Zencimisin Birader?",
      "10km fazla değilmi yav?",
      "87 km Yuh Ebe*in A*ı",
      "30 Metre",
      "30cm",
      "5cm",
      "100 Metre",
    ]
      let embed = new Discord.RichEmbed()
       .setDescription(`${kaccm[Math.floor(Math.random() * 9)]}`)
       .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
       return message.channel.send(embed);
       }
  
   if(command === "deepturkishweb") {
       let yorum = [
                   'https://cdn.discordapp.com/attachments/389448663270817792/403263501591642122/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403263079300857856/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403262609870028831/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403264758968483860/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403265077400174594/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403265351544209409/unknown.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403265873504239616/unknown.png',
                   'https://i.hizliresim.com/Lb2mJV.png',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403266409519382538/unknown.png',
                   'https://i.hizliresim.com/76Y5Ol.png'
                  ];
       let embed = new Discord.RichEmbed()
       .setImage(`${yorum[Math.floor(Math.random() * 10)]}`)
       .setDescription(`Al sana bir yorum!`)
       .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
       return message.channel.send(embed);
       }
  
     if(command === "gmod-gif") {
       let yorum = [
                   'https://cdn.discordapp.com/attachments/389448663270817792/403269867349737472/bf11f8a21cad60dfc99a0b0d93530f7da2fbc3d1_00.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403270231545479168/tumblr_nqoueohNaZ1u8tbq4o1_500.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403270496189153280/giphy.gif',
                   'hhttps://cdn.discordapp.com/attachments/389448663270817792/403270700128796672/I_DONT_GIVE_A_SHIT_GMod.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403271058599182336/steamworkshop_webupload_previewfile_420135150_preview.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403271595122098176/VibrantComplicatedHarpyeagle-size_restricted.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403271972290560000/Dr-hax-1-o.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403272401502076928/1484936908_DefiantBelatedFattaileddunnart.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403272618972545024/UncommonInconsequentialClam-max-1mb.gif',
                   'https://cdn.discordapp.com/attachments/389448663270817792/403273096896970763/giphy_1.gif'
                  ];
       let embed = new Discord.RichEmbed()
       .setImage(`${yorum[Math.floor(Math.random() * 10)]}`)
       .setDescription(``)
       .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
       return message.channel.send(embed);
       }
  

  if(command === "atasözü") {
    let ozlusoz=[
      "Aç ayı oynamaz.",
      "Mal istersen bedeninden, evlat istersen belinden",
      "Mayasız yoğurt tutmaz",
      "Baba ekmeği zindan ekmeği, koca ekmeği meydan ekmeği",
      "Ihlamurdan odun olmaz,beslemeden kadın olmaz",
      "Tabak sevdiği deriyi yerden yere çalar.",
      "Yavaş tükürüğün sakala zararı var.",
      "Para parayı çeker.",
      "Para dediğin el kiri",
      "Yabancı koyun kenarda yatar.",
      "Tandır başında bağ dikmek kolaydır.",
      "Laf lafı açar.",
      "Isıran it,dişini göstermez.",
      "Kalın incelene kadar ince üzülür",
      "Kalem kılıçtan keskindir.",
      "Baba mirası yanan mum gibidir.",
    ]
      let embed = new Discord.RichEmbed()
       .setDescription(`${ozlusoz[Math.floor(Math.random() * 16)]}`)
       .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
       return message.channel.send(embed);
       }

  //Hava DURUMUUUUUUUUİİİİİ
  if(command === "bugünhavanasıl") {
  if (!args[0]) return message.channel.send("Şehir girmen gerekiyor bana vahiymi gelcek a**");
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
         if (err) message.channel.send("Dönüşü olmayan hata! Kim bilir ne oldu!?");
         if (!result) {
             message.channel.send("Düzgün bir şehir gir!")
             return; 
         }
         var current = result[0].current; 
         var location = result[0].location;   
         const embed = new Discord.RichEmbed()
             .setDescription(`**${current.skytext}**`) 
             .setTimestamp()
             .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
             .setThumbnail(current.imageUrl)
             .setColor(0x00AE86) 
             .addField('Sıcaklık',`${current.temperature} Derece`, true)
             .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
             .addField('Rüzgar',current.winddisplay, true)
             .addField('Rüzgar Hızı',current.windspeed, true)
             .addField('Nem', `${current.humidity}%`, true)
             message.channel.send({embed});
     });
}

  // Yazı mı Tura mı? *_*
  if(command === "yazıtura") {
       var flip = Math.floor(Math.random() * 2 + 1);
       if (flip === 1) {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966782252023808/1503472_o8efa.png')
   message.channel.send(embed);
 }
       
       else {
    let embed = new Discord.RichEmbed()
   .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
   .setImage('https://cdn.discordapp.com/attachments/358322476167462914/366966718486282240/1TL_reverse.png')
   message.channel.send(embed);
 } 
}

  // İsim değiştir
  if(command === "isimdeğiş") {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) 
  return message.channel.send("Yetkin yok!")
let member = message.mentions.members.first();
if(!member)
  return message.channel.send("Kimin Adını değiştireyim")
let yeniisim = args.slice(1).join(" ");
if(!yeniisim)
  return message.channel.send("Yeni Kullanıcı Adını girmen gerekiyor.")
member.setNickname(yeniisim)
message.channel.send("Değiştirdim!")
}

  // Bazen Müslüm Babaya bağlarsın...
  if(command === "yak") {
 message.channel.send(':cry::smoking:')
     .then(message => message.edit(':cry::smoking:'))
     .then(message => message.edit(':cry::smoking::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud::cloud:'))
     .then(message => message.edit(':cry::smoking::cloud:'))
     .then(message => message.edit(':cry::smoking:'))
     .then(message => message.edit(':cry::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud::cloud:'))
     .then(message => message.edit(':cry::cloud:'))
     .then(message => message.edit('**Sigara bitti** Sigara Sağlığa Zarar Verir **Sigara içmeyiniz**'))
}
  // ＭＵＴＥＬＥＮＤＩＮ　ば屋や
  if(command === "sustur") {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) 
  return message.channel.send("birader yetkin yok!")
  
            let susturulacak = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
            if(!susturulacak) 
            return message.channel.send("Birader Düzgün Birini Etiketle")

            if(susturulacak.id === message.author.id) 
            return message.channel.send("Kardeş Neden Kendini Muteliyon Mazoşistmisin?")
            if(susturulacak.highestRole.position >= message.member.highestRole.position) 
            return message.channel.send("Kardeş bana yetkisi senden yüksek olanları susturmamı isteme")
            let role = message.guild.roles.find(r => r.name === "Susturulmuş");
            if(!role) {
            try {
                role = await message.guild.createRole({
                      name: "Suçlu",
                      color: "#0b0a0a",
                      permission:[]
              });
  
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            } catch(e) {
                console.log(e.stack);
            }
  
          }
  
          if(susturulacak.roles.has(role.id)) return message.channel.send("")
  
          await susturulacak.addRole(role);
          message.channel.send(`Bu kişi başarıyla susturuldu`)
  }

  // MUTE AÇMA
  if(command === "susturaç") {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Birader Yetkin yok!")
    
                let susturulacak = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
                if(!susturulacak) return message.channel.send("kardeş düzgün birini etiketle")
    
                let role = message.guild.roles.find(r => r.name === "Susturulmuş");
    
              if(!role || !susturulacak.roles.has(role.id)) return message.channel.send("bu kişi zaten cezalı değil ta**akmı geçiyon olum!");
    
              susturulacak.removeRole(role);
              message.channel.send(`Bu Kullanıcının mutesi Kaldırıldı.`)
    }

  // Bazı kullanıcılar rahatsız edicidir. Suratlarına tekmeyi bas!
  if(command === "at") {
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("Birader Yetkin Yok Kick Senin Neyine?");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Kullanıcıyı düzgünce etiketlemeyi denesen?");
    if(!member.kickable) 
      return message.reply("Kardeş Bana Yetki Vermişsindir Herhalde");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Birader Adama Sebepsiz kick atılırmı Günah Günah!");
    await member.kick(reason)
      .catch(error => message.reply(`Üzgünüm ${message.author}! Bu kullanıcıyı atamadım çünkü ${error} hatası meydana geldi!`));
    message.channel.send(`**${member.user.tag}**,** ${reason}** sebebiyle, **${message.author.tag}** tarafından sunucudan atıldı.`);

  }
  
  // Banlama Komutu
  if(command === "banat") {
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Kardeş Yetkin Yok Banlamak Senin Neyine");
    
    let member = message.mentions.members.first();
    if(!member)
    return message.reply("Kullanıcıyı düzgünce etiketlemeyi denesen?");
  if(!member.kickable) 
    if(!member.bannable) 
      return message.reply("Kardeş Bana yetki vermişsindir Herhalde");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Birader Adama Sebepsiz Ban Atılırmı Günah Günah!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Üzgünüm ${message.author}! Bu kullanıcıyı atamadım çünkü ${error} hatası meydana geldi!`));
    message.channel.send(`**${member.user.tag}**,** ${reason}** sebebiyle, **${message.author.tag}** tarafından sunucudan yasaklandı.`);
  }
  
  // Bir kullanıcının Profil Fotoğrafını (Avatarını) gösterir.
  if(command === "avatar") {
    let member = message.mentions.members.first()
    if(!member)
    return message.reply("Kullanıcıyı düzgünce etiketlemeyi denesen?");
 // EMBEDLER HARİKADIR! MÜKKEMMEL MESAJLAR YARATMAK İÇİN BUNLARI SİLME <3
    const Discord = require('discord.js')
         const profl = new Discord.RichEmbed()
         .setImage( )
         .setFooter("DonluKebap")
         return message.channel.send(profl);
 }
 
 // Mesaj silme komutu
  if(command === "temizle") {
    if (!message.guild) {
      return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
    }
    let mesajsayisi = parseInt(args.join(' '));
    if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj siliyim olum!.')
    if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem! Elektrik Süpürgesimiyim olum ben');
    message.channel.bulkDelete(mesajsayisi + 1);
    message.channel.send(mesajsayisi +' adet mesajı sildim oh cillop gibi valla!')
  };
});

client.login(config.token);

