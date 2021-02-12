const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
module.exports = {
	name: 'unban',
    usage: '[prefix]unban <ID>',
	description: 'Pass the user id to unban them.',
    permission: 'BAN_MEMBERS',
	guildOnly: true,
	execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const idd = args[1];
        const taggedUser = message.mentions.users.first();

    if(message.member.permissions.has('BAN_MEMBERS')){    
        message.guild.members.unban(idd);
        const Unbann = new Discord.MessageEmbed()
         .setColor('#1cfc03')
         .setTitle('Member Unbanned')
         .setDescription(`<@${idd}> was Unbanned!\nCommand Executer: ${message.author}`)
         .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic: true})}`)
         .setThumbnail(`${message.author.avatarURL({dynamic: true})}`)
         .setFooter(`ID: ${idd}`)

        
        message.channel.send(Unbann);
        //message.reply('<@id> was unbanned!');
    }
    else{
        message.reply('You don\'t have permissions to do that');
    }
    },
};