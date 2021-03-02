const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!";
client.on("message", function(message) 
{ 
     if (message.author.bot) return;    
     if (!message.content.startsWith(prefix)) return;

     const commandBody = message.content.slice(prefix.length);
 	 //const args = commandBody.split(' ');
 	 const args = message.content.slice(prefix.length).trim().split(' ');
  	 const command = args.shift().toLowerCase();         

  	  
    if (command === "commands") 
  	{
    	message.channel.send(` Les commandes sont : **demons** | **ping** | **pong** `);      
    }     
    else if (command === 'demons') 
  	{
		if (!args.length)
		{
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		const x = args[0];
		const y = args[1];
		const z = args[2];

		
		message.channel.send({embed : {
			color: 16742912,
    		title: 'Démons <:rouge:810983693891403846> | <:gris:810983719724253257> | <:crim:810983746861006888> !',
			description : 'Viens bourriner du démon avec moi !!!!\n ',
		thumbnail: {
    		
    		url : 'https://i.pinimg.com/originals/b0/07/38/b00738e562472fc4e12b0636b7a375d6.png',
    	},
    	
    	fields: [
    	{
        	name: 'Rouge <:rouge:810983693891403846> ',
        	value: x
     	},
      	{
      		name: 'Gris <:gris:810983719724253257>',
      		value: y
     	},
     	{
     		name: 'Crimson <:crim:810983746861006888>',
     	    value: z
     	},

   	 	],

		footer: {
  	    	text : 'Dark Escanor',
  	    	icon_url: 'https://i.imgur.com/rXBqVcE.jpg',
  	    }
  	  	},
   	 	
 		});
		message.channel.send(`\n ||<@&810617139881836584>||`);
	}	
	/*else if( command === 'vocal')
	{
		let channel = member.voice.channel;
		channel.createInvite({unique: true})
		.then(invite => { channel.send("Hey! I've created you an invite: https://discord.gg/" + invite.code)
		})
	}*/
})


client.login(process.env.TOKEN);
