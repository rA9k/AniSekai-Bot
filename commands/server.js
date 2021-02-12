module.exports = {
	name: 'server',
	description: 'Sends server info',
	execute(message, args) {
       
            message.channel.send(`This server's name is: ${message.guild.name}\nTotal Members: ${message.member.guild.memberCount}\nServer Owner: <@${message.member.guild.ownerID}>`);
        
    },
};