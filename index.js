const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();

const prefix = "@";
client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", function(message) 
{ 
     if (message.author.bot) return;    
     if (!message.content.startsWith(prefix)) return;

     const commandBody = message.content.slice(prefix.length);
 	 //const args = commandBody.split(' ');
 	 const args = message.content.slice(prefix.length).trim().split(' ');
  	 const command = args.shift().toLowerCase();         

  	  
    if (command === "vocal") 
  	{
    	message.member.voice.channel.createInvite().then(invite => message.channel.send(`||<@&810615252050772018> <@&852652324082024479>|| Rejoins nous vocal !) : \n\n https://discord.gg/${invite.code}`));      
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
		message.channel.send(`\n ||<@&810615252050772018> ||,||<@&852652324082024479>||`);
	}else if (command === 'bm') 
  	{
		if (!args.length)
		{
			return message.channel.send(`Veuillez mettre le nombre de démons Bellmoth , ${message.author}!`);
		}
		const x = args[0];

		
		message.channel.send({embed : {
			color: 16742912,
    		title: 'Bellmoth <:bellmoth:846307835554037800> !',
			description : 'Viens bourriner du bellmoth avec moi !!!!\n ',
		thumbnail: {
    		
    		url : 'https://cdn.discordapp.com/emojis/830436965198856202.png?v=1',
    	},
    	
    	fields: [
    	{
        	name: 'Bellmoth <:bellmoth:846307835554037800> ',
        	value: x
     	},
   	 	],

		footer: {
  	    	text : 'Dark Escanor',
  	    	icon_url: 'https://i.imgur.com/rXBqVcE.jpg',
  	    }
  	  	},
   	 	
 		});
		message.channel.send(`\n ||<@&810615252050772018>|| , || <@&852652324082024479>||`);
	}else if (command === 'event') 
  	{
		if (!args.length)
		{
			return message.channel.send(`Veuillez mettre le nombre de démons Bellmoth , ${message.author}!`);
		}
		const x = args[0];

		
		message.channel.send({embed : {
			color: 16742912,
    		title: 'Purinpu demon !',
			description : 'Viens castagner le Purinpu avec moi :)!\n ',
		thumbnail: {
    		
    		url : 'https://pbs.twimg.com/media/EiKsedmVkAAo9he.jpg:large',
    	},
    	
    	fields: [
    	{
        	name: 'Pirunpu ',
        	value: x
     	},
   	 	],

		footer: {
  	    	text : 'Dark Escanor',
  	    	icon_url: 'https://i.imgur.com/rXBqVcE.jpg',
  	    }
  	  	},
   	 	
 		});
		message.channel.send(`\n ||<@&810615252050772018>||`);
	}
	else if (command === 'disaster') 
  	{
		if (!args.length)
		{
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		const x = args[0];
		const y = args[1];
		const z = args[2];

		
		message.channel.send({embed : {
			color: 10181046,
    		title: 'Disasters <:Camila:826438575838986260> | <:lilia:826438547715653672> | <:valenti:826438268580790302> !',
			description : 'Viens taper du disaster !!!!\n ',
		thumbnail: {
    		
    		url : 'https://static.wikia.nocookie.net/nanatsu-no-taizai/images/d/d8/Awakened_Lilia.png/revision/latest?cb=20201018061651',
    	},
    	
    	fields: [
    	{
        	name: 'Camilia <:Camila:826438575838986260> ',
        	value: x
     	},
      	{
      		name: 'Lilia <:lilia:826438547715653672>',
      		value: y
     	},
     	{
     		name: 'Valenti <:valenti:826438268580790302>',
     	    value: z
     	},

   	 	],

		footer: {
  	    	text : 'Dark Escanor',
  	    	icon_url: 'https://i.imgur.com/rXBqVcE.jpg',
  	    }
  	  	},
   	 	
 		});
		message.channel.send(`\n ||<@&810615252050772018>||`);
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

