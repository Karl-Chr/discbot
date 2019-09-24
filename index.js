//Require .env file with bot token
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()


//Bot wwill react to information after this event
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

//Event listener for messages.
client.on('message', msg => {
	const channel = client.channels.get(process.env.CHANNEL_ID)
	if(msg.content === '!anno'){
		channel.send('Send me a private message, and i will send an anonymous message to the correct channel!')
	}
	if(msg.channel.guild == null) {
		const content = msg.content.toString() 
		channel.send('New anonymous message: ' + content)

	}
})

//Connect bot to discord server
client.login(process.env.BOT_TOKEN)