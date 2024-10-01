/*
Holaaa 😂 si estás aquí es para robar la librería por lo menos deja los créditos de tu papá OFC-YOVANI,
ya que andas de rata 
no tengo problemas que usen mi librería siempre cuando dejen créditos
*/
const stdouts=[];export default(_0x587fb1=0xc8)=>{const _0x12bbf6=process['stdout']['write']['bind'](process['stdout']);return module['exports']['disable']=()=>{return module['exports']['isModified']=![],process['stdout']['write']=_0x12bbf6;},process['stdout']['write']=(_0x3f196a,_0x527ce9,_0xe9b2c3)=>{stdouts['push'](Buffer['from'](_0x3f196a,_0x527ce9)),_0x12bbf6(_0x3f196a,_0x527ce9,_0xe9b2c3);if(stdouts['length']>_0x587fb1)stdouts['shift']();},module['exports']['isModified']=!![],module['exports'];};export const isModified=![];export function logs(){return Buffer['concat'](stdouts);}