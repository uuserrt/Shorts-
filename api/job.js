export default async function handler(req,res){
  try{
    const { id } = req.query;

    const r = await fetch(
      "https://api.json2video.com/v2/jobs/" + id,
      { headers:{ "x-api-key": process.env.J2_KEY } }
    );

    const j = await r.json();
    res.status(200).json(j);

  } catch(err){
    res.status(500).json({error:String(err)});
  }
}
