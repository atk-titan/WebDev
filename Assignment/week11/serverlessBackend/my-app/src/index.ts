export default {
	async fetch(request, env, ctx): Promise<Response> {
		// console.log(request.body);
		// console.log(request.headers);

		// if(request.method==='GET'){
		// 	return Response.json({msg:"you sent a request"});
		// }else{
		// 	return Response.json({msg:'you did not send a request.'});
		// }
		return Response.json({msg:'Hello World!'});
	},
} satisfies ExportedHandler<Env>;
