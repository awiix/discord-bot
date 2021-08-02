const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on("ready", () => {
    console.log("Le bot est bien allumé")
});

client.on("guildMemberAdd", member =>{
    member.send(`Bienvenue sur mon discord ! N'hésite pas dès à présent à choisir tes rôles dans le salon #🤡・rôles :)`);
    let embed = new Discord.RichEmbed ()
        .setDescription ("Mais qui voilà ?! Nous sommes heureux d'accueillir " + member.user + " parmi nous !")
        .setFooter("Nous sommes maintenant " + member.guild.memberCount)
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/715280525056802847/871814503501807616/dcatef3-b82cda3d-6615-496b-a447-e9a5ad97e82c.gif")
        .setTimestamp()
    member.guild.channels.get('871813053333770261').sendMessage(embed)   
});

client.on("ready", async () =>{
    client.user.setStatus("online");
    client.user.setActivity("Face4Real sur YouTube", {type:'WatCHING'} );
});

client.login ("ODcxNDg2Nzk1MTAyMTY3MDkx.YQcBUw.VuH_uMEePD9oNJVBRHcIcupDIN4")