module.exports = {
	name: 'role',
	description: 'Give role to a user.',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
    if(message.member.permissions.has('ADMINISTRATOR')){       
        const role = message.guild.roles.cache.find(role => role.name === `${args[1]}`);
        const member = message.mentions.members.first();
        member.roles.add(role);
    }
    else{
        message.reply('You don\'t have permissions to do that');
    }
    },
};