const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);
        const user = message.mentions.users.first() || message.author;
    /*    const avatarEmbed = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor(user.username)
                .setImage(user.avatarURL({dynamic: true}));
            message.channel.send(avatarEmbed); */
		/*	const exampleEmbed = {
				title: `${user.name}/'s Avatar`,
				image: {
					url: user.avatarURL({dynamic: true}),
				},
			};
			message.channel.send(exampleEmbed); */
	},
};