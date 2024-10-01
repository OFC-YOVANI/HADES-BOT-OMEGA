/*
Holaaa 😂 si estás aquí es para robar la librería por lo menos deja los créditos de tu papá OFC-YOVANI,
ya que andas de rata 
no tengo problemas que usen mi librería siempre cuando dejen créditos
*/
import _0x1804d2 from'node-fetch';import{FormData,Blob}from'formdata-node';import{fileTypeFromBuffer}from'file-type';export default async _0x40f185=>{const {ext:_0xb9125f,mime:_0x524be8}=await fileTypeFromBuffer(_0x40f185),_0x1470ea=new FormData(),_0x3141f8=new Blob([_0x40f185['toArrayBuffer']()],{'type':_0x524be8});_0x1470ea['append']('file',_0x3141f8,'tmp.'+_0xb9125f);const _0x2908fe=await _0x1804d2('https://telegra.ph/upload',{'method':'POST','body':_0x1470ea}),_0x1f7de7=await _0x2908fe['json']();if(_0x1f7de7['error'])throw _0x1f7de7['error'];return'https://telegra.ph'+_0x1f7de7[0x0]['src'];};