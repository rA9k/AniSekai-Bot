const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
    permission: 'KICK_MEMBERS',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
    
        try {
            if(message.member.permissions.has('KICK_MEMBERS')){
                const taggedUser = message.mentions.users.first();
                const now = Date.now();
                const member = message.mentions.members.first();
             //   member.kick();
             //   message.channel.send(`${taggedUser} was Kicked!\nCommand Executer: ${message.author}`);
             //taggedUser.send(`You were Kicked from ${message.guild.name}!`)
             const Kickk = new Discord.MessageEmbed()
             .setColor('#FFFF00')
             .setTitle('Member Kicked')
             .setDescription(`${taggedUser} was Kicked!\nCommand Executer: ${message.author}`)
             .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic: true})}`)
             .setThumbnail(`${taggedUser.avatarURL({dynamic: true})}`)
             .setFooter(`${taggedUser.tag} • ID: ${taggedUser.id}`, `${taggedUser.avatarURL({dynamic: true})}`)
        
             //taggedUser.send(`You were Kicked from ${message.guild.name}!`)
             member.kick();
             message.channel.send(Kickk);
            }
            else{
                message.reply('You don\'t have permissions to do that');
            }
         } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    
    
	},
};