const Discord = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
    permission: 'BAN_MEMBERS',
	guildOnly: true,
	execute(message) {
		const user = message.mentions.users.first();
        const taggedUser = message.mentions.users.first();

    if(message.member.permissions.has('BAN_MEMBERS')){    
        const Bann = new Discord.MessageEmbed()
         .setColor('#800000')
         .setTitle('Member Banned')
         .setDescription(`${taggedUser} was Banned!\nCommand Executer: ${message.author}`)
         .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic: true})}`)
         .setThumbnail(`${taggedUser.avatarURL({dynamic: true})}`)
         .setFooter(`${taggedUser.tag} • ID: ${taggedUser.id}`, `${taggedUser.avatarURL({dynamic: true})}`)
        
         message.guild.members.ban(user);
         message.channel.send(Bann);
    }
    else{
        message.reply('You don\'t have permissions to do that');
    }
    },
};