export default async function handler(req,res){
  try{
    const { text, voice, format } = req.body;

    const r = await fetch("https://api.fishaudio.ai/v1/tts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + process.env.64c395adf3154cf18b128dda6cb85257
      },
      body:JSON.stringify({ input:text, voice, format })
    });

    const j = await r.json();
    res.status(200).json(j);

  } catch(err){
    res.status(500).json({error:String(err)});
  }
}
