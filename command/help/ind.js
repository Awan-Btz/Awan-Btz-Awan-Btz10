exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`┊ ╭────╮╭࿎࿎─── ︿︿︿︿︿ .
┊〲━❋✨    ̲Welcome ${groupName}_
┊ ╰────╯╰࿎࿎─── ︿︿︿︿︿ .
╭❀:ཻུ۪۪─────────────────╮
┊🌼┊╰─❒Nama= 
┊🍃┊╰─❒Umur= 
┊🍂┊╰─❒Cewe/Cowo= 
┊🌻┊╰─❒Bekerja/pelajar= 
┊🥀┊╰─❒Niat masuk grup= 
╰─❀ TOLONG PATUHI RULES!!🐣✨
:ཻུ۪۪────────────────╯*`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│
├ *Lagu*
│ • ${prefix}lemon
│ • ${prefix}opblackclover10
│ • ${prefix}whereveryouwouldcallme
│ • ${prefix}opblends
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│
├ *Info*
│ • ${prefix}owner
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│
├ *Group*
│ • ${prefix}hidetag [text]
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}
