const handler=async(_0x255b26,{conn:_0x556438,text:_0x3ffb46,participants:_0xe2907a})=>{const _0x342ff9=_0xe2907a['map'](_0x36dd8c=>_0x36dd8c['id']);if(!_0x3ffb46)var _0x10f625=_0x342ff9['length'];else var _0x10f625=_0x3ffb46;let _0x21c668=0x0;const _0x1d9e0f=[];for(let _0x21a208=0x0;_0x21a208<_0x10f625;_0x21a208++){const _0x148751=_0x255b26['isGroup']?_0xe2907a['find'](_0x46205f=>_0x46205f['id']==_0x342ff9[_0x21a208]):{};(typeof global['db']['data']['users'][_0x342ff9[_0x21a208]]=='undefined'||global['db']['data']['users'][_0x342ff9[_0x21a208]]['chat']==0x0)&&!_0x148751['isAdmin']&&!_0x148751['isSuperAdmin']&&(typeof global['db']['data']['users'][_0x342ff9[_0x21a208]]!=='undefined'?global['db']['data']['users'][_0x342ff9[_0x21a208]]['whitelist']==![]&&(_0x21c668++,_0x1d9e0f['push'](_0x342ff9[_0x21a208])):(_0x21c668++,_0x1d9e0f['push'](_0x342ff9[_0x21a208])));}if(_0x21c668==0x0)return _0x556438['reply'](_0x255b26['chat'],'*[❗]\x20𝙴𝚂𝚃𝙴\x20𝙶𝚁𝚄𝙿𝙾\x20𝙴𝚂\x20𝙰𝙲𝚃𝙸𝚅𝙾,\x20𝙽𝙾\x20𝚃𝙸𝙴𝙽𝙴\x20𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰𝚂\x20:D*',_0x255b26);_0x255b26['reply']('*[\x20⚠\x20𝚁𝙴𝚅𝙸𝚂𝙸𝙾𝙽\x20𝙳𝙴\x20𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾𝚂\x20⚠\x20]*\x0a\x0a*𝙶𝚁𝚄𝙿𝙾:*\x20'+await _0x556438['getName'](_0x255b26['chat'])+'\x0a*𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾:*\x20'+_0x10f625+'\x0a\x0a*[\x20👻\x20𝙻𝙸𝚂𝚃𝙰\x20𝙳𝙴\x20𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰𝚂\x20👻\x20]*\x0a'+_0x1d9e0f['map'](_0x4c5e35=>'\x20\x20👉🏻\x20@'+_0x4c5e35['replace'](/@.+/,''))['join']('\x0a')+'\x0a\x0a*𝙽𝙾𝚃𝙰:\x20𝙴𝚂𝚃𝙾\x20𝙿𝚄𝙴𝙳𝙴\x20𝙽𝙾\x20𝚂𝙴𝚁\x20𝟷𝟶𝟶%\x20𝙰𝙲𝙴𝚁𝚃𝙰𝙳𝙾,\x20𝙴𝙻\x20𝙱𝙾𝚃\x20𝙸𝙽𝙸𝙲𝙸𝙰\x20𝙴𝙻\x20𝙲𝙾𝙽𝚃𝙴𝙾\x20𝙳𝙴\x20𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂\x20𝙰𝙿𝙰𝚁𝚃𝙸𝚁\x20𝙳𝙴\x20𝚀𝚄𝙴\x20𝚂𝙴\x20𝙰𝙲𝚃𝙸𝚅𝙾\x20𝙴𝙽\x20𝙴𝚂𝚃𝙴\x20𝙽𝚄𝙼𝙴𝚁𝙾*',null,{'mentions':_0x1d9e0f});};handler['command']=/^(verfantasmas|fantasmas|sider)$/i,handler['admin']=!![],handler['botAdmin']=!![],handler['register']=!![],handler['group']=!![];export default handler;